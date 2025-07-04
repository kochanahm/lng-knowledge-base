// Project phases
export type ProjectPhase = 'FEED' | 'DD' | 'PROC' | 'CONST';

// Disciplines
export type Discipline = 
  | 'Process'
  | 'HSE'
  | 'Equipment'
  | 'Piping'
  | 'Material'
  | 'Structural'
  | 'Civil'
  | 'Naval'
  | 'Weight'
  | 'Instrumentation'
  | 'Electrical'
  | 'Telecom'
  | 'Architecture'
  | 'HVAC'
  | 'Support'
  | 'Integration';

// Issuance status
export type IssuanceStatus = 'IFR' | 'IFD' | 'IFC' | 'IFA' | 'As-Built';

// Learning modes
export enum LearningMode {
  EXPLORE = 'explore',
  GUIDED = 'guided',
  DISCIPLINE = 'discipline',
  PHASE = 'phase',
  WORKFLOW = 'workflow'
}

// Deliverable knowledge structure
export interface DeliverableKnowledge {
  id: string;
  code: string; // e.g., "PFD", "P&ID"
  title: string;
  fullName: string;
  phase: ProjectPhase;
  discipline: Discipline;
  issuanceStatus: IssuanceStatus;
  
  // Core information
  summary: string;
  purpose: string;
  scope: string;
  
  // Educational content
  detailedDescription: string;
  keyComponents: string[];
  deliverables: string[];
  
  // Best practices & guidelines
  bestPractices: string[];
  commonMistakes: string[];
  qualityChecklist: string[];
  
  // Real-world context
  realWorldExamples: string[];
  casestudies?: CaseStudy[];
  
  // Standards & regulations
  applicableStandards: Standard[];
  regulations: string[];
  
  // Templates & tools
  templates?: Template[];
  softwareTools?: string[];
  
  // Visual aids
  diagrams?: Diagram[];
  images?: Image[];
}

// Dependency information
export interface Dependency {
  source: string; // deliverable ID
  target: string; // deliverable ID
  relationship: DependencyType;
  description: string;
  criticalInfo: string[];
  timing: 'sequential' | 'parallel' | 'conditional';
}

export type DependencyType = 
  | 'requires' 
  | 'feeds-into' 
  | 'validates' 
  | 'references' 
  | 'approves';

// Learning content structures
export interface CaseStudy {
  id: string;
  title: string;
  project: string;
  description: string;
  lessonsLearned: string[];
  images?: string[];
}

export interface Standard {
  code: string;
  title: string;
  organization: string;
  relevantSections?: string[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  format: string;
  downloadUrl?: string;
}

export interface Diagram {
  id: string;
  title: string;
  type: 'flowchart' | 'technical' | 'example';
  url: string;
  caption?: string;
}

export interface Image {
  id: string;
  title: string;
  url: string;
  caption?: string;
  source?: string;
}

// Quiz and exercise structures
export interface Quiz {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'drag-drop';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

// User progress tracking
export interface UserProgress {
  userId: string;
  completedDeliverables: string[];
  quizScores: { [quizId: string]: number };
  learningPaths: LearningPathProgress[];
  lastAccessed: Date;
}

export interface LearningPathProgress {
  pathId: string;
  completedSteps: string[];
  currentStep: string;
  startedAt: Date;
  completedAt?: Date;
}

// Filter and search
export interface FilterOptions {
  phases: ProjectPhase[];
  disciplines: Discipline[];
  searchTerm: string;
  issuanceStatus?: IssuanceStatus[];
}

// React Flow node/edge types
export interface DiagramNode {
  id: string;
  type: 'deliverable';
  position: { x: number; y: number };
  data: {
    deliverable: DeliverableKnowledge;
    isHighlighted?: boolean;
    isSelected?: boolean;
  };
}

export interface DiagramEdge {
  id: string;
  source: string;
  target: string;
  type: 'dependency';
  animated?: boolean;
  data?: {
    dependency: Dependency;
  };
}