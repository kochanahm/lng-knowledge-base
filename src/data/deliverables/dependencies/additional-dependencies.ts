import { Dependency } from '@/types';

export const additionalDependencies: Dependency[] = [
  // Equipment to Instrumentation Dependencies
  {
    source: 'EDS',
    target: 'ILS',
    relationship: 'feeds-into',
    description: 'Equipment datasheets define instrumentation requirements',
    criticalInfo: [
      'Measurement points',
      'Control requirements',
      'Alarm settings',
      'Instrument ranges'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MTR',
    target: 'VDR',
    relationship: 'requires',
    description: 'Material requisitions require vendor documentation',
    criticalInfo: [
      'Technical submittals',
      'Quality documentation',
      'Test certificates',
      'Operating manuals'
    ],
    timing: 'sequential'
  },
  
  // Structural to Civil Dependencies
  {
    source: 'SFP',
    target: 'GDR',
    relationship: 'validates',
    description: 'Structural framing validates foundation requirements',
    criticalInfo: [
      'Column loads',
      'Foundation sizes',
      'Anchor bolt patterns',
      'Settlement limits'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SDD',
    target: 'BLD',
    relationship: 'feeds-into',
    description: 'Structural details integrated with building design',
    criticalInfo: [
      'Connection points',
      'Load paths',
      'Deflection limits',
      'Vibration criteria'
    ],
    timing: 'parallel'
  },
  
  // Material to Equipment Dependencies
  {
    source: 'MSP',
    target: 'EDS',
    relationship: 'feeds-into',
    description: 'Material selection affects equipment specifications',
    criticalInfo: [
      'Wetted materials',
      'Corrosion allowances',
      'Special alloys',
      'Coating requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FPM',
    target: 'ELS',
    relationship: 'validates',
    description: 'Fireproofing requirements validate equipment in fire zones',
    criticalInfo: [
      'Protection requirements',
      'Critical equipment',
      'Support fireproofing',
      'Access provisions'
    ],
    timing: 'parallel'
  },
  
  // Electrical to Equipment Dependencies
  {
    source: 'ELC',
    target: 'EDS',
    relationship: 'validates',
    description: 'Electrical loads validate motor specifications',
    criticalInfo: [
      'Motor sizes',
      'Starting methods',
      'Power factors',
      'Efficiency requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'CRS',
    target: 'LPD',
    relationship: 'feeds-into',
    description: 'Cable routing affects loop diagram cable assignments',
    criticalInfo: [
      'Cable numbers',
      'Route paths',
      'Tray assignments',
      'Segregation compliance'
    ],
    timing: 'sequential'
  },
  
  // HVAC to Electrical Dependencies
  {
    source: 'HLD',
    target: 'ELC',
    relationship: 'feeds-into',
    description: 'HVAC layouts define electrical load requirements',
    criticalInfo: [
      'Motor loads',
      'Control power',
      'Heater loads',
      'VFD requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'HCS',
    target: 'CDS',
    relationship: 'feeds-into',
    description: 'HVAC controls integrate with building management',
    criticalInfo: [
      'Control points',
      'Alarm signals',
      'Status feedback',
      'Operating modes'
    ],
    timing: 'parallel'
  },
  
  // Support Dependencies
  {
    source: 'TRN',
    target: 'PCN',
    relationship: 'validates',
    description: 'Training requirements validate control complexity',
    criticalInfo: [
      'Operator capabilities',
      'Control complexity',
      'Manual interventions',
      'Emergency procedures'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SPR',
    target: 'VDL',
    relationship: 'feeds-into',
    description: 'Spare parts requirements affect vendor deliverables',
    criticalInfo: [
      'Spare parts lists',
      'Interchangeability data',
      'Storage requirements',
      'Preservation procedures'
    ],
    timing: 'parallel'
  },
  
  // Process to Electrical Power Dependencies
  {
    source: 'HMB',
    target: 'ELC',
    relationship: 'feeds-into',
    description: 'Heat & material balance defines process power loads',
    criticalInfo: [
      'Pump motor sizes',
      'Compressor power',
      'Cooling loads',
      'Heat tracing'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSM',
    target: 'ESS',
    relationship: 'feeds-into',
    description: 'Safeguarding philosophy affects electrical studies',
    criticalInfo: [
      'Emergency loads',
      'UPS requirements',
      'Load shedding',
      'Black start capability'
    ],
    timing: 'parallel'
  },
  
  // Instrumentation to Telecom Dependencies
  {
    source: 'ICP',
    target: 'TCP',
    relationship: 'feeds-into',
    description: 'I&C philosophy drives telecom requirements',
    criticalInfo: [
      'Network requirements',
      'Data volumes',
      'Redundancy needs',
      'Response times'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'CDS',
    target: 'NSA',
    relationship: 'requires',
    description: 'Control system design requires network architecture',
    criticalInfo: [
      'Network topology',
      'Bandwidth requirements',
      'Security zones',
      'Remote access'
    ],
    timing: 'sequential'
  },
  
  // Naval to Weight Dependencies
  {
    source: 'BDS',
    target: 'WER',
    relationship: 'validates',
    description: 'Ballast system design validates weight assumptions',
    criticalInfo: [
      'Ballast water weight',
      'System weight',
      'CoG effects',
      'Stability margins'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'TOW',
    target: 'WMR',
    relationship: 'requires',
    description: 'Tow procedures require final weight confirmation',
    criticalInfo: [
      'Final weights',
      'CoG location',
      'Ballast plan',
      'Stability checks'
    ],
    timing: 'sequential'
  },
  
  // HSE to Operations Dependencies
  {
    source: 'HAZOP',
    target: 'SDS',
    relationship: 'feeds-into',
    description: 'HAZOP findings affect shutdown procedures',
    criticalInfo: [
      'Emergency scenarios',
      'Isolation requirements',
      'Depressuring needs',
      'Safety interlocks'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FES',
    target: 'TRN',
    relationship: 'feeds-into',
    description: 'Fire study impacts emergency response training',
    criticalInfo: [
      'Fire scenarios',
      'Response strategies',
      'Equipment locations',
      'Escape routes'
    ],
    timing: 'parallel'
  },
  
  // Civil to Equipment Dependencies
  {
    source: 'GDR',
    target: 'EDS',
    relationship: 'validates',
    description: 'Geotechnical data validates heavy equipment placement',
    criticalInfo: [
      'Bearing capacity',
      'Settlement limits',
      'Dynamic considerations',
      'Foundation types'
    ],
    timing: 'parallel'
  },
  
  // Architecture to Safety Dependencies
  {
    source: 'CRD',
    target: 'HSE-DBS',
    relationship: 'validates',
    description: 'Control room design validates blast requirements',
    criticalInfo: [
      'Blast resistance',
      'Window specifications',
      'Emergency egress',
      'Life safety systems'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'BLD',
    target: 'FES',
    relationship: 'feeds-into',
    description: 'Building layouts affect fire modeling',
    criticalInfo: [
      'Congestion levels',
      'Ventilation paths',
      'Escape routes',
      'Fire barriers'
    ],
    timing: 'parallel'
  },
  
  // Process Dynamics Dependencies
  {
    source: 'PSR',
    target: 'PCN',
    relationship: 'feeds-into',
    description: 'Dynamic simulation informs control strategies',
    criticalInfo: [
      'Process dynamics',
      'Control responses',
      'Tuning parameters',
      'Interaction effects'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HYD',
    target: 'PSA',
    relationship: 'feeds-into',
    description: 'Hydraulic analysis provides input for stress analysis',
    criticalInfo: [
      'Flow conditions',
      'Pressure profiles',
      'Surge forces',
      'Valve operations'
    ],
    timing: 'parallel'
  },
  
  // Refrigeration System Dependencies
  {
    source: 'RMP',
    target: 'EDS',
    relationship: 'feeds-into',
    description: 'Refrigerant makeup defines storage equipment',
    criticalInfo: [
      'Storage vessels',
      'Transfer systems',
      'Vaporizers',
      'Quality control'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'RMP',
    target: 'PSM',
    relationship: 'feeds-into',
    description: 'Refrigerant system affects safeguarding strategy',
    criticalInfo: [
      'Leak detection',
      'Isolation systems',
      'Inventory control',
      'Emergency response'
    ],
    timing: 'parallel'
  },
  
  // Piping to Weight Dependencies
  {
    source: 'ISO',
    target: 'MTO-W',
    relationship: 'feeds-into',
    description: 'Piping isometrics provide accurate weight data',
    criticalInfo: [
      'Pipe weights',
      'Fitting counts',
      'Valve weights',
      'Support steel'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSA',
    target: 'WER',
    relationship: 'feeds-into',
    description: 'Stress analysis adds spring hanger weights',
    criticalInfo: [
      'Spring hangers',
      'Special supports',
      'Expansion joints',
      'Anchors'
    ],
    timing: 'parallel'
  },
  
  // Material to HSE Dependencies
  {
    source: 'MSD',
    target: 'HAZOP',
    relationship: 'feeds-into',
    description: 'Material selection impacts HAZOP considerations',
    criticalInfo: [
      'Material limits',
      'Failure modes',
      'Corrosion risks',
      'Brittle fracture'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'INS',
    target: 'FES',
    relationship: 'feeds-into',
    description: 'Insulation affects fire load calculations',
    criticalInfo: [
      'Combustible content',
      'Fire spread potential',
      'Protection requirements',
      'Smoke generation'
    ],
    timing: 'parallel'
  },
  
  // Electrical Safety Dependencies
  {
    source: 'ESS',
    target: 'HSE-DBS',
    relationship: 'validates',
    description: 'Electrical studies validate safety requirements',
    criticalInfo: [
      'Arc flash hazards',
      'Approach boundaries',
      'PPE requirements',
      'Work procedures'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'HAC',
    target: 'PNT',
    relationship: 'feeds-into',
    description: 'Area classification affects coating requirements',
    criticalInfo: [
      'Static dissipative needs',
      'Spark resistance',
      'Chemical compatibility',
      'Inspection frequency'
    ],
    timing: 'parallel'
  },
  
  // Integration to Commissioning Dependencies
  {
    source: 'MOD',
    target: 'SYS',
    relationship: 'feeds-into',
    description: '3D model completeness enables system definition',
    criticalInfo: [
      'System boundaries',
      'Physical completeness',
      'Access verification',
      'Test points'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'IFR',
    target: 'TRN',
    relationship: 'feeds-into',
    description: 'Interface complexity drives training needs',
    criticalInfo: [
      'System interactions',
      'Operating modes',
      'Troubleshooting',
      'Coordination requirements'
    ],
    timing: 'parallel'
  },
  
  // Utility Integration Dependencies
  {
    source: 'UFD',
    target: 'HLD',
    relationship: 'feeds-into',
    description: 'Utility systems provide HVAC connections',
    criticalInfo: [
      'Chilled water',
      'Steam/condensate',
      'Compressed air',
      'Power supplies'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'UFD',
    target: 'PCN',
    relationship: 'feeds-into',
    description: 'Utility control integrated with process control',
    criticalInfo: [
      'Load management',
      'Backup systems',
      'Switchover logic',
      'Priority systems'
    ],
    timing: 'parallel'
  },
  
  // Documentation Flow Dependencies
  {
    source: 'VDR',
    target: 'TRN',
    relationship: 'feeds-into',
    description: 'Vendor manuals required for training development',
    criticalInfo: [
      'Operating procedures',
      'Maintenance procedures',
      'Troubleshooting guides',
      'Parts identification'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'VDR',
    target: 'SPR',
    relationship: 'feeds-into',
    description: 'Vendor recommendations inform spare parts',
    criticalInfo: [
      'Recommended spares',
      'Wear parts',
      'Critical components',
      'Interchangeability'
    ],
    timing: 'sequential'
  },
  
  // Construction Planning Dependencies
  {
    source: 'WER',
    target: 'MRS',
    relationship: 'feeds-into',
    description: 'Weight estimates critical for mooring design',
    criticalInfo: [
      'Total weight',
      'CoG location',
      'Weight distribution',
      'Dynamic effects'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MOD',
    target: 'WMR',
    relationship: 'feeds-into',
    description: '3D model provides accurate weight tracking',
    criticalInfo: [
      'Model completeness',
      'Material densities',
      'Component weights',
      'CoG calculation'
    ],
    timing: 'sequential'
  },
  
  // Advanced Control Dependencies
  {
    source: 'CDS',
    target: 'HCS',
    relationship: 'feeds-into',
    description: 'DCS capabilities affect HVAC control design',
    criticalInfo: [
      'Available I/O',
      'Control strategies',
      'Integration methods',
      'Graphic standards'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'CDS',
    target: 'PAS',
    relationship: 'feeds-into',
    description: 'Control system interfaces with PA system',
    criticalInfo: [
      'Alarm priorities',
      'Zone controls',
      'Override logic',
      'Status monitoring'
    ],
    timing: 'parallel'
  },
  
  // Environmental Compliance Dependencies
  {
    source: 'HSE-DBS',
    target: 'FBS',
    relationship: 'feeds-into',
    description: 'Environmental limits affect flare design',
    criticalInfo: [
      'Emission limits',
      'Noise restrictions',
      'Radiation limits',
      'Dispersion requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HSE-DBS',
    target: 'UFD',
    relationship: 'feeds-into',
    description: 'HSE requirements affect utility systems',
    criticalInfo: [
      'Emission controls',
      'Waste treatment',
      'Monitoring requirements',
      'Emergency systems'
    ],
    timing: 'parallel'
  },
  
  // Final Integration Dependencies
  {
    source: 'SYS',
    target: 'IFR',
    relationship: 'validates',
    description: 'System completion validates interface closure',
    criticalInfo: [
      'Interface testing',
      'Performance verification',
      'Documentation complete',
      'Punch list items'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'LPD',
    target: 'SYS',
    relationship: 'feeds-into',
    description: 'Loop diagrams required for system completion',
    criticalInfo: [
      'Loop checking',
      'Calibration records',
      'Functional tests',
      'Documentation packages'
    ],
    timing: 'sequential'
  },
  
  // Operations Readiness Dependencies
  {
    source: 'SDS',
    target: 'TRN',
    relationship: 'requires',
    description: 'Shutdown procedures drive training requirements',
    criticalInfo: [
      'Procedure complexity',
      'Emergency scenarios',
      'Equipment operation',
      'Safety systems'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PCN',
    target: 'TRN',
    relationship: 'feeds-into',
    description: 'Control complexity defines operator training',
    criticalInfo: [
      'Control strategies',
      'Alarm response',
      'Troubleshooting',
      'Advanced control'
    ],
    timing: 'parallel'
  },
  
  // Quality Assurance Dependencies
  {
    source: 'PID_DD',
    target: 'ISO',
    relationship: 'requires',
    description: 'Detailed P&IDs required for final isometrics',
    criticalInfo: [
      'Final line numbers',
      'Instrument details',
      'Support requirements',
      'Insulation limits'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'SLD_DD',
    target: 'CRS',
    relationship: 'requires',
    description: 'Detailed SLD required for cable routing',
    criticalInfo: [
      'Final loads',
      'Cable sizes',
      'Route requirements',
      'Segregation needs'
    ],
    timing: 'sequential'
  },
  
  // Marine Installation Dependencies
  {
    source: 'HYD-STA',
    target: 'TOW',
    relationship: 'feeds-into',
    description: 'Stability analysis defines tow limitations',
    criticalInfo: [
      'Weather limits',
      'Tow configuration',
      'Ballast conditions',
      'Speed restrictions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MRS',
    target: 'BDS',
    relationship: 'requires',
    description: 'Mooring system coordinates with ballasting',
    criticalInfo: [
      'Position control',
      'Load monitoring',
      'Ballast sequence',
      'Emergency release'
    ],
    timing: 'parallel'
  },
  
  // Technology Integration Dependencies
  {
    source: 'NSA',
    target: 'CDS',
    relationship: 'feeds-into',
    description: 'Network architecture enables control system design',
    criticalInfo: [
      'Network capacity',
      'Redundancy paths',
      'Security zones',
      'Remote access'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'TCP',
    target: 'TRN',
    relationship: 'feeds-into',
    description: 'Telecom systems require specialized training',
    criticalInfo: [
      'System operation',
      'Troubleshooting',
      'Cybersecurity',
      'Emergency procedures'
    ],
    timing: 'parallel'
  }
];