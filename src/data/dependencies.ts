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
    target: 'PSI',
    relationship: 'feeds-into',
    description: 'P&IDs define all piping to be shown in isometrics',
    criticalInfo: [
      'Line numbers',
      'Piping configuration',
      'Valve locations',
      'Instrument connections'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSI',
    target: 'ISO',
    relationship: 'feeds-into',
    description: 'Piping specifications guide isometric development',
    criticalInfo: [
      'Material specifications',
      'Fitting standards',
      'Welding requirements',
      'Testing requirements'
    ],
    timing: 'parallel'
  },
  
  // Equipment to Procurement
  {
    source: 'TBE',
    target: 'VDS',
    relationship: 'feeds-into',
    description: 'Technical bid evaluation leads to vendor selection',
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
  
  // Structural Dependencies
  {
    source: 'SDB',
    target: 'PSA',
    relationship: 'feeds-into',
    description: 'Design basis provides criteria for structural analysis',
    criticalInfo: [
      'Design loads',
      'Load combinations',
      'Material properties',
      'Acceptance criteria'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSA',
    target: 'SFP',
    relationship: 'feeds-into',
    description: 'Analysis results determine framing arrangement',
    criticalInfo: [
      'Member sizes',
      'Framing system',
      'Lateral system',
      'Foundation loads'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'SFP',
    target: 'SDD',
    relationship: 'feeds-into',
    description: 'Framing plans detailed into structural drawings',
    criticalInfo: [
      'Connection details',
      'Exact dimensions',
      'Fabrication requirements',
      'Erection sequence'
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
  
  {
    source: 'SDL',
    target: 'FDC',
    relationship: 'feeds-into',
    description: 'Site development affects foundation design',
    criticalInfo: [
      'Finished grades',
      'Drainage patterns',
      'Underground utilities',
      'Access roads'
    ],
    timing: 'parallel'
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
    target: 'BCP',
    relationship: 'feeds-into',
    description: 'Stability requirements drive ballast system design',
    criticalInfo: [
      'Stability limits',
      'Weight distribution',
      'Ballast volumes',
      'COG requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'BCP',
    target: 'BLP',
    relationship: 'feeds-into',
    description: 'Ballast concept refined into detailed procedures',
    criticalInfo: [
      'Tank arrangement',
      'Pump capacities',
      'Sequence logic',
      'Time estimates'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'TAP',
    target: 'TPR',
    relationship: 'feeds-into',
    description: 'Tow analysis provides basis for procedures',
    criticalInfo: [
      'Tug requirements',
      'Weather limits',
      'Route selection',
      'Contingency plans'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HMA',
    target: 'MRP',
    relationship: 'feeds-into',
    description: 'Environmental loads determine mooring requirements',
    criticalInfo: [
      'Design loads',
      'Motion limits',
      'Fatigue loads',
      'Safety factors'
    ],
    timing: 'sequential'
  },
  
  // Instrumentation Dependencies
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
    source: 'PID',
    target: 'LPD',
    relationship: 'requires',
    description: 'P&IDs define all loops to be detailed',
    criticalInfo: [
      'Instrument tags',
      'Loop functions',
      'Signal types',
      'Control narratives'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZOP',
    target: 'CE',
    relationship: 'feeds-into',
    description: 'HAZOP defines safety interlocks for C&E',
    criticalInfo: [
      'Safety functions',
      'Interlock logic',
      'Trip settings',
      'Override requirements'
    ],
    timing: 'sequential'
  },
  
  // Electrical Dependencies
  {
    source: 'EDB',
    target: 'SLD',
    relationship: 'feeds-into',
    description: 'Design basis establishes electrical system parameters',
    criticalInfo: [
      'Voltage levels',
      'System configuration',
      'Redundancy requirements',
      'Design standards'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'ELC',
    target: 'SLD',
    relationship: 'feeds-into',
    description: 'Load list determines power distribution requirements',
    criticalInfo: [
      'Total loads',
      'Load distribution',
      'Critical loads',
      'Future loads'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SLD',
    target: 'SLD_DD',
    relationship: 'feeds-into',
    description: 'Preliminary SLD expanded to detailed design',
    criticalInfo: [
      'Final equipment selection',
      'Protection coordination',
      'Cable routing',
      'Control schemes'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PFD',
    target: 'HAC',
    relationship: 'feeds-into',
    description: 'Process info determines hazardous area classification',
    criticalInfo: [
      'Material properties',
      'Operating conditions',
      'Release sources',
      'Ventilation conditions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAC',
    target: 'EDB',
    relationship: 'validates',
    description: 'Area classification affects electrical design',
    criticalInfo: [
      'Equipment selection',
      'Installation methods',
      'Cable types',
      'Enclosure ratings'
    ],
    timing: 'sequential'
  },
  
  // Telecom/Architecture Dependencies
  {
    source: 'TCP',
    target: 'NSA',
    relationship: 'feeds-into',
    description: 'Telecom philosophy drives network architecture',
    criticalInfo: [
      'System requirements',
      'Technology choices',
      'Integration needs',
      'Security requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'NSA',
    target: 'CTV',
    relationship: 'feeds-into',
    description: 'Network architecture supports CCTV system',
    criticalInfo: [
      'Network capacity',
      'VLAN structure',
      'Storage architecture',
      'Bandwidth allocation'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'ADB',
    target: 'BLC',
    relationship: 'feeds-into',
    description: 'Architectural basis guides building layouts',
    criticalInfo: [
      'Space standards',
      'Design criteria',
      'Material standards',
      'Code requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'BLC',
    target: 'RML',
    relationship: 'feeds-into',
    description: 'Building concepts detailed into room layouts',
    criticalInfo: [
      'Space allocations',
      'Room functions',
      'Adjacencies',
      'Circulation paths'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'RML',
    target: 'FEP',
    relationship: 'feeds-into',
    description: 'Room layouts determine escape routes',
    criticalInfo: [
      'Occupant loads',
      'Exit locations',
      'Travel distances',
      'Assembly points'
    ],
    timing: 'sequential'
  },
  
  // Material/Insulation Dependencies
  {
    source: 'PID',
    target: 'IDS',
    relationship: 'requires',
    description: 'P&IDs identify all insulation requirements',
    criticalInfo: [
      'Line temperatures',
      'Equipment services',
      'Personnel protection needs',
      'Process requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'IDS',
    target: 'IMS',
    relationship: 'feeds-into',
    description: 'Datasheets lead to material specifications',
    criticalInfo: [
      'Material selections',
      'Thickness requirements',
      'Installation methods',
      'Testing requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZID',
    target: 'FPR',
    relationship: 'feeds-into',
    description: 'Fire scenarios from HAZID determine fireproofing',
    criticalInfo: [
      'Fire risk areas',
      'Protection requirements',
      'Rating durations',
      'Critical equipment'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FPR',
    target: 'SDD',
    relationship: 'validates',
    description: 'Fireproofing affects structural detailing',
    criticalInfo: [
      'Coating thicknesses',
      'Application methods',
      'Connection access',
      'Inspection requirements'
    ],
    timing: 'parallel'
  },
  
  // HVAC Dependencies
  {
    source: 'BLC',
    target: 'HDS',
    relationship: 'feeds-into',
    description: 'Building layouts determine HVAC requirements',
    criticalInfo: [
      'Room volumes',
      'Occupancy loads',
      'Equipment heat loads',
      'Ventilation paths'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'HDS',
    target: 'HVL',
    relationship: 'feeds-into',
    description: 'HVAC design specs guide equipment layout',
    criticalInfo: [
      'Equipment sizes',
      'Ductwork routing',
      'Access requirements',
      'Structural loads'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HVL',
    target: 'ELC',
    relationship: 'feeds-into',
    description: 'HVAC equipment adds to electrical loads',
    criticalInfo: [
      'Motor horsepower',
      'Control power needs',
      'VFD requirements',
      'Emergency power needs'
    ],
    timing: 'parallel'
  },
  
  // Cross-discipline Dependencies
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
    source: 'EL',
    target: 'ELC',
    relationship: 'feeds-into',
    description: 'Equipment list provides electrical loads',
    criticalInfo: [
      'Motor sizes',
      'Power requirements',
      'Control power needs',
      'Special power requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PID',
    target: 'ICP',
    relationship: 'feeds-into',
    description: 'P&IDs define control requirements',
    criticalInfo: [
      'Control loops',
      'Interlock requirements',
      'Operating modes',
      'Instrumentation density'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'GBD',
    target: 'BLP',
    relationship: 'requires',
    description: 'GBS design determines ballasting requirements',
    criticalInfo: [
      'Compartment arrangement',
      'Structural capacity',
      'Penetrations',
      'Access provisions'
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
  
  // Document Control Dependencies
  {
    source: 'MR',
    target: 'VDR',
    relationship: 'feeds-into',
    description: 'Material requisitions define vendor document requirements',
    criticalInfo: [
      'Required documents list',
      'Submission schedule',
      'Review requirements',
      'Final documentation'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'VDR',
    target: 'VDS',
    relationship: 'validates',
    description: 'VDR tracks vendor document submissions',
    criticalInfo: [
      'Submission status',
      'Review comments',
      'Approval status',
      'Distribution records'
    ],
    timing: 'parallel'
  },
  
  // Operations and Commissioning
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
  
  // Construction Integration
  {
    source: 'GAD',
    target: 'HUC',
    relationship: 'feeds-into',
    description: 'General arrangements guide hook-up planning',
    criticalInfo: [
      'Equipment locations',
      'Access routes',
      'Interconnections',
      'Work areas'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'COMM',
    target: 'PTR',
    relationship: 'feeds-into',
    description: 'Commissioning procedures lead to performance testing',
    criticalInfo: [
      'System readiness',
      'Test conditions',
      'Operating procedures',
      'Acceptance criteria'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PTR',
    target: 'AAR',
    relationship: 'feeds-into',
    description: 'Performance test results finalize as-built records',
    criticalInfo: [
      'Final operating parameters',
      'Actual performance data',
      'Modifications made',
      'Optimization changes'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'AAR',
    target: 'PER',
    relationship: 'feeds-into',
    description: 'As-built records support project execution report',
    criticalInfo: [
      'Final configuration',
      'Changes from design',
      'Actual quantities',
      'Performance metrics'
    ],
    timing: 'sequential'
  },
  
  // Additional critical paths
  {
    source: 'HMB',
    target: 'PSV_Calc',
    relationship: 'feeds-into',
    description: 'Heat & Material Balance provides relief scenarios',
    criticalInfo: [
      'Maximum flows',
      'Thermodynamic properties',
      'Relief temperatures',
      'Phase conditions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSV_Calc',
    target: 'PID',
    relationship: 'validates',
    description: 'PSV calculations may require P&ID updates',
    criticalInfo: [
      'PSV sizes',
      'Inlet/outlet piping',
      'Relief header routing',
      'Installation details'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'GAD',
    target: 'ISO',
    relationship: 'feeds-into',
    description: '3D model provides routing for isometrics',
    criticalInfo: [
      'Exact routing',
      'Elevations',
      'Support locations',
      'Interference resolution'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MTO',
    target: 'SPO',
    relationship: 'validates',
    description: 'MTO quantities verify spool drawings complete',
    criticalInfo: [
      'Total quantities',
      'Spool counts',
      'Field vs shop split',
      'Material tracking'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'VDS',
    target: 'GAD',
    relationship: 'validates',
    description: 'Vendor data confirms 3D model accuracy',
    criticalInfo: [
      'Actual dimensions',
      'Nozzle orientations',
      'Maintenance space',
      'Anchor bolt patterns'
    ],
    timing: 'sequential'
  },
  
  // Integration dependencies
  {
    source: 'WRG',
    target: 'LOT',
    relationship: 'requires',
    description: 'Final weights essential for load-out planning',
    criticalInfo: [
      'Actual weights',
      'COG verification',
      'Ballast calculations',
      'Stability verification'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'TPR',
    target: 'HUC',
    relationship: 'feeds-into',
    description: 'Tow procedures transition to hook-up phase',
    criticalInfo: [
      'Arrival condition',
      'Mooring installation',
      'Initial connections',
      'Weather windows'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'IMS',
    target: 'COMM',
    relationship: 'feeds-into',
    description: 'Insulation completion required for commissioning',
    criticalInfo: [
      'System completion',
      'Test readiness',
      'Heat tracing operational',
      'Personnel protection'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FEP',
    target: 'COMM',
    relationship: 'validates',
    description: 'Fire escape routes verified during commissioning',
    criticalInfo: [
      'Route accessibility',
      'Emergency lighting',
      'Signage installation',
      'Drill procedures'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'CTV',
    target: 'COMM',
    relationship: 'feeds-into',
    description: 'CCTV system operational for commissioning',
    criticalInfo: [
      'Camera coverage',
      'Recording capability',
      'Control room displays',
      'Integration testing'
    ],
    timing: 'parallel'
  }
];