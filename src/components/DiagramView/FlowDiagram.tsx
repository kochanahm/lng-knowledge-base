import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Connection,
  BackgroundVariant,
} from 'reactflow';
import { Box } from '@mui/material';
import { CustomDeliverableNode } from './CustomNode';
import { CustomDependencyEdge, EdgeMarkers } from './CustomEdge';
import { useKnowledgeStore } from '@/store/knowledgeStore';
import { useDeliverables } from '@/hooks/useDeliverables';
import {
  createNodesFromDeliverables,
  createEdgesFromDependencies,
  calculateHierarchicalLayout,
  disciplineColors,
} from '@/utils/diagram-helpers';
import { dependencies } from '@/data/dependencies';
import 'reactflow/dist/style.css';

// Define custom node and edge types
const nodeTypes = {
  deliverable: CustomDeliverableNode,
};

const edgeTypes = {
  dependency: CustomDependencyEdge,
};

// Mini map style function
const nodeColor = (node: Node) => {
  const discipline = node.data?.deliverable?.discipline;
  return discipline ? disciplineColors[discipline] : '#ccc';
};

function FlowDiagramInner() {
  const reactFlowInstance = useReactFlow();
  const { 
    filters, 
    selectedDeliverable, 
    highlightedDeliverables,
    learningMode,
    setDiagramView 
  } = useKnowledgeStore();
  const { deliverables } = useDeliverables();
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  // Create and layout nodes/edges when deliverables or filters change
  useEffect(() => {
    // Create nodes from filtered deliverables
    const newNodes = createNodesFromDeliverables(deliverables);
    const visibleNodeIds = new Set(newNodes.map(n => n.id));
    
    // Create edges only between visible nodes
    const newEdges = createEdgesFromDependencies(dependencies, visibleNodeIds);
    
    // Apply hierarchical layout
    const { nodes: layoutedNodes, edges: layoutedEdges } = calculateHierarchicalLayout(
      newNodes,
      newEdges,
      'TB' // Top to bottom
    );
    
    // Apply highlighting
    const nodesWithHighlight = layoutedNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        isHighlighted: highlightedDeliverables.includes(node.id),
      },
    }));
    
    setNodes(nodesWithHighlight);
    setEdges(layoutedEdges);
    
    // Fit view after layout with a small delay
    setTimeout(() => {
      reactFlowInstance.fitView({ padding: 0.2 });
    }, 100);
  }, [deliverables, highlightedDeliverables, setNodes, setEdges, reactFlowInstance]);
  
  // Handle node selection
  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      const deliverableId = node.id;
      useKnowledgeStore.getState().selectDeliverable(deliverableId);
      useKnowledgeStore.getState().markDeliverableViewed(deliverableId);
    },
    []
  );
  
  // Handle edge selection
  const onEdgeClick = useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      if (edge.data?.dependency) {
        useKnowledgeStore.getState().selectDependency(edge.data.dependency);
      }
    },
    []
  );
  
  // Handle pane click (deselect)
  const onPaneClick = useCallback(() => {
    useKnowledgeStore.getState().clearSelection();
  }, []);
  
  // Save view state
  const onMoveEnd = useCallback(() => {
    if (reactFlowInstance) {
      const zoom = reactFlowInstance.getZoom();
      const center = reactFlowInstance.getViewport();
      setDiagramView(zoom, { x: center.x, y: center.y });
    }
  }, [reactFlowInstance, setDiagramView]);
  
  // Prevent default connection behavior
  const onConnect = useCallback((connection: Connection) => {
    // In read-only mode, we don't allow new connections
    return false;
  }, []);
  
  // Focus on selected deliverable
  useEffect(() => {
    if (selectedDeliverable && reactFlowInstance) {
      const node = reactFlowInstance.getNode(selectedDeliverable);
      if (node) {
        const zoom = 1.5;
        const x = node.position.x + (node.width || 200) / 2;
        const y = node.position.y + (node.height || 100) / 2;
        
        reactFlowInstance.setCenter(x, y, { zoom, duration: 800 });
      }
    }
  }, [selectedDeliverable, reactFlowInstance]);
  
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <EdgeMarkers />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        onMoveEnd={onMoveEnd}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        defaultEdgeOptions={{
          animated: false,
          type: 'dependency',
        }}
        minZoom={0.1}
        maxZoom={2}
        attributionPosition="bottom-left"
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1} 
          color="#e0e0e0"
        />
        
        <Controls 
          showInteractive={false}
          position="top-left"
        />
        
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          position="bottom-right"
          style={{
            width: 200,
            height: 150,
          }}
        />
      </ReactFlow>
    </Box>
  );
}

// Export wrapped component
export function FlowDiagram() {
  return (
    <ReactFlowProvider>
      <FlowDiagramInner />
    </ReactFlowProvider>
  );
}