// src/data/engineeringConstants.ts

export interface Discipline {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface ProjectPhase {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  duration: string;
  accuracy: string;
  objectives: string[];
}

export interface DocumentStatus {
  code: string;
  name: string;
  color: string;
  description: string;
}

export interface Deliverable {
  id: string;
  code: string;
  name: string;
  phase: string;
  discipline: string;
  description: string;
  dependencies: string[];
  status: string;
  reviewCycle: number | string;
  approvers: string[];
}

export interface Interface {
  from: string;
  to: string;
  data: string[];
  timing: string;
}

export interface WorkflowStep {
  id: number;
  name: string;
  duration: number;
  unit: string;
}

export interface ScheduleTask {
  id: number;
  name: string;
  start: string;
  end: string;
  discipline: string;
  phase: string;
  progress: number;
  critical: boolean;
}

export const DISCIPLINES: Record<string, Discipline> = {
  PROCESS: { 
    id: 'process', 
    name: 'Process', 
    icon: 'Workflow', 
    color: 'blue',
    description: 'Process design, PFD, P&ID development, heat & mass balance'
  },
  MECHANICAL: { 
    id: 'mechanical', 
    name: 'Equipment/Mechanical', 
    icon: 'Settings', 
    color: 'green',
    description: 'Equipment sizing, mechanical design, vendor coordination'
  },
  PIPING: { 
    id: 'piping', 
    name: 'Piping', 
    icon: 'GitBranch', 
    color: 'purple',
    description: 'Piping routing, isometrics, stress analysis, MTO'
  },
  INSTRUMENTATION: { 
    id: 'instrumentation', 
    name: 'Instrumentation & Control', 
    icon: 'Cpu', 
    color: 'orange',
    description: 'Control system design, instrument specifications, loop diagrams'
  },
  ELECTRICAL: { 
    id: 'electrical', 
    name: 'Electrical', 
    icon: 'Zap', 
    color: 'yellow',
    description: 'Power distribution, single line diagrams, cable routing'
  },
  CIVIL: { 
    id: 'civil', 
    name: 'Civil Engineering', 
    icon: 'Building', 
    color: 'gray',
    description: 'Foundations, structures, underground networks, site preparation'
  },
  SAFETY: { 
    id: 'safety', 
    name: 'Safety & Environment', 
    icon: 'Shield', 
    color: 'red',
    description: 'HAZOP, HAZID, safety studies, environmental compliance'
  },
  LAYOUT: { 
    id: 'layout', 
    name: 'Plant Layout', 
    icon: 'Layers', 
    color: 'indigo',
    description: 'Plot plan, equipment spacing, 3D model coordination'
  }
};

export const PROJECT_PHASES: Record<string, ProjectPhase> = {
  BASIC: { 
    id: 'basic', 
    name: 'BASIC Engineering/Conceptual',
    description: 'Confirm feasibility, select technology, refine cost estimate',
    deliverables: [
      'Process Design Basis',
      'Block Flow Diagram (BFD)',
      'Preliminary Plot Plan',
      'Technology Selection Report',
      'Economic Evaluation'
    ],
    duration: '2-4 months',
    accuracy: '±30%',
    objectives: [
      'Define business opportunity',
      'Technical assessment',
      'Milestone schedule',
      'Estimated cost range'
    ]
  },
  FEED: { 
    id: 'feed', 
    name: 'Front End Engineering Design',
    description: 'Refine cost estimate to ±10%, prepare for EPC phase',
    deliverables: [
      'Process Flow Diagrams (PFD)',
      'P&ID (Piping & Instrumentation Diagrams)',
      'Equipment Data Sheets',
      'Plot Plan',
      'Material Take-Off (MTO)',
      'Instrument List',
      'Line List'
    ],
    duration: '4-8 months',
    accuracy: '±10%',
    objectives: [
      'Design basis for EPC',
      'Material requisitions for long lead items',
      'Detailed cost estimate',
      'Risk assessment'
    ]
  },
  DETAIL: { 
    id: 'detail', 
    name: 'Detail Design',
    description: 'Complete engineering for construction',
    deliverables: [
      'Isometric Drawings',
      'Civil Works Installation Drawings',
      'Electrical Wiring Diagrams',
      'Vendor Documents',
      '3D Model',
      'Construction Work Packages'
    ],
    duration: '8-14 months',
    accuracy: 'Fixed (Lump Sum)',
    objectives: [
      'All construction drawings',
      'Procurement specifications',
      'Construction sequencing',
      'Quality plans'
    ]
  },
  CONSTRUCTION: {
    id: 'construction',
    name: 'Construction & Commissioning',
    description: 'Build and start-up the facility',
    deliverables: [
      'As-Built Drawings',
      'Operating Manuals',
      'Training Materials',
      'Commissioning Reports',
      'Performance Test Results'
    ],
    duration: '18-36 months',
    accuracy: 'N/A',
    objectives: [
      'Safe construction',
      'Quality control',
      'Schedule compliance',
      'Successful startup'
    ]
  }
};

export const DOCUMENT_STATUS: Record<string, DocumentStatus> = {
  IFR: { 
    code: 'IFR', 
    name: 'Issue For Review', 
    color: 'amber',
    description: 'Document issued for internal/client review and comments'
  },
  IFD: { 
    code: 'IFD', 
    name: 'Issue For Design', 
    color: 'blue',
    description: 'Document issued for use in design by other disciplines'
  },
  IFC: { 
    code: 'IFC', 
    name: 'Issue For Construction', 
    color: 'green',
    description: 'Document approved for construction use'
  },
  IFA: {
    code: 'IFA',
    name: 'Issue For Approval',
    color: 'purple',
    description: 'Document issued for client approval'
  },
  AFC: {
    code: 'AFC',
    name: 'Approved For Construction',
    color: 'emerald',
    description: 'Document approved and frozen for construction'
  }
};

export const DELIVERABLES: Record<string, Deliverable> = {
  BFD: { 
    id: 'BFD',
    code: 'PR-DWG-001',
    name: 'Block Flow Diagram', 
    phase: 'BASIC',
    discipline: 'process',
    description: 'Overall process configuration showing major units',
    dependencies: [],
    status: 'IFR',
    reviewCycle: 14,
    approvers: ['Process Lead', 'Project Manager', 'Client']
  },
  PFD: {
    id: 'PFD',
    code: 'PR-DWG-002',
    name: 'Process Flow Diagram',
    phase: 'FEED',
    discipline: 'process',
    description: 'Detailed process scheme with equipment and streams',
    dependencies: ['BFD'],
    status: 'IFD',
    reviewCycle: 21,
    approvers: ['Process Lead', 'Engineering Manager', 'Client']
  },
  PID: {
    id: 'PID',
    code: 'PR-DWG-003',
    name: 'P&ID - Piping & Instrumentation Diagram',
    phase: 'FEED',
    discipline: 'process',
    description: 'Complete process details with all instruments and controls',
    dependencies: ['PFD', 'INSTRUMENT_LIST', 'LINE_LIST'],
    status: 'IFD',
    reviewCycle: 28,
    approvers: ['Process Lead', 'Instrumentation Lead', 'Operations', 'Client']
  },
  PLOT_PLAN: {
    id: 'PLOT_PLAN',
    code: 'PL-DWG-001',
    name: 'Plot Plan',
    phase: 'FEED',
    discipline: 'layout',
    description: 'Equipment layout with safety spacing requirements',
    dependencies: ['PFD', 'EQUIPMENT_LIST', 'SAFETY_DISTANCES'],
    status: 'IFD',
    reviewCycle: 21,
    approvers: ['Layout Lead', 'Safety Engineer', 'Operations', 'Client']
  },
  EQUIPMENT_LIST: {
    id: 'EQUIPMENT_LIST',
    code: 'PR-DOC-001',
    name: 'Equipment List',
    phase: 'FEED',
    discipline: 'process',
    description: 'Complete list of all process equipment',
    dependencies: ['PFD'],
    status: 'IFD',
    reviewCycle: 14,
    approvers: ['Process Lead', 'Mechanical Lead']
  },
  ISO: {
    id: 'ISO',
    code: 'PI-DWG-001',
    name: 'Isometric Drawings',
    phase: 'DETAIL',
    discipline: 'piping',
    description: '3D piping drawings for fabrication and construction',
    dependencies: ['PID', 'PLOT_PLAN', '3D_MODEL', 'STRESS_ANALYSIS'],
    status: 'IFC',
    reviewCycle: 14,
    approvers: ['Piping Lead', 'Construction Manager']
  },
  '3D_MODEL': {
    id: '3D_MODEL',
    code: 'MD-MOD-001',
    name: '3D Model',
    phase: 'DETAIL',
    discipline: 'piping',
    description: 'Integrated 3D model of entire facility',
    dependencies: ['PLOT_PLAN', 'PID', 'STRUCTURAL_DESIGN'],
    status: 'IFD',
    reviewCycle: 'Continuous',
    approvers: ['All Discipline Leads']
  }
};

export const INTERFACES: Record<string, Interface> = {
  'process-mechanical': {
    from: 'process',
    to: 'mechanical',
    data: ['Equipment Data Sheets', 'Process Conditions', 'Material Selection'],
    timing: 'FEED Phase - Week 4-8'
  },
  'mechanical-piping': {
    from: 'mechanical',
    to: 'piping',
    data: ['Nozzle Orientations', 'Equipment Dimensions', 'Load Data'],
    timing: 'FEED Phase - Week 8-12'
  },
  'piping-civil': {
    from: 'piping',
    to: 'civil',
    data: ['Pipe Support Loads', 'Anchor Points', 'Penetrations'],
    timing: 'Detail Design - Week 4-8'
  },
  'process-instrumentation': {
    from: 'process',
    to: 'instrumentation',
    data: ['Control Philosophy', 'Alarm Settings', 'Interlock Logic'],
    timing: 'FEED Phase - Week 6-10'
  },
  'electrical-instrumentation': {
    from: 'electrical',
    to: 'instrumentation',
    data: ['Power Supply', 'Cable Routing', 'Grounding Requirements'],
    timing: 'Detail Design - Week 2-6'
  }
};

export const WORKFLOW_STEPS: Record<string, WorkflowStep[]> = {
  process_development: [
    { id: 1, name: 'Process Simulation', duration: 2, unit: 'weeks' },
    { id: 2, name: 'Heat & Mass Balance', duration: 1, unit: 'weeks' },
    { id: 3, name: 'PFD Development', duration: 3, unit: 'weeks' },
    { id: 4, name: 'P&ID Development', duration: 4, unit: 'weeks' },
    { id: 5, name: 'HAZOP Study', duration: 2, unit: 'weeks' }
  ],
  equipment_design: [
    { id: 1, name: 'Process Data Sheets', duration: 2, unit: 'weeks' },
    { id: 2, name: 'Mechanical Design', duration: 4, unit: 'weeks' },
    { id: 3, name: 'Vendor Quotations', duration: 6, unit: 'weeks' },
    { id: 4, name: 'Technical Bid Evaluation', duration: 2, unit: 'weeks' },
    { id: 5, name: 'Purchase Orders', duration: 1, unit: 'weeks' }
  ]
};

export const SAMPLE_SCHEDULE: ScheduleTask[] = [
  { 
    id: 1,
    name: 'Process Design',
    start: '2024-01-01',
    end: '2024-03-31',
    discipline: 'process',
    phase: 'FEED',
    progress: 85,
    critical: true
  },
  {
    id: 2,
    name: 'Equipment Sizing',
    start: '2024-02-01',
    end: '2024-05-31',
    discipline: 'mechanical',
    phase: 'FEED',
    progress: 60,
    critical: true
  },
  {
    id: 3,
    name: 'Plot Plan Development',
    start: '2024-03-01',
    end: '2024-05-31',
    discipline: 'layout',
    phase: 'FEED',
    progress: 70,
    critical: false
  },
  {
    id: 4,
    name: 'P&ID Development',
    start: '2024-04-01',
    end: '2024-08-31',
    discipline: 'process',
    phase: 'FEED',
    progress: 45,
    critical: true
  },
  {
    id: 5,
    name: '3D Model Development',
    start: '2024-06-01',
    end: '2024-11-30',
    discipline: 'piping',
    phase: 'DETAIL',
    progress: 25,
    critical: true
  },
  {
    id: 6,
    name: 'Isometric Drawings',
    start: '2024-09-01',
    end: '2025-01-31',
    discipline: 'piping',
    phase: 'DETAIL',
    progress: 10,
    critical: false
  }
];