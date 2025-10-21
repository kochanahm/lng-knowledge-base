// src/types/index.d.ts

// Global type definitions for the Oil & Gas Engineering System

import { LucideIcon } from 'lucide-react';

// Re-export types from contexts
export type {
  Document,
  ProjectInfo,
  DocumentFilters,
  PendingAction,
  ActionItem,
  Workflow,
  Statistics
} from '../contexts/EngineeringContext';

// Re-export types from constants
export type {
  Discipline,
  ProjectPhase,
  DocumentStatus,
  Deliverable,
  Interface,
  WorkflowStep,
  ScheduleTask
} from '../data/engineeringConstants';

// Component prop types
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

// Activity types for dashboard
export interface Activity {
  id: number | string;
  type: 'document' | 'review' | 'update' | 'interface' | 'approval' | 'coordination';
  title: string;
  description?: string;
  time: string;
  status?: string;
  user: string;
  discipline: string;
}

// Coordination types
export interface CoordinationItem {
  from: string;
  to: string;
  item: string;
  status: 'pending' | 'in-progress' | 'complete';
  dueDate?: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  name: string;
  icon: LucideIcon;
  path?: string;
  badge?: number;
  children?: NavigationItem[];
}

// Filter types
export type FilterValue = string | number | boolean | null;

export interface FilterOption {
  label: string;
  value: FilterValue;
}

// Sort configuration
export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

// Table column definition
export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T) => React.ReactNode;
}

// Status color mappings
export type StatusColor = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'gray' | 'amber' | 'emerald' | 'yellow';

export interface StatusConfig {
  bg: string;
  text: string;
  label: string;
}

// Chart data types
export interface ChartDataPoint {
  x: number | string | Date;
  y: number;
  label?: string;
}

export interface ChartSeries {
  name: string;
  data: ChartDataPoint[];
  color?: string;
}

// Gantt chart types
export interface GanttTask {
  id: string | number;
  name: string;
  start: Date | string;
  end: Date | string;
  progress?: number;
  dependencies?: (string | number)[];
  resource?: string;
  color?: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message?: string;
  timestamp: Date | string;
  read?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Form field types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio';
  value?: any;
  options?: FilterOption[];
  required?: boolean;
  disabled?: boolean;
  validation?: {
    pattern?: RegExp;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    custom?: (value: any) => string | undefined;
  };
}

// API response types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  discipline?: string;
  avatar?: string;
  permissions?: string[];
}

// Project member types
export interface ProjectMember extends User {
  position: string;
  department: string;
  startDate: string;
  responsibilities?: string[];
}

// File upload types
export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  uploadedBy: string;
  url?: string;
  thumbnail?: string;
}

// Comment types
export interface Comment {
  id: string;
  documentId: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: Comment[];
  resolved?: boolean;
}

// Approval types
export interface Approval {
  id: string;
  documentId: string;
  approver: string;
  status: 'pending' | 'approved' | 'rejected' | 'on-hold';
  comments?: string;
  date?: string;
  conditions?: string[];
}

// Risk types
export interface Risk {
  id: string;
  category: 'technical' | 'schedule' | 'cost' | 'safety' | 'environmental';
  description: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation?: string;
  owner?: string;
  status: 'open' | 'mitigated' | 'closed';
}

// Utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys];

// Event handler types
export type ClickHandler<T = HTMLElement> = (event: React.MouseEvent<T>) => void;
export type ChangeHandler<T = HTMLInputElement> = (event: React.ChangeEvent<T>) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type KeyHandler<T = HTMLElement> = (event: React.KeyboardEvent<T>) => void;

// Declare module augmentation for custom properties
declare module 'react' {
  interface CSSProperties {
    '--custom-property'?: string | number;
  }
}