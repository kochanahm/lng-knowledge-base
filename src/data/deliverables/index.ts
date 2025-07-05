// src/data/deliverables/index.ts

import { DeliverableKnowledge } from '@/types';
import { processDeliverables, hseDeliverables } from './process-hse';
import { equipmentDeliverables, pipingDeliverables } from './equipment-piping';
import { structuralDeliverables, civilDeliverables } from './structural-civil';
import { navalDeliverables } from './naval-marine';
import { instrumentationDeliverables, electricalDeliverables } from './instrumentation-electrical';
import { telecomDeliverables, architectureDeliverables } from './telecom-architecture';

// Combine all deliverables
export const allDeliverables: DeliverableKnowledge[] = [
  ...processDeliverables,
  ...hseDeliverables,
  ...equipmentDeliverables,
  ...pipingDeliverables,
  ...structuralDeliverables,
  ...civilDeliverables,
  ...navalDeliverables,
  ...instrumentationDeliverables,
  ...electricalDeliverables,
  ...telecomDeliverables,
  ...architectureDeliverables,
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

// Placeholder deliverables for remaining disciplines (to be replaced with full data)
const placeholderDeliverables: DeliverableKnowledge[] = [
  // Material & Insulation
  {
    id: 'IDS',
    code: 'IDS',
    title: 'Insulation Datasheets',
    fullName: 'Thermal and Acoustic Insulation Datasheets',
    phase: 'DD',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    summary: 'Specifications for all insulation materials and applications',
    purpose: 'Define insulation requirements for all equipment and piping',
    scope: 'All insulated systems',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Material specs', 'Thickness tables', 'Application methods'],
    deliverables: ['Datasheets', 'Typical details'],
    bestPractices: ['Consider CUI', 'Proper material selection'],
    commonMistakes: ['Wrong material for temperature'],
    qualityChecklist: ['All services covered'],
    realWorldExamples: ['Cryogenic: cellular glass', 'Hot: mineral wool'],
    applicableStandards: [],
    regulations: []
  },
  {
    id: 'IMS',
    code: 'IMS',
    title: 'Insulation Material Specification',
    fullName: 'Insulation Material Specification',
    phase: 'DD',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    summary: 'Detailed specifications for insulation materials',
    purpose: 'Standardize insulation materials',
    scope: 'All insulation types',
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
    purpose: 'Establish weight budget for design',
    scope: 'All topsides and GBS',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Weight breakdown', 'Growth factors', 'COG estimate'],
    deliverables: ['Weight report', 'Weight database'],
    bestPractices: ['Include adequate growth', 'Track continuously'],
    commonMistakes: ['Underestimating growth', 'Missing items'],
    qualityChecklist: ['All equipment included', 'Growth realistic'],
    realWorldExamples: ['Typical growth: 10-20%', 'Steel: 100-150 kg/m²'],
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
  {
    id: 'WRG',
    code: 'WRG',
    title: 'Weight Register',
    fullName: 'Detailed Weight Register',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFA',
    summary: 'Detailed tracking of all weights',
    purpose: 'Maintain accurate weight database',
    scope: 'Every component',
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

  // HVAC
  {
    id: 'HDS',
    code: 'HDS',
    title: 'HVAC Design Specification',
    fullName: 'HVAC System Design Specification',
    phase: 'FEED',
    discipline: 'HVAC',
    issuanceStatus: 'IFD',
    summary: 'Design criteria for HVAC systems',
    purpose: 'Define HVAC requirements for all buildings',
    scope: 'All occupied spaces',
    detailedDescription: 'Placeholder - to be detailed',
    keyComponents: ['Load calculations', 'Equipment sizing', 'Ductwork design'],
    deliverables: ['Design basis', 'Equipment datasheets'],
    bestPractices: ['Consider local climate', 'Energy efficiency'],
    commonMistakes: ['Undersizing for peak loads'],
    qualityChecklist: ['All spaces covered', 'Redundancy provided'],
    realWorldExamples: ['Control room: N+1 redundancy', 'Offices: VAV systems'],
    applicableStandards: [],
    regulations: []
  },
  
  // Add some missing deliverables referenced in dependencies
  {
    id: 'HMB',
    code: 'HMB',
    title: 'Heat & Material Balance',
    fullName: 'Heat and Material Balance',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    summary: 'Energy and mass balance for all process streams',
    purpose: 'Define process stream properties for equipment design',
    scope: 'All process units',
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
    id: 'PSV_Calc',
    code: 'PSV',
    title: 'PSV Calculations',
    fullName: 'Pressure Safety Valve Calculations',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFC',
    summary: 'Relief valve sizing calculations',
    purpose: 'Size PSVs for overpressure protection',
    scope: 'All pressure relief devices',
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
    id: 'GAD',
    code: 'GAD',
    title: 'General Arrangement Drawings',
    fullName: '3D Model General Arrangement Drawings',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    summary: '3D model extracted arrangement drawings',
    purpose: 'Show equipment and piping arrangements',
    scope: 'All areas',
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
    id: 'MTO',
    code: 'MTO',
    title: 'Material Take-Off',
    fullName: 'Piping Material Take-Off',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFA',
    summary: 'Bulk material quantities for procurement',
    purpose: 'Quantify all piping materials',
    scope: 'All piping systems',
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
    id: 'MR',
    code: 'MR',
    title: 'Material Requisitions',
    fullName: 'Equipment Material Requisitions',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFA',
    summary: 'Procurement specifications for equipment',
    purpose: 'Define requirements for equipment procurement',
    scope: 'All major equipment',
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
    id: 'VDS',
    code: 'VDS',
    title: 'Vendor Drawings',
    fullName: 'Vendor Documentation Submittal',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFC',
    summary: 'Certified vendor drawings and data',
    purpose: 'Provide actual equipment details',
    scope: 'All vendor equipment',
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
    id: 'TBE',
    code: 'TBE',
    title: 'Technical Bid Evaluation',
    fullName: 'Technical Bid Evaluation',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    summary: 'Evaluation of vendor proposals',
    purpose: 'Select best technical solution',
    scope: 'All bid packages',
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
    id: 'SPO',
    code: 'SPO',
    title: 'Spool Drawings',
    fullName: 'Piping Spool Drawings',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    summary: 'Fabrication drawings for pipe spools',
    purpose: 'Define spool fabrication requirements',
    scope: 'All prefabricated piping',
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
    id: 'OPM',
    code: 'OPM',
    title: 'Operating Manual',
    fullName: 'Operating Procedures Manual',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFA',
    summary: 'Detailed operating procedures',
    purpose: 'Guide safe facility operation',
    scope: 'All operating scenarios',
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
  
  // Construction phase deliverables
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

// Update the map with all deliverables including placeholders
placeholderDeliverables.forEach(d => deliverablesMap.set(d.id, d));

// Recalculate the complete map
allDeliverables.forEach(d => deliverablesMap.set(d.id, d));

// Export statistics
export const deliverableStats = {
  total: allDeliverables.length,
  byPhase: {
    FEED: allDeliverables.filter(d => d.phase === 'FEED').length,
    DD: allDeliverables.filter(d => d.phase === 'DD').length,
    PROC: allDeliverables.filter(d => d.phase === 'PROC').length,
    CONST: allDeliverables.filter(d => d.phase === 'CONST').length,
  },
  byDiscipline: Object.fromEntries(
    [...new Set(allDeliverables.map(d => d.discipline))].map(disc => [
      disc,
      allDeliverables.filter(d => d.discipline === disc).length
    ])
  ),
  withFullContent: allDeliverables.filter(d => !d.detailedDescription.includes('Placeholder')).length,
  placeholders: allDeliverables.filter(d => d.detailedDescription.includes('Placeholder')).length,
};