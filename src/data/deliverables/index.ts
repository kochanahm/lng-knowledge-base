import { DeliverableKnowledge } from '@/types';
import { processDeliverables, hseDeliverables } from './process-hse';
import { equipmentDeliverables, pipingDeliverables } from './equipment-piping';

// Import other deliverable files when created
// import { structuralDeliverables, civilDeliverables } from './structural-civil';
// import { navalDeliverables } from './naval-marine';
// import { instrumentationDeliverables, electricalDeliverables } from './instrumentation-electrical';
// etc.

// Combine all deliverables
export const allDeliverables: DeliverableKnowledge[] = [
  ...processDeliverables,
  ...hseDeliverables,
  ...equipmentDeliverables,
  ...pipingDeliverables,
  // Add other deliverables as they're created
];

// Create a map for quick lookup
export const deliverablesMap = new Map<string, DeliverableKnowledge>(
  allDeliverables.map(d => [d.id, d])
);

// Utility functions
export function getDeliverableById(id: string): DeliverableKnowledge | undefined {
  return deliverablesMap.get(id);
}

export function getDeliverablesByPhase(phase: string): DeliverableKnowledge[] {
  return allDeliverables.filter(d => d.phase === phase);
}

export function getDeliverablesByDiscipline(discipline: string): DeliverableKnowledge[] {
  return allDeliverables.filter(d => d.discipline === discipline);
}

export function searchDeliverables(searchTerm: string): DeliverableKnowledge[] {
  const term = searchTerm.toLowerCase();
  return allDeliverables.filter(d => 
    d.title.toLowerCase().includes(term) ||
    d.fullName.toLowerCase().includes(term) ||
    d.summary.toLowerCase().includes(term) ||
    d.code.toLowerCase().includes(term)
  );
}

// Placeholder deliverables for other disciplines (to be replaced with full data)
const placeholderDeliverables: DeliverableKnowledge[] = [
  // Structural
  {
    id: 'SDB',
    code: 'SDB',
    title: 'Structural Design Basis',
    fullName: 'Structural Design Basis',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFD',
    summary: 'Design criteria for all structural elements',
    purpose: 'Define loads, codes, and design parameters',
    scope: 'All structural systems',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Load cases', 'Design codes', 'Material specifications'],
    deliverables: ['Design basis document', 'Load matrices'],
    bestPractices: ['Consider all load combinations', 'Include future expansion'],
    commonMistakes: ['Missing load cases', 'Incorrect code interpretation'],
    qualityChecklist: ['All loads defined', 'Codes identified'],
    realWorldExamples: ['Typical loads: dead, live, wind, seismic'],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'SFP',
    code: 'SFP',
    title: 'Structural Framing Plans',
    fullName: 'Structural Framing Plans',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFD',
    summary: 'Primary structural steel arrangement',
    purpose: 'Define main structural framework',
    scope: 'All steel structures',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'SDD',
    code: 'SDD',
    title: 'Structural Detail Drawings',
    fullName: 'Structural Detail Drawings',
    phase: 'DD',
    discipline: 'Structural',
    issuanceStatus: 'IFC',
    summary: 'Detailed structural connections and members',
    purpose: 'Provide fabrication and construction details',
    scope: 'All structural connections',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  
  // Civil
  {
    id: 'GDR',
    code: 'GDR',
    title: 'Geotechnical Data Report',
    fullName: 'Geotechnical Investigation Report',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFD',
    summary: 'Soil investigation and foundation recommendations',
    purpose: 'Provide geotechnical data for foundation design',
    scope: 'Site investigation',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Soil properties', 'Bearing capacity', 'Settlement analysis'],
    deliverables: ['Geotechnical report', 'Boring logs'],
    bestPractices: ['Adequate boring coverage', 'Consider seasonal variations'],
    commonMistakes: ['Insufficient investigation', 'Missing lab tests'],
    qualityChecklist: ['All areas investigated', 'Lab results complete'],
    realWorldExamples: ['Typical bearing capacity: 150-300 kPa'],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'FDC',
    code: 'FDC',
    title: 'Foundation Design Criteria',
    fullName: 'Foundation Design Criteria',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFD',
    summary: 'Design parameters for foundations',
    purpose: 'Define foundation design requirements',
    scope: 'All foundations',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'GBD',
    code: 'GBD',
    title: 'GBS Detail Drawings',
    fullName: 'Gravity Based Structure Detail Drawings',
    phase: 'DD',
    discipline: 'Civil',
    issuanceStatus: 'IFC',
    summary: 'Detailed design of GBS concrete structure',
    purpose: 'Provide construction details for GBS',
    scope: 'GBS hull and base',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  
  // Naval
  {
    id: 'HMA',
    code: 'HMA',
    title: 'Hydrodynamic Analysis',
    fullName: 'Hydrodynamic and Wave Load Analysis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    summary: 'Analysis of wave and current loads on GBS',
    purpose: 'Determine environmental loads for design',
    scope: 'GBS hull and topsides',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Wave loads', 'Current forces', 'Motion analysis'],
    deliverables: ['Load report', 'Motion RAOs'],
    bestPractices: ['Consider all sea states', 'Include model testing'],
    commonMistakes: ['Underestimating extreme events', 'Wrong wave theory'],
    qualityChecklist: ['All load cases analyzed', 'Model validation'],
    realWorldExamples: ['100-year wave heights typically 15-20m'],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'STA',
    code: 'STA',
    title: 'Stability Analysis',
    fullName: 'GBS Stability Analysis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    summary: 'Stability calculations for all phases',
    purpose: 'Ensure GBS stability during all operations',
    scope: 'Construction through operation',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'BLP',
    code: 'BLP',
    title: 'Ballasting Plan',
    fullName: 'Ballasting and Deballasting Plan',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFC',
    summary: 'Detailed ballasting procedures',
    purpose: 'Define ballast operations for installation',
    scope: 'All ballast operations',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  
  // Instrumentation
  {
    id: 'ICP',
    code: 'ICP',
    title: 'Instrument & Control Philosophy',
    fullName: 'Instrumentation and Control Philosophy',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    summary: 'Overall control system strategy',
    purpose: 'Define control architecture and philosophy',
    scope: 'All control systems',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'CSA',
    code: 'CSA',
    title: 'Control System Architecture',
    fullName: 'Control System Architecture',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    summary: 'DCS/ESD/F&G system configuration',
    purpose: 'Define control system hierarchy',
    scope: 'All control systems',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'LPD',
    code: 'LPD',
    title: 'Loop Drawings',
    fullName: 'Instrumentation Loop Drawings',
    phase: 'DD',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFC',
    summary: 'Detailed control loop diagrams',
    purpose: 'Show complete loop from sensor to final element',
    scope: 'All control loops',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  
  // Weight Control
  {
    id: 'WER',
    code: 'WER',
    title: 'Weight Estimate Report',
    fullName: 'Weight Estimate Report',
    phase: 'FEED',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    summary: 'Initial weight estimate and growth allowance',
    purpose: 'Establish weight budget',
    scope: 'All topsides and GBS',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'COG',
    code: 'COG',
    title: 'COG Tracking Report',
    fullName: 'Center of Gravity Tracking Report',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    summary: 'Track center of gravity location',
    purpose: 'Ensure COG within allowable envelope',
    scope: 'Complete facility',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  
  // Add some construction phase deliverables
  {
    id: 'COMM',
    code: 'COMM',
    title: 'Commissioning Procedures',
    fullName: 'System Commissioning Procedures',
    phase: 'CONST',
    discipline: 'Process',
    issuanceStatus: 'IFA',
    summary: 'Step-by-step commissioning procedures',
    purpose: 'Safe and systematic startup',
    scope: 'All systems',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'LOT',
    code: 'LOT',
    title: 'Load-out Procedures',
    fullName: 'GBS Load-out Procedures',
    phase: 'CONST',
    discipline: 'Naval',
    issuanceStatus: 'IFA',
    summary: 'Procedures for GBS load-out',
    purpose: 'Safe transfer from yard to sea',
    scope: 'Load-out operation',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: [],
    deliverables: [],
    bestPractices: [],
    commonMistakes: [],
    qualityChecklist: [],
    realWorldExamples: [],
    applicableStandards: [],
    regulations: []
  }
];

// Add placeholders to the main array temporarily
allDeliverables.push(...placeholderDeliverables);

// Update the map with all deliverables
placeholderDeliverables.forEach(d => deliverablesMap.set(d.id, d));