import { useMemo, useCallback } from 'react';
import { useKnowledgeStore } from '@/store/knowledgeStore';
import { 
  allDeliverables, 
  getDeliverableById,
  getDeliverablesByPhase,
  getDeliverablesByDiscipline,
  searchDeliverables
} from '@/data/deliverables';
import { dependencies } from '@/data/dependencies';
import { DeliverableKnowledge, Dependency } from '@/types';

export function useDeliverables() {
  const { filters, selectedDeliverable } = useKnowledgeStore();
  
  // Filter deliverables based on current filters
  const filteredDeliverables = useMemo(() => {
    let result = [...allDeliverables];
    
    // Filter by phases
    if (filters.phases.length > 0) {
      result = result.filter(d => filters.phases.includes(d.phase));
    }
    
    // Filter by disciplines
    if (filters.disciplines.length > 0) {
      result = result.filter(d => filters.disciplines.includes(d.discipline));
    }
    
    // Filter by search term
    if (filters.searchTerm) {
      result = searchDeliverables(filters.searchTerm);
    }
    
    return result;
  }, [filters]);
  
  // Get selected deliverable details
  const selectedDeliverableData = useMemo(() => {
    if (!selectedDeliverable) return null;
    return getDeliverableById(selectedDeliverable);
  }, [selectedDeliverable]);
  
  // Get dependencies for selected deliverable
  const selectedDependencies = useMemo(() => {
    if (!selectedDeliverable) return { upstream: [], downstream: [] };
    
    const upstream = dependencies.filter(d => d.target === selectedDeliverable);
    const downstream = dependencies.filter(d => d.source === selectedDeliverable);
    
    return { upstream, downstream };
  }, [selectedDeliverable]);
  
  // Get related deliverables (connected by dependencies)
  const relatedDeliverables = useMemo(() => {
    if (!selectedDeliverable) return [];
    
    const relatedIds = new Set<string>();
    
    // Add upstream deliverables
    selectedDependencies.upstream.forEach(dep => {
      relatedIds.add(dep.source);
    });
    
    // Add downstream deliverables
    selectedDependencies.downstream.forEach(dep => {
      relatedIds.add(dep.target);
    });
    
    return Array.from(relatedIds)
      .map(id => getDeliverableById(id))
      .filter(Boolean) as DeliverableKnowledge[];
  }, [selectedDeliverable, selectedDependencies]);
  
  // Statistics
  const statistics = useMemo(() => {
    return {
      total: allDeliverables.length,
      filtered: filteredDeliverables.length,
      byPhase: {
        FEED: getDeliverablesByPhase('FEED').length,
        DD: getDeliverablesByPhase('DD').length,
        PROC: getDeliverablesByPhase('PROC').length,
        CONST: getDeliverablesByPhase('CONST').length
      },
      byDiscipline: new Map(
        Array.from(new Set(allDeliverables.map(d => d.discipline))).map(disc => [
          disc,
          getDeliverablesByDiscipline(disc).length
        ])
      )
    };
  }, [filteredDeliverables]);
  
  return {
    deliverables: filteredDeliverables,
    selectedDeliverable: selectedDeliverableData,
    selectedDependencies,
    relatedDeliverables,
    statistics,
    totalDeliverables: allDeliverables.length,
    totalDependencies: dependencies.length
  };
}

// Hook for dependency analysis
export function useDependencyAnalysis(deliverableId: string | null) {
  const getDependencyChain = useCallback((
    id: string,
    direction: 'upstream' | 'downstream',
    visited = new Set<string>()
  ): string[] => {
    if (!id || visited.has(id)) return [];
    visited.add(id);
    
    const deps = direction === 'upstream'
      ? dependencies.filter(d => d.target === id)
      : dependencies.filter(d => d.source === id);
    
    const chain = [id];
    
    deps.forEach(dep => {
      const nextId = direction === 'upstream' ? dep.source : dep.target;
      chain.push(...getDependencyChain(nextId, direction, visited));
    });
    
    return [...new Set(chain)];
  }, []);
  
  const analysis = useMemo(() => {
    if (!deliverableId) return null;
    
    const upstreamChain = getDependencyChain(deliverableId, 'upstream');
    const downstreamChain = getDependencyChain(deliverableId, 'downstream');
    
    // Remove the deliverable itself from chains
    const upstream = upstreamChain.filter(id => id !== deliverableId);
    const downstream = downstreamChain.filter(id => id !== deliverableId);
    
    // Find critical dependencies (required relationships)
    const criticalUpstream = dependencies
      .filter(d => d.target === deliverableId && d.relationship === 'requires')
      .map(d => d.source);
    
    const criticalDownstream = dependencies
      .filter(d => d.source === deliverableId && d.relationship === 'requires')
      .map(d => d.target);
    
    return {
      deliverableId,
      upstreamCount: upstream.length,
      downstreamCount: downstream.length,
      upstreamChain: upstream,
      downstreamChain: downstream,
      criticalUpstream,
      criticalDownstream,
      totalImpact: upstream.length + downstream.length
    };
  }, [deliverableId, getDependencyChain]);
  
  return analysis;
}