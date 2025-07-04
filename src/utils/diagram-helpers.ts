import { Node, Edge, Position } from 'reactflow';
import dagre from 'dagre';
import { DiagramNode, DiagramEdge, DeliverableKnowledge, Dependency, ProjectPhase, Discipline } from '@/types';
import { allDeliverables } from '@/data/deliverables';
import { dependencies } from '@/data/dependencies';

// Color scheme for disciplines
export const disciplineColors: Record<Discipline, string> = {
  Process: '#1976D2',
  HSE: '#E65100',
  Equipment: '#388E3C',
  Piping: '#388E3C',
  Material: '#FF9800',
  Structural: '#7B1FA2',
  Civil: '#7B1FA2',
  Naval: '#00695C',
  Weight: '#33691E',
  Instrumentation: '#D32F2F',
  Electrical: '#F57C00',
  Telecom: '#5D4037',
  Architecture: '#1565C0',
  HVAC: '#1565C0',
  Support: '#BF360C',
  Integration: '#3E2723'
};

// Phase colors for node backgrounds
export const phaseColors: Record<ProjectPhase | 'PROC' | 'CONST', string> = {
  FEED: '#E3F2FD',
  DD: '#F3E5F5',
  PROC: '#E8F5E9',
  CONST: '#FFF3E0'
};

// Convert deliverables to React Flow nodes
export function createNodesFromDeliverables(
  deliverables: DeliverableKnowledge[],
  filters?: {
    phases?: ProjectPhase[];
    disciplines?: Discipline[];
  }
): Node<DiagramNode['data']>[] {
  let filteredDeliverables = deliverables;
  
  if (filters) {
    if (filters.phases && filters.phases.length > 0) {
      filteredDeliverables = filteredDeliverables.filter(d => 
        filters.phases!.includes(d.phase)
      );
    }
    if (filters.disciplines && filters.disciplines.length > 0) {
      filteredDeliverables = filteredDeliverables.filter(d => 
        filters.disciplines!.includes(d.discipline)
      );
    }
  }
  
  return filteredDeliverables.map(deliverable => ({
    id: deliverable.id,
    type: 'deliverable',
    position: { x: 0, y: 0 }, // Will be calculated by layout
    data: {
      deliverable,
      isHighlighted: false,
      isSelected: false
    },
    style: {
      backgroundColor: phaseColors[deliverable.phase],
      borderColor: disciplineColors[deliverable.discipline],
      borderWidth: 3
    }
  }));
}

// Convert dependencies to React Flow edges
export function createEdgesFromDependencies(
  deps: Dependency[],
  visibleNodeIds: Set<string>
): Edge<DiagramEdge['data']>[] {
  return deps
    .filter(dep => 
      visibleNodeIds.has(dep.source) && 
      visibleNodeIds.has(dep.target)
    )
    .map(dep => ({
      id: `${dep.source}-${dep.target}`,
      source: dep.source,
      target: dep.target,
      type: 'dependency',
      animated: dep.timing === 'sequential',
      data: {
        dependency: dep
      },
      style: {
        stroke: dep.relationship === 'requires' ? '#FF5252' : '#999',
        strokeWidth: dep.relationship === 'requires' ? 3 : 2
      }
    }));
}

// Calculate hierarchical layout using dagre
export function calculateHierarchicalLayout(
  nodes: Node[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB'
): { nodes: Node[]; edges: Edge[] } {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  const nodeWidth = 180;
  const nodeHeight = 80;
  
  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: 100,
    edgesep: 50,
    ranksep: 150,
    marginx: 50,
    marginy: 50
  });
  
  // Add nodes to dagre
  nodes.forEach(node => {
    dagreGraph.setNode(node.id, { 
      width: nodeWidth, 
      height: nodeHeight 
    });
  });
  
  // Add edges to dagre
  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target);
  });
  
  // Calculate layout
  dagre.layout(dagreGraph);
  
  // Apply calculated positions
  const layoutedNodes = nodes.map(node => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: (direction === 'TB' ? 'top' : 'left') as Position,
      sourcePosition: (direction === 'TB' ? 'bottom' : 'right') as Position,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2
      }
    };
  });
  
  return { nodes: layoutedNodes, edges };
}

// Group nodes by phase or discipline
export function groupNodes(
  nodes: Node[],
  groupBy: 'phase' | 'discipline'
): Map<string, Node[]> {
  const groups = new Map<string, Node[]>();
  
  nodes.forEach(node => {
    const deliverable = node.data.deliverable;
    const key = groupBy === 'phase' ? deliverable.phase : deliverable.discipline;
    
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(node);
  });
  
  return groups;
}

// Find upstream dependencies (all nodes that feed into the given node)
export function findUpstreamNodes(
  nodeId: string,
  deps: Dependency[],
  visited: Set<string> = new Set()
): string[] {
  if (visited.has(nodeId)) return [];
  visited.add(nodeId);
  
  const upstream: string[] = [];
  const directUpstream = deps
    .filter(dep => dep.target === nodeId)
    .map(dep => dep.source);
  
  upstream.push(...directUpstream);
  
  // Recursively find upstream of upstream
  directUpstream.forEach(upstreamId => {
    upstream.push(...findUpstreamNodes(upstreamId, deps, visited));
  });
  
  return [...new Set(upstream)]; // Remove duplicates
}

// Find downstream dependencies (all nodes that depend on the given node)
export function findDownstreamNodes(
  nodeId: string,
  deps: Dependency[],
  visited: Set<string> = new Set()
): string[] {
  if (visited.has(nodeId)) return [];
  visited.add(nodeId);
  
  const downstream: string[] = [];
  const directDownstream = deps
    .filter(dep => dep.source === nodeId)
    .map(dep => dep.target);
  
  downstream.push(...directDownstream);
  
  // Recursively find downstream of downstream
  directDownstream.forEach(downstreamId => {
    downstream.push(...findDownstreamNodes(downstreamId, deps, visited));
  });
  
  return [...new Set(downstream)]; // Remove duplicates
}

// Find critical path through the network
export function findCriticalPath(
  startNodes: string[],
  endNodes: string[],
  deps: Dependency[]
): string[] {
  // This is a simplified critical path - in reality would need duration data
  const path: string[] = [];
  const visited = new Set<string>();
  
  function traverse(nodeId: string) {
    if (visited.has(nodeId) || endNodes.includes(nodeId)) {
      return;
    }
    
    visited.add(nodeId);
    path.push(nodeId);
    
    const nextNodes = deps
      .filter(dep => dep.source === nodeId && dep.timing === 'sequential')
      .map(dep => dep.target);
    
    nextNodes.forEach(traverse);
  }
  
  startNodes.forEach(traverse);
  return path;
}

// Calculate statistics for the diagram
export function calculateDiagramStats(
  nodes: Node[],
  edges: Edge[]
): {
  nodesByPhase: Map<string, number>;
  nodesByDiscipline: Map<string, number>;
  avgDependencies: number;
  criticalNodes: string[];
} {
  const nodesByPhase = new Map<string, number>();
  const nodesByDiscipline = new Map<string, number>();
  const dependencyCount = new Map<string, number>();
  
  // Count nodes by phase and discipline
  nodes.forEach(node => {
    const { phase, discipline } = node.data.deliverable;
    
    nodesByPhase.set(phase, (nodesByPhase.get(phase) || 0) + 1);
    nodesByDiscipline.set(discipline, (nodesByDiscipline.get(discipline) || 0) + 1);
  });
  
  // Count dependencies per node
  edges.forEach(edge => {
    dependencyCount.set(edge.source, (dependencyCount.get(edge.source) || 0) + 1);
    dependencyCount.set(edge.target, (dependencyCount.get(edge.target) || 0) + 1);
  });
  
  // Calculate average dependencies
  const totalDeps = Array.from(dependencyCount.values()).reduce((a, b) => a + b, 0);
  const avgDependencies = dependencyCount.size > 0 ? totalDeps / dependencyCount.size : 0;
  
  // Find critical nodes (high dependency count)
  const criticalNodes = Array.from(dependencyCount.entries())
    .filter(([_, count]) => count > avgDependencies * 1.5)
    .map(([nodeId, _]) => nodeId);
  
  return {
    nodesByPhase,
    nodesByDiscipline,
    avgDependencies,
    criticalNodes
  };
}