import { Dependency } from '@/types';

export const dependencies: Dependency[] = [
  // Process Dependencies
  {
    source: 'BFD',
    target: 'PFD',
    relationship: 'feeds-into',
    description: 'BFD provides overall process configuration for detailed PFD development',
    criticalInfo: [
      'Process unit arrangement',
      'Major stream routings',
      'Battery limit definitions',
      'Overall material balance'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PFD',
    target: 'HMB',
    relationship: 'feeds-into',
    description: 'PFD is developed together with Heat & Material Balance',
    criticalInfo: [
      'Stream conditions (T, P, Flow)',
      'Equipment duties',
      'Utility requirements',
      'Energy balance'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PFD',
    target: 'PID',
    relationship: 'feeds-into',
    description: 'PFD forms the basis for detailed P&ID development',
    criticalInfo: [
      'Equipment arrangement',
      'Process flow paths',
      'Control philosophy',
      'Operating conditions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PFD',
    target: 'EDS',
    relationship: 'feeds-into',
    description: 'PFD provides process data for equipment specification',
    criticalInfo: [
      'Operating conditions',
      'Equipment duties',
      'Process fluid properties',
      'Turndown requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PID',
    target: 'HAZOP',
    relationship: 'requires',
    description: 'HAZOP study is conducted on completed P&IDs',
    criticalInfo: [
      'Complete piping configuration',
      'All instruments and controls',
      'Safety systems',
      'Operating procedures'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZOP',
    target: 'PID',
    relationship: 'validates',
    description: 'HAZOP findings result in P&ID modifications',
    criticalInfo: [
      'Additional safeguards required',
      'Control modifications',
      'New alarms or interlocks',
      'Piping changes'
    ],
    timing: 'sequential'
  },
  
  // Process to HSE
  {
    source: 'PFD',
    target: 'HAZID',
    relationship: 'feeds-into',
    description: 'PFD provides process information for hazard identification',
    criticalInfo: [
      'Process conditions',
      'Chemical inventories',
      'Equipment types',
      'Process flow'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZID',
    target: 'PFD',
    relationship: 'validates',
    description: 'HAZID may require changes to process configuration',
    criticalInfo: [
      'Safety distances',
      'Process modifications',
      'Additional safeguards',
      'Layout changes'
    ],
    timing: 'sequential'
  },
  
  // Equipment Dependencies
  {
    source: 'EDS',
    target: 'EL',
    relationship: 'feeds-into',
    description: 'Equipment datasheets provide detailed info for equipment list',
    criticalInfo: [
      'Equipment type and size',
      'Design conditions',
      'Materials',
      'Special features'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'EL',
    target: 'PLD',
    relationship: 'feeds-into',
    description: 'Equipment list defines all items to be shown on plot plan',
    criticalInfo: [
      'Equipment tag numbers',
      'Equipment dimensions',
      'Maintenance space requirements',
      'Equipment count'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'EDS',
    target: 'MR',
    relationship: 'feeds-into',
    description: 'Datasheets form basis for material requisitions',
    criticalInfo: [
      'Technical specifications',
      'Performance requirements',
      'Design standards',
      'Special requirements'
    ],
    timing: 'sequential'
  },
  
  // Piping Dependencies
  {
    source: 'EL',
    target: 'PLD',
    relationship: 'requires',
    description: 'Equipment list needed to develop plot plan',
    criticalInfo: [
      'All equipment to be located',
      'Equipment dimensions',
      'Maintenance access needs',
      'Equipment grouping'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PLD',
    target: 'GAD',
    relationship: 'feeds-into',
    description: 'Plot plan is refined into detailed general arrangements',
    criticalInfo: [
      'Equipment locations',
      'Pipe rack routes',
      'Access requirements',
      'Elevation strategy'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PID',
    target: 'ISO',
    relationship: 'requires',
    description: 'P&IDs define what piping to be detailed in isometrics',
    criticalInfo: [
      'Line numbers',
      'Piping configuration',
      'Valve types and locations',
      'Instrument connections'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'GAD',
    target: 'ISO',
    relationship: 'requires',
    description: 'General arrangements provide routing for isometrics',
    criticalInfo: [
      'Pipe routing in 3D',
      'Equipment nozzle locations',
      'Support locations',
      'Elevation changes'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSP',
    target: 'ISO',
    relationship: 'requires',
    description: 'Piping specs define materials for isometrics',
    criticalInfo: [
      'Pipe materials and schedule',
      'Fitting specifications',
      'Valve types',
      'Flange ratings'
    ],
    timing: 'parallel'
  },
  
  // Cross-discipline Process-Equipment
  {
    source: 'HMB',
    target: 'EDS',
    relationship: 'feeds-into',
    description: 'Heat & Material Balance provides sizing data for equipment',
    criticalInfo: [
      'Flow rates',
      'Heat duties',
      'Physical properties',
      'Operating cases'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'VDS',
    target: 'GAD',
    relationship: 'feeds-into',
    description: 'Vendor drawings provide actual equipment details for layout',
    criticalInfo: [
      'Actual equipment dimensions',
      'Nozzle locations',
      'Maintenance space',
      'Foundation requirements'
    ],
    timing: 'sequential'
  },
  
  // Equipment to Procurement
  {
    source: 'MR',
    target: 'TBE',
    relationship: 'feeds-into',
    description: 'Material requisitions used for technical bid evaluation',
    criticalInfo: [
      'Technical requirements',
      'Evaluation criteria',
      'Mandatory requirements',
      'Preferred features'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'TBE',
    target: 'VDS',
    relationship: 'feeds-into',
    description: 'Selected vendor provides detailed drawings',
    criticalInfo: [
      'Vendor selection',
      'Technical clarifications',
      'Final specifications',
      'Delivery requirements'
    ],
    timing: 'sequential'
  },
  
  // Piping to Construction
  {
    source: 'ISO',
    target: 'SPO',
    relationship: 'feeds-into',
    description: 'Isometrics are divided into fabrication spools',
    criticalInfo: [
      'Spool break locations',
      'Shipping limitations',
      'Field weld locations',
      'Fabrication sequence'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'ISO',
    target: 'MTO',
    relationship: 'feeds-into',
    description: 'Isometrics used to generate material take-off',
    criticalInfo: [
      'Pipe quantities',
      'Fitting counts',
      'Valve quantities',
      'Bulk materials'
    ],
    timing: 'parallel'
  },
  
  // HSE to Operations
  {
    source: 'CE',
    target: 'COMM',
    relationship: 'feeds-into',
    description: 'Cause & Effect charts define commissioning logic',
    criticalInfo: [
      'Interlock logic',
      'Shutdown sequences',
      'Alarm settings',
      'Override capabilities'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZOP',
    target: 'OPM',
    relationship: 'feeds-into',
    description: 'HAZOP findings incorporated into operating procedures',
    criticalInfo: [
      'Critical operating limits',
      'Safety precautions',
      'Abnormal operations',
      'Emergency procedures'
    ],
    timing: 'sequential'
  },
  
  // Structural Dependencies
  {
    source: 'PLD',
    target: 'SFP',
    relationship: 'feeds-into',
    description: 'Plot plan defines structural framing requirements',
    criticalInfo: [
      'Equipment locations and loads',
      'Pipe rack routes',
      'Platform requirements',
      'Access structures'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'SFP',
    target: 'SDD',
    relationship: 'feeds-into',
    description: 'Framing plans detailed into structural drawings',
    criticalInfo: [
      'Member sizes',
      'Connection types',
      'Load paths',
      'Elevation strategy'
    ],
    timing: 'sequential'
  },
  
  // Civil Dependencies
  {
    source: 'GDR',
    target: 'FDC',
    relationship: 'feeds-into',
    description: 'Geotechnical data determines foundation design criteria',
    criticalInfo: [
      'Soil bearing capacity',
      'Settlement predictions',
      'Groundwater levels',
      'Seismic parameters'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FDC',
    target: 'GBD',
    relationship: 'feeds-into',
    description: 'Foundation criteria drives GBS structural design',
    criticalInfo: [
      'Design loads',
      'Stability requirements',
      'Settlement limits',
      'Environmental loads'
    ],
    timing: 'sequential'
  },
  
  // Naval/Marine Dependencies
  {
    source: 'HMA',
    target: 'STA',
    relationship: 'feeds-into',
    description: 'Hydrodynamic loads used in stability analysis',
    criticalInfo: [
      'Wave loads',
      'Current forces',
      'Motion characteristics',
      'Environmental criteria'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'STA',
    target: 'BLP',
    relationship: 'feeds-into',
    description: 'Stability analysis determines ballasting requirements',
    criticalInfo: [
      'Stability limits',
      'Weight distribution',
      'Ballast tank sizing',
      'Sequence requirements'
    ],
    timing: 'sequential'
  },
  
  // Weight Control Integration
  {
    source: 'EL',
    target: 'WER',
    relationship: 'feeds-into',
    description: 'Equipment list provides major weight items',
    criticalInfo: [
      'Equipment weights',
      'Equipment locations',
      'Weight uncertainties',
      'Growth allowances'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SFP',
    target: 'WER',
    relationship: 'feeds-into',
    description: 'Structural framing contributes to weight estimate',
    criticalInfo: [
      'Steel tonnage',
      'Platform areas',
      'Fireproofing quantities',
      'Secondary steel'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'WER',
    target: 'COG',
    relationship: 'feeds-into',
    description: 'Weight estimate used to calculate center of gravity',
    criticalInfo: [
      'Weight distribution',
      'Equipment locations',
      'Structural weights',
      'Operational items'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'COG',
    target: 'STA',
    relationship: 'feeds-into',
    description: 'Center of gravity critical for stability analysis',
    criticalInfo: [
      'COG location',
      'Weight total',
      'Weight distribution',
      'COG envelope'
    ],
    timing: 'sequential'
  },
  
  // Additional dependencies for better visualization
  {
    source: 'ICP',
    target: 'CSA',
    relationship: 'feeds-into',
    description: 'I&C philosophy defines control system architecture',
    criticalInfo: [
      'Control philosophy',
      'System hierarchy',
      'Integration requirements',
      'Redundancy strategy'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'CSA',
    target: 'LPD',
    relationship: 'feeds-into',
    description: 'Control architecture defines loop requirements',
    criticalInfo: [
      'System architecture',
      'I/O allocation',
      'Controller assignments',
      'Network topology'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'LPD',
    target: 'COMM',
    relationship: 'feeds-into',
    description: 'Loop drawings needed for commissioning',
    criticalInfo: [
      'Loop configurations',
      'Calibration data',
      'Interlock logic',
      'Test procedures'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'BLP',
    target: 'LOT',
    relationship: 'requires',
    description: 'Ballasting plan essential for load-out',
    criticalInfo: [
      'Ballast sequences',
      'Tank capacities',
      'Pump rates',
      'Stability limits'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'SDB',
    target: 'SFP',
    relationship: 'feeds-into',
    description: 'Design basis drives structural framing',
    criticalInfo: [
      'Design loads',
      'Material specs',
      'Design codes',
      'Safety factors'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FDC',
    target: 'SDB',
    relationship: 'feeds-into',
    description: 'Foundation criteria affects structural design',
    criticalInfo: [
      'Foundation stiffness',
      'Settlement limits',
      'Dynamic response',
      'Base fixity'
    ],
    timing: 'parallel'
  }
];