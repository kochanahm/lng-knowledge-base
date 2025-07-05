import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { 
  DeliverableKnowledge, 
  Dependency, 
  FilterOptions, 
  LearningMode,
  ProjectPhase,
  Discipline 
} from '@/types';

interface KnowledgeState {
  // Current selections
  selectedDeliverable: string | null;
  selectedDependency: Dependency | null;
  learningMode: LearningMode;
  
  // Filters
  filters: FilterOptions;
  
  // UI State
  isPanelOpen: boolean;
  diagramZoom: number;
  diagramCenter: { x: number; y: number };
  
  // Highlighted elements for learning
  highlightedDeliverables: string[];
  highlightedDependencies: string[];
  
  // Learning progress
  viewedDeliverables: Set<string>;
  completedTutorials: Set<string>;
  
  // Actions
  selectDeliverable: (id: string | null) => void;
  selectDependency: (dependency: Dependency | null) => void;
  setLearningMode: (mode: LearningMode) => void;
  updateFilters: (filters: Partial<FilterOptions>) => void;
  
  // UI Actions
  togglePanel: () => void;
  setDiagramView: (zoom: number, center: { x: number; y: number }) => void;
  
  // Highlighting
  highlightDeliverables: (ids: string[]) => void;
  highlightDependencies: (ids: string[]) => void;
  clearHighlights: () => void;
  
  // Progress tracking
  markDeliverableViewed: (id: string) => void;
  markTutorialComplete: (id: string) => void;
  
  // Utility
  resetFilters: () => void;
  clearSelection: () => void;
}

const defaultFilters: FilterOptions = {
  phases: [],
  disciplines: [],
  searchTerm: '',
};

export const useKnowledgeStore = create<KnowledgeState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        selectedDeliverable: null,
        selectedDependency: null,
        learningMode: LearningMode.EXPLORE,
        filters: defaultFilters,
        isPanelOpen: true,
        diagramZoom: 1,
        diagramCenter: { x: 0, y: 0 },
        highlightedDeliverables: [],
        highlightedDependencies: [],
        viewedDeliverables: new Set<string>(),
        completedTutorials: new Set<string>(),
        
        // Actions
        selectDeliverable: (id) => set((state) => {
          if (id) {
            // Mark as viewed when selected
            const newViewed = new Set(state.viewedDeliverables);
            newViewed.add(id);
            return {
              selectedDeliverable: id,
              selectedDependency: null,
              isPanelOpen: true,
              viewedDeliverables: newViewed,
            };
          }
          return {
            selectedDeliverable: id,
            selectedDependency: null,
          };
        }),
        
        selectDependency: (dependency) => set({
          selectedDependency: dependency,
          isPanelOpen: true,
        }),
        
        setLearningMode: (mode) => set({
          learningMode: mode,
        }),
        
        updateFilters: (newFilters) => set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
        
        // UI Actions
        togglePanel: () => set((state) => ({
          isPanelOpen: !state.isPanelOpen,
        })),
        
        setDiagramView: (zoom, center) => set({
          diagramZoom: zoom,
          diagramCenter: center,
        }),
        
        // Highlighting
        highlightDeliverables: (ids) => set({
          highlightedDeliverables: ids,
        }),
        
        highlightDependencies: (ids) => set({
          highlightedDependencies: ids,
        }),
        
        clearHighlights: () => set({
          highlightedDeliverables: [],
          highlightedDependencies: [],
        }),
        
        // Progress tracking
        markDeliverableViewed: (id) => set((state) => ({
          viewedDeliverables: new Set([...state.viewedDeliverables, id]),
        })),
        
        markTutorialComplete: (id) => set((state) => ({
          completedTutorials: new Set([...state.completedTutorials, id]),
        })),
        
        // Utility
        resetFilters: () => set({
          filters: defaultFilters,
        }),
        
        clearSelection: () => set({
          selectedDeliverable: null,
          selectedDependency: null,
          highlightedDeliverables: [],
          highlightedDependencies: [],
        }),
      }),
      {
        name: 'lng-knowledge-store',
        // Custom storage object to handle Set serialization
        storage: {
          getItem: (name) => {
            const str = localStorage.getItem(name);
            if (!str) return null;
            
            const { state } = JSON.parse(str);
            return {
              state: {
                ...state,
                // Convert arrays back to Sets
                viewedDeliverables: new Set(state.viewedDeliverables || []),
                completedTutorials: new Set(state.completedTutorials || []),
              },
            };
          },
          setItem: (name, value) => {
            const { state } = value as { state: KnowledgeState };
            const serializedState = {
              state: {
                ...state,
                // Convert Sets to arrays for storage
                viewedDeliverables: Array.from(state.viewedDeliverables || new Set()),
                completedTutorials: Array.from(state.completedTutorials || new Set()),
              },
            };
            localStorage.setItem(name, JSON.stringify(serializedState));
          },
          removeItem: (name) => {
            localStorage.removeItem(name);
          },
        },
        // Only persist certain parts of the state
        partialize: (state) => ({
          viewedDeliverables: state.viewedDeliverables,
          completedTutorials: state.completedTutorials,
          learningMode: state.learningMode,
          filters: state.filters,
        }),
      }
    )
  )
);

// Selectors
export const useSelectedDeliverable = () => 
  useKnowledgeStore((state) => state.selectedDeliverable);

export const useFilters = () => 
  useKnowledgeStore((state) => state.filters);

export const useLearningMode = () => 
  useKnowledgeStore((state) => state.learningMode);

export const useViewedDeliverables = () => 
  useKnowledgeStore((state) => state.viewedDeliverables);