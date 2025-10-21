// src/contexts/EngineeringContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  DISCIPLINES, 
  PROJECT_PHASES, 
  DOCUMENT_STATUS, 
  DELIVERABLES,
  INTERFACES,
  WORKFLOW_STEPS,
  SAMPLE_SCHEDULE,
  Discipline,
  ProjectPhase,
  DocumentStatus,
  Deliverable,
  Interface,
  WorkflowStep,
  ScheduleTask
} from '../data/engineeringConstants';

// Type definitions
export interface Document {
  id: string;
  code: string;
  name: string;
  type: string;
  discipline: string;
  phase: string;
  status: string;
  revision: string;
  date: string;
  size: string;
  author: string;
  checker: string;
  approver: string;
  comments: number;
  attachments: number;
}

export interface ProjectInfo {
  name: string;
  client: string;
  location: string;
  startDate: string;
  targetCompletion: string;
  contractType: string;
  value: string;
}

export interface DocumentFilters {
  discipline: string;
  status: string;
  phase: string;
  searchQuery: string;
}

export interface PendingAction {
  id: string;
  type: 'review' | 'approval' | 'update';
  title: string;
  assignedTo: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'complete';
  priority: 'low' | 'medium' | 'high';
  discipline: string;
}

export interface ActionItem {
  id: string;
  source: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: 'open' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdDate?: string;
}

export interface Workflow {
  id: string;
  type: string;
  startDate: string;
  status: 'active' | 'complete' | 'paused';
  currentStep: number;
  steps: WorkflowStep[];
  data?: any;
}

export interface Statistics {
  totalDocuments: number;
  documentsByStatus: Record<string, number>;
  documentsByDiscipline: Record<string, number>;
  activeWorkflows: number;
  pendingActionsCount: number;
  openActionItems: number;
  scheduleProgress: number;
}

// Context interface
interface EngineeringContextType {
  // Constants
  DISCIPLINES: Record<string, Discipline>;
  PROJECT_PHASES: Record<string, ProjectPhase>;
  DOCUMENT_STATUS: Record<string, DocumentStatus>;
  DELIVERABLES: Record<string, Deliverable>;
  INTERFACES: Record<string, Interface>;
  WORKFLOW_STEPS: Record<string, WorkflowStep[]>;
  
  // State
  currentPhase: string;
  setCurrentPhase: (phase: string) => void;
  projectInfo: ProjectInfo;
  setProjectInfo: (info: ProjectInfo) => void;
  documents: Document[];
  documentFilters: DocumentFilters;
  setDocumentFilters: (filters: DocumentFilters) => void;
  activeWorkflows: Workflow[];
  pendingActions: PendingAction[];
  setPendingActions: (actions: PendingAction[]) => void;
  schedule: ScheduleTask[];
  criticalPath: number[];
  interfaces: Record<string, Interface>;
  actionItems: ActionItem[];
  
  // Functions
  addDocument: (document: Partial<Document>) => Document;
  updateDocument: (id: string, updates: Partial<Document>) => void;
  deleteDocument: (id: string) => void;
  filterDocuments: () => Document[];
  startWorkflow: (workflowType: string, data?: any) => Workflow;
  updateWorkflowStep: (workflowId: string, stepIndex: number) => void;
  updateScheduleTask: (taskId: number, updates: Partial<ScheduleTask>) => void;
  calculateCriticalPath: () => ScheduleTask[];
  addActionItem: (item: Partial<ActionItem>) => ActionItem;
  updateActionItem: (id: string, updates: Partial<ActionItem>) => void;
  getStatistics: () => Statistics;
}

const EngineeringContext = createContext<EngineeringContextType | undefined>(undefined);

export const useEngineering = (): EngineeringContextType => {
  const context = useContext(EngineeringContext);
  if (!context) {
    throw new Error('useEngineering must be used within an EngineeringProvider');
  }
  return context;
};

interface EngineeringProviderProps {
  children: ReactNode;
}

export const EngineeringProvider: React.FC<EngineeringProviderProps> = ({ children }) => {
  // Project State
  const [currentPhase, setCurrentPhase] = useState<string>('feed');
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    name: 'LNG Facility Project',
    client: 'Energy Corp',
    location: 'Gulf Coast',
    startDate: '2024-01-01',
    targetCompletion: '2026-12-31',
    contractType: 'LSTK',
    value: '$500M'
  });

  // Documents State
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentFilters, setDocumentFilters] = useState<DocumentFilters>({
    discipline: 'all',
    status: 'all',
    phase: 'all',
    searchQuery: ''
  });

  // Workflow State
  const [activeWorkflows, setActiveWorkflows] = useState<Workflow[]>([]);
  const [pendingActions, setPendingActions] = useState<PendingAction[]>([]);

  // Schedule State
  const [schedule, setSchedule] = useState<ScheduleTask[]>(SAMPLE_SCHEDULE);
  const [criticalPath, setCriticalPath] = useState<number[]>([]);

  // Coordination State
  const [interfaces, setInterfaces] = useState<Record<string, Interface>>(INTERFACES);
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);

  // Initialize with sample documents
  useEffect(() => {
    const sampleDocs: Document[] = [
      {
        id: 'DOC-001',
        code: 'PR-DWG-002-001',
        name: 'Process Flow Diagram - Unit 100',
        type: 'PFD',
        discipline: 'process',
        phase: 'FEED',
        status: 'IFD',
        revision: 'B',
        date: '2024-11-15',
        size: '2.4 MB',
        author: 'John Smith',
        checker: 'Jane Doe',
        approver: 'Mike Johnson',
        comments: 3,
        attachments: 2
      },
      {
        id: 'DOC-002',
        code: 'EQ-DS-V-101',
        name: 'Equipment Data Sheet - Separator V-101',
        type: 'Datasheet',
        discipline: 'mechanical',
        phase: 'FEED',
        status: 'IFR',
        revision: 'A',
        date: '2024-11-14',
        size: '1.2 MB',
        author: 'Bob Wilson',
        checker: 'Alice Brown',
        approver: 'Tom Davis',
        comments: 5,
        attachments: 1
      },
      {
        id: 'DOC-003',
        code: 'PL-DWG-001-002',
        name: 'Plot Plan - Process Area',
        type: 'Drawing',
        discipline: 'layout',
        phase: 'FEED',
        status: 'IFC',
        revision: 'C',
        date: '2024-11-13',
        size: '3.8 MB',
        author: 'Sarah Lee',
        checker: 'David Chen',
        approver: 'Emily Wang',
        comments: 0,
        attachments: 0
      },
      {
        id: 'DOC-004',
        code: 'PI-LST-001',
        name: 'Line List - Unit 100',
        type: 'List',
        discipline: 'piping',
        phase: 'FEED',
        status: 'IFD',
        revision: 'B',
        date: '2024-11-12',
        size: '0.8 MB',
        author: 'Mark Taylor',
        checker: 'Lisa Anderson',
        approver: 'Chris Martin',
        comments: 2,
        attachments: 0
      },
      {
        id: 'DOC-005',
        code: 'HS-REP-001',
        name: 'HAZOP Report - Unit 100',
        type: 'Report',
        discipline: 'safety',
        phase: 'FEED',
        status: 'IFC',
        revision: 'A',
        date: '2024-11-11',
        size: '5.2 MB',
        author: 'Paul Robinson',
        checker: 'Nancy White',
        approver: 'Steven Green',
        comments: 8,
        attachments: 4
      }
    ];

    const sampleActions: PendingAction[] = [
      {
        id: 'ACT-001',
        type: 'review',
        title: 'Review P&ID Rev.3',
        assignedTo: 'Process Team',
        dueDate: '2024-11-20',
        status: 'pending',
        priority: 'high',
        discipline: 'process'
      },
      {
        id: 'ACT-002',
        type: 'approval',
        title: 'Approve Equipment Vendor List',
        assignedTo: 'Engineering Manager',
        dueDate: '2024-11-22',
        status: 'pending',
        priority: 'medium',
        discipline: 'mechanical'
      },
      {
        id: 'ACT-003',
        type: 'update',
        title: 'Update 3D Model with Latest Piping',
        assignedTo: 'Piping Team',
        dueDate: '2024-11-25',
        status: 'in-progress',
        priority: 'high',
        discipline: 'piping'
      }
    ];

    const sampleActionItems: ActionItem[] = [
      {
        id: 'AI-001',
        source: 'HAZOP-001',
        description: 'Add pressure relief valve to vessel V-101',
        assignedTo: 'Process',
        dueDate: '2024-11-30',
        status: 'open',
        priority: 'high'
      },
      {
        id: 'AI-002',
        source: '3D Review Meeting',
        description: 'Resolve clash between pipe and cable tray at grid A-5',
        assignedTo: 'Piping/Electrical',
        dueDate: '2024-11-28',
        status: 'open',
        priority: 'medium'
      }
    ];

    setDocuments(sampleDocs);
    setPendingActions(sampleActions);
    setActionItems(sampleActionItems);
  }, []);

  // Document Management Functions
  const addDocument = (document: Partial<Document>): Document => {
    const newDoc: Document = {
      id: `DOC-${Date.now()}`,
      code: document.code || '',
      name: document.name || '',
      type: document.type || '',
      discipline: document.discipline || '',
      phase: document.phase || '',
      status: document.status || 'IFR',
      revision: 'A',
      date: new Date().toISOString().split('T')[0],
      size: document.size || '0 MB',
      author: document.author || '',
      checker: document.checker || '',
      approver: document.approver || '',
      comments: 0,
      attachments: 0,
      ...document
    };
    setDocuments(prev => [...prev, newDoc]);
    return newDoc;
  };

  const updateDocument = (id: string, updates: Partial<Document>): void => {
    setDocuments(prev => 
      prev.map(doc => doc.id === id ? { ...doc, ...updates } : doc)
    );
  };

  const deleteDocument = (id: string): void => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const filterDocuments = (): Document[] => {
    return documents.filter(doc => {
      const matchesDiscipline = documentFilters.discipline === 'all' || doc.discipline === documentFilters.discipline;
      const matchesStatus = documentFilters.status === 'all' || doc.status === documentFilters.status;
      const matchesPhase = documentFilters.phase === 'all' || doc.phase === documentFilters.phase;
      const matchesSearch = !documentFilters.searchQuery || 
        doc.name.toLowerCase().includes(documentFilters.searchQuery.toLowerCase()) ||
        doc.code.toLowerCase().includes(documentFilters.searchQuery.toLowerCase());
      
      return matchesDiscipline && matchesStatus && matchesPhase && matchesSearch;
    });
  };

  // Workflow Management Functions
  const startWorkflow = (workflowType: string, data?: any): Workflow => {
    const newWorkflow: Workflow = {
      id: `WF-${Date.now()}`,
      type: workflowType,
      startDate: new Date().toISOString(),
      status: 'active',
      currentStep: 0,
      steps: WORKFLOW_STEPS[workflowType] || [],
      data
    };
    setActiveWorkflows(prev => [...prev, newWorkflow]);
    return newWorkflow;
  };

  const updateWorkflowStep = (workflowId: string, stepIndex: number): void => {
    setActiveWorkflows(prev =>
      prev.map(wf => 
        wf.id === workflowId 
          ? { ...wf, currentStep: stepIndex }
          : wf
      )
    );
  };

  // Schedule Management Functions
  const updateScheduleTask = (taskId: number, updates: Partial<ScheduleTask>): void => {
    setSchedule(prev =>
      prev.map(task => task.id === taskId ? { ...task, ...updates } : task)
    );
  };

  const calculateCriticalPath = (): ScheduleTask[] => {
    const critical = schedule.filter(task => task.critical);
    setCriticalPath(critical.map(task => task.id));
    return critical;
  };

  // Action Item Management
  const addActionItem = (item: Partial<ActionItem>): ActionItem => {
    const newItem: ActionItem = {
      id: `AI-${Date.now()}`,
      source: item.source || '',
      description: item.description || '',
      assignedTo: item.assignedTo || '',
      dueDate: item.dueDate || '',
      status: 'open',
      priority: item.priority || 'medium',
      createdDate: new Date().toISOString(),
      ...item
    };
    setActionItems(prev => [...prev, newItem]);
    return newItem;
  };

  const updateActionItem = (id: string, updates: Partial<ActionItem>): void => {
    setActionItems(prev =>
      prev.map(item => item.id === id ? { ...item, ...updates } : item)
    );
  };

  // Statistics Functions
  const getStatistics = (): Statistics => {
    return {
      totalDocuments: documents.length,
      documentsByStatus: Object.keys(DOCUMENT_STATUS).reduce((acc, status) => {
        acc[status] = documents.filter(doc => doc.status === status).length;
        return acc;
      }, {} as Record<string, number>),
      documentsByDiscipline: Object.keys(DISCIPLINES).reduce((acc, disc) => {
        acc[disc] = documents.filter(doc => doc.discipline === DISCIPLINES[disc].id).length;
        return acc;
      }, {} as Record<string, number>),
      activeWorkflows: activeWorkflows.length,
      pendingActionsCount: pendingActions.filter(a => a.status === 'pending').length,
      openActionItems: actionItems.filter(a => a.status === 'open').length,
      scheduleProgress: Math.round(
        schedule.reduce((sum, task) => sum + task.progress, 0) / schedule.length
      )
    };
  };

  const value: EngineeringContextType = {
    // Constants
    DISCIPLINES,
    PROJECT_PHASES,
    DOCUMENT_STATUS,
    DELIVERABLES,
    INTERFACES,
    WORKFLOW_STEPS,
    
    // State
    currentPhase,
    setCurrentPhase,
    projectInfo,
    setProjectInfo,
    documents,
    documentFilters,
    setDocumentFilters,
    activeWorkflows,
    pendingActions,
    setPendingActions,
    schedule,
    criticalPath,
    interfaces,
    actionItems,
    
    // Functions
    addDocument,
    updateDocument,
    deleteDocument,
    filterDocuments,
    startWorkflow,
    updateWorkflowStep,
    updateScheduleTask,
    calculateCriticalPath,
    addActionItem,
    updateActionItem,
    getStatistics
  };

  return (
    <EngineeringContext.Provider value={value}>
      {children}
    </EngineeringContext.Provider>
  );
};