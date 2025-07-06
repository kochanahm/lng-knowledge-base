import { DeliverableKnowledge } from '@/types';

// Import all deliverables
import { processExtendedDeliverables } from './process-extended';
import { equipmentDeliverables, hseDeliverables } from './equipment-hse';
import { instrumentationDeliverables, electricalDeliverables } from './instrumentation-electrical';
import { pipingDeliverables, materialDeliverables } from './piping-material';
import { structuralDeliverables, civilDeliverables } from './structural-civil';
import { navalDeliverables, weightDeliverables, telecomDeliverables } from './naval-weight-telecom';
import { architectureDeliverables, hvacDeliverables, supportDeliverables, integrationDeliverables } from './architecture-hvac-support-integration';

// Export combined array
export const allExtendedDeliverables: DeliverableKnowledge[] = [
  ...processExtendedDeliverables,
  ...equipmentDeliverables,
  ...hseDeliverables,
  ...instrumentationDeliverables,
  ...electricalDeliverables,
  ...pipingDeliverables,
  ...materialDeliverables,
  ...structuralDeliverables,
  ...civilDeliverables,
  ...navalDeliverables,
  ...weightDeliverables,
  ...telecomDeliverables,
  ...architectureDeliverables,
  ...hvacDeliverables,
  ...supportDeliverables,
  ...integrationDeliverables
];