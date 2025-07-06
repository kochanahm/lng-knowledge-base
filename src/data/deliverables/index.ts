// src/data/deliverables/index.ts

import { DeliverableKnowledge } from '@/types';
import { processDeliverables, hseDeliverables } from './process-hse';
import { equipmentDeliverables, pipingDeliverables } from './equipment-piping';
import { structuralDeliverables, civilDeliverables } from './structural-civil';
import { navalDeliverables } from './naval-marine';
import { instrumentationDeliverables, electricalDeliverables } from './instrumentation-electrical';
import { telecomDeliverables, architectureDeliverables } from './telecom-architecture';
import { materialDeliverables, weightDeliverables } from './material-weight';
import { hvacDeliverables, supportDeliverables } from './hvac-support';
import { enhancedProcessDeliverables, enhancedEquipmentDeliverables, enhancedPipingDeliverables } from './enhanced-process-equipment-piping';
import { constructionDeliverables } from './construction';

// Import extended deliverables
import { allExtendedDeliverables } from './extended';

// After your existing deliverables arrays, add:
// Remove duplicates based on ID
const existingIds = new Set([
  ...processDeliverables,
  ...hseDeliverables,
  ...equipmentDeliverables,
  ...pipingDeliverables,
  ...instrumentationDeliverables,
  ...electricalDeliverables,
  ...civilDeliverables,
  ...navalDeliverables,
  ...architectureDeliverables,
  ...supportDeliverables
].map(d => d.id));

const newDeliverables = allExtendedDeliverables.filter(
  d => !existingIds.has(d.id)
);

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
  ...materialDeliverables,
  ...weightDeliverables,
  ...hvacDeliverables,
  ...supportDeliverables,
  ...enhancedProcessDeliverables,
  ...enhancedEquipmentDeliverables,
  ...enhancedPipingDeliverables,
  ...constructionDeliverables,
  ...newDeliverables  // Add this line
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
  completionStatus: {
    total: allDeliverables.length,
    withFullContent: allDeliverables.length,
    placeholders: 0,
  }
};