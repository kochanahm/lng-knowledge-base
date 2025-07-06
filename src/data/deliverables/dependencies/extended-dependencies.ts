import { Dependency } from '@/types';

export const extendedDependencies: Dependency[] = [
  // Process to Equipment Dependencies
  {
    source: 'PDB',
    target: 'EDB',
    relationship: 'feeds-into',
    description: 'Process design basis defines equipment design requirements',
    criticalInfo: [
      'Process conditions',
      'Design margins',
      'Turndown requirements',
      'Material compatibility'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HMB',
    target: 'EDS',
    relationship: 'feeds-into',
    description: 'Heat & material balance provides equipment sizing data',
    criticalInfo: [
      'Flow rates',
      'Temperatures and pressures',
      'Compositions',
      'Heat duties'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'EDS',
    target: 'PID',
    relationship: 'feeds-into',
    description: 'Equipment datasheets finalized for P&ID development',
    criticalInfo: [
      'Nozzle sizes and ratings',
      'Control requirements',
      'Instrument connections',
      'Relief requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'ELS',
    target: 'PLT',
    relationship: 'feeds-into',
    description: 'Equipment list defines items for plot plan arrangement',
    criticalInfo: [
      'Equipment dimensions',
      'Weights',
      'Maintenance space',
      'Interconnections'
    ],
    timing: 'sequential'
  },
  
  // Process to HSE Dependencies
  {
    source: 'PFD',
    target: 'HAZID',
    relationship: 'feeds-into',
    description: 'Process flow diagrams enable hazard identification',
    criticalInfo: [
      'Process inventory',
      'Operating conditions',
      'Material hazards',
      'Process intent'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PID',
    target: 'HAZOP',
    relationship: 'requires',
    description: 'P&IDs required for detailed HAZOP study',
    criticalInfo: [
      'All equipment details',
      'Control loops',
      'Safety systems',
      'Operating procedures'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HAZOP',
    target: 'SRS',
    relationship: 'feeds-into',
    description: 'HAZOP identifies safety functions requiring SIL',
    criticalInfo: [
      'SIF requirements',
      'Risk reduction needs',
      'Interlock logic',
      'Response times'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FES',
    target: 'FPM',
    relationship: 'feeds-into',
    description: 'Fire study defines fireproofing requirements',
    criticalInfo: [
      'Fire zones',
      'Heat flux levels',
      'Protection duration',
      'Critical elements'
    ],
    timing: 'sequential'
  },
  
  // Process to Piping Dependencies
  {
    source: 'PID',
    target: 'PPS',
    relationship: 'feeds-into',
    description: 'P&IDs define service requirements for piping specs',
    criticalInfo: [
      'Service conditions',
      'Fluid properties',
      'Design pressures',
      'Special requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'LSC',
    target: 'ISO',
    relationship: 'feeds-into',
    description: 'Line sizing provides pipe diameters for isometrics',
    criticalInfo: [
      'Pipe sizes',
      'Wall thickness',
      'Design conditions',
      'Flow rates'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PLT',
    target: 'ISO',
    relationship: 'feeds-into',
    description: 'Plot plan defines routing for piping isometrics',
    criticalInfo: [
      'Equipment locations',
      'Pipe rack routes',
      'Elevation data',
      'Tie-in points'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PSA',
    target: 'ISO',
    relationship: 'validates',
    description: 'Stress analysis validates and modifies isometric design',
    criticalInfo: [
      'Support locations',
      'Expansion loops',
      'Spring hangers',
      'Anchor points'
    ],
    timing: 'parallel'
  },
  
  // Equipment to Structural Dependencies
  {
    source: 'EDS',
    target: 'SDB',
    relationship: 'feeds-into',
    description: 'Equipment data provides loads for structural design',
    criticalInfo: [
      'Equipment weights',
      'Dynamic loads',
      'Support points',
      'Maintenance loads'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'VDR',
    target: 'SFP',
    relationship: 'feeds-into',
    description: 'Vendor drawings confirm equipment supports',
    criticalInfo: [
      'Actual weights',
      'CG locations',
      'Support details',
      'Anchor bolt patterns'
    ],
    timing: 'parallel'
  },
  
  // Piping to Structural Dependencies
  {
    source: 'ISO',
    target: 'PSA',
    relationship: 'requires',
    description: 'Isometrics required for pipe stress analysis',
    criticalInfo: [
      'Pipe routing',
      'Support locations',
      'Equipment connections',
      'Operating modes'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSA',
    target: 'SDD',
    relationship: 'feeds-into',
    description: 'Stress analysis defines pipe support requirements',
    criticalInfo: [
      'Support types',
      'Load values',
      'Movement ranges',
      'Special supports'
    ],
    timing: 'sequential'
  },
  
  // Electrical to Instrumentation Dependencies
  {
    source: 'HAC',
    target: 'ILS',
    relationship: 'feeds-into',
    description: 'Area classification defines instrument selection',
    criticalInfo: [
      'Zone classifications',
      'Temperature classes',
      'Gas groups',
      'Protection methods'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SLD',
    target: 'LPD',
    relationship: 'feeds-into',
    description: 'Power distribution affects loop diagram design',
    criticalInfo: [
      'Power sources',
      'Distribution panels',
      'UPS systems',
      'Grounding schemes'
    ],
    timing: 'parallel'
  },
  
  // Civil to Naval Dependencies
  {
    source: 'GDR',
    target: 'GBS-DBS',
    relationship: 'feeds-into',
    description: 'Geotechnical data critical for GBS design',
    criticalInfo: [
      'Soil properties',
      'Bearing capacity',
      'Settlement predictions',
      'Seabed conditions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'GBS-DBS',
    target: 'HYD-STA',
    relationship: 'requires',
    description: 'GBS design basis required for stability analysis',
    criticalInfo: [
      'GBS geometry',
      'Weight distribution',
      'Ballast tanks',
      'Environmental criteria'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HYD-STA',
    target: 'BDS',
    relationship: 'feeds-into',
    description: 'Stability analysis drives ballast system design',
    criticalInfo: [
      'Ballast requirements',
      'Stability limits',
      'Tank arrangements',
      'Flow rates needed'
    ],
    timing: 'sequential'
  },
  
  // Weight Control Dependencies
  {
    source: 'ELS',
    target: 'WER',
    relationship: 'feeds-into',
    description: 'Equipment list provides weights for estimate',
    criticalInfo: [
      'Equipment weights',
      'Operating weights',
      'Locations',
      'Support steel'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'MTO-W',
    target: 'WMR',
    relationship: 'feeds-into',
    description: 'Material take-offs update weight reports',
    criticalInfo: [
      'Actual quantities',
      'Material densities',
      'Variance analysis',
      'Growth tracking'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'WER',
    target: 'HYD-STA',
    relationship: 'feeds-into',
    description: 'Weight estimates critical for stability analysis',
    criticalInfo: [
      'Total weights',
      'CoG location',
      'Weight distribution',
      'Contingencies'
    ],
    timing: 'sequential'
  },
  
  // Material to Piping Dependencies
  {
    source: 'MSP',
    target: 'PPS',
    relationship: 'feeds-into',
    description: 'Material selection drives piping specifications',
    criticalInfo: [
      'Material grades',
      'Corrosion allowances',
      'Temperature limits',
      'Welding requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'INS',
    target: 'ISO',
    relationship: 'feeds-into',
    description: 'Insulation specs affect piping isometric details',
    criticalInfo: [
      'Insulation thickness',
      'Support designs',
      'Personnel protection',
      'Tracing requirements'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PNT',
    target: 'ISO',
    relationship: 'feeds-into',
    description: 'Painting specs included in isometric packages',
    criticalInfo: [
      'Surface preparation',
      'Coating systems',
      'Touch-up procedures',
      'Inspection requirements'
    ],
    timing: 'parallel'
  },
  
  // HVAC and Architecture Dependencies
  {
    source: 'ADB',
    target: 'HDB',
    relationship: 'feeds-into',
    description: 'Architectural requirements drive HVAC design',
    criticalInfo: [
      'Space volumes',
      'Occupancy levels',
      'Window areas',
      'Special requirements'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'BLD',
    target: 'HLD',
    relationship: 'requires',
    description: 'Building layouts required for HVAC distribution',
    criticalInfo: [
      'Room layouts',
      'Ceiling heights',
      'Structural elements',
      'Access routes'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'CRD',
    target: 'HCS',
    relationship: 'feeds-into',
    description: 'Control room design drives special HVAC requirements',
    criticalInfo: [
      'Heat loads',
      'Redundancy needs',
      'Pressurization',
      'Filtration levels'
    ],
    timing: 'parallel'
  },
  
  // Telecom Integration Dependencies
  {
    source: 'TCP',
    target: 'CDS',
    relationship: 'feeds-into',
    description: 'Telecom philosophy affects control system networks',
    criticalInfo: [
      'Network architecture',
      'Redundancy schemes',
      'Cybersecurity requirements',
      'Integration protocols'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'NSA',
    target: 'CRS',
    relationship: 'feeds-into',
    description: 'Network architecture drives cable routing requirements',
    criticalInfo: [
      'Cable types',
      'Segregation needs',
      'Routing paths',
      'Redundancy paths'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PAS',
    target: 'CE',
    relationship: 'feeds-into',
    description: 'PA system integrates with emergency shutdown',
    criticalInfo: [
      'Alarm priorities',
      'Zone mapping',
      'Override logic',
      'Interface signals'
    ],
    timing: 'parallel'
  },
  
  // Integration Management Dependencies
  {
    source: 'IMS',
    target: 'IFR',
    relationship: 'requires',
    description: 'Integration strategy establishes interface register',
    criticalInfo: [
      'Interface categories',
      'Documentation standards',
      'Approval processes',
      'Tracking methods'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MOD',
    target: 'ISO',
    relationship: 'validates',
    description: '3D model review validates piping isometrics',
    criticalInfo: [
      'Clash resolutions',
      'Space allocations',
      'Support locations',
      'Access verification'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SYS',
    target: 'PCN',
    relationship: 'feeds-into',
    description: 'System completion strategy drives control narratives',
    criticalInfo: [
      'System boundaries',
      'Commissioning sequences',
      'Test requirements',
      'Handover criteria'
    ],
    timing: 'parallel'
  },
  
  // Cross-Discipline Critical Dependencies
  {
    source: 'HAZOP',
    target: 'PID',
    relationship: 'validates',
    description: 'HAZOP findings modify P&ID design',
    criticalInfo: [
      'Additional safeguards',
      'Interlock requirements',
      'Valve modifications',
      'Instrumentation additions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'FES',
    target: 'PLT',
    relationship: 'validates',
    description: 'Fire study may require plot plan modifications',
    criticalInfo: [
      'Safety distances',
      'Blast walls',
      'Escape routes',
      'Fire water coverage'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'WMR',
    target: 'SFP',
    relationship: 'validates',
    description: 'Weight reports validate structural framing design',
    criticalInfo: [
      'Updated loads',
      'CoG shifts',
      'Growth factors',
      'Contingency usage'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'ESS',
    target: 'EDB',
    relationship: 'validates',
    description: 'Electrical studies validate design basis assumptions',
    criticalInfo: [
      'Short circuit levels',
      'Voltage drops',
      'Harmonic levels',
      'Arc flash categories'
    ],
    timing: 'parallel'
  },
  
  // Support and Documentation Dependencies
  {
    source: 'VDL',
    target: 'MTR',
    relationship: 'feeds-into',
    description: 'Vendor data requirements included in requisitions',
    criticalInfo: [
      'Document lists',
      'Submittal schedules',
      'Format requirements',
      'Review cycles'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'TRN',
    target: 'SDS',
    relationship: 'feeds-into',
    description: 'Training requirements affect shutdown procedures',
    criticalInfo: [
      'Operator competencies',
      'Procedure complexity',
      'Training schedules',
      'Simulation needs'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'SPR',
    target: 'EDS',
    relationship: 'validates',
    description: 'Spare parts analysis validates equipment selections',
    criticalInfo: [
      'Standardization benefits',
      'Maintenance strategies',
      'Critical spares',
      'Lead times'
    ],
    timing: 'parallel'
  },
  
  // Process Optimization Dependencies
  {
    source: 'PSR',
    target: 'HMB',
    relationship: 'validates',
    description: 'Process simulation validates heat & material balance',
    criticalInfo: [
      'Converged solutions',
      'Operating cases',
      'Optimization results',
      'Equipment performance'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'PSR',
    target: 'UFD',
    relationship: 'feeds-into',
    description: 'Process simulation provides utility demands',
    criticalInfo: [
      'Cooling duties',
      'Steam demands',
      'Power requirements',
      'Peak loads'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'RMP',
    target: 'PFD',
    relationship: 'feeds-into',
    description: 'Refrigerant makeup affects process flow design',
    criticalInfo: [
      'Makeup rates',
      'Storage requirements',
      'Distribution systems',
      'Quality control'
    ],
    timing: 'parallel'
  },
  
  // Detailed Design Evolution Dependencies
  {
    source: 'PID',
    target: 'PID_DD',
    relationship: 'feeds-into',
    description: 'FEED P&IDs developed into detailed design version',
    criticalInfo: [
      'Vendor information',
      'Detailed instrumentation',
      'Final line sizing',
      'Construction details'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'SLD',
    target: 'SLD_DD',
    relationship: 'feeds-into',
    description: 'Preliminary SLD expanded for detailed design',
    criticalInfo: [
      'Final equipment selection',
      'Protection settings',
      'Cable sizing',
      'Detailed connections'
    ],
    timing: 'sequential'
  },
  
  // Construction and Commissioning Dependencies
  {
    source: 'TOW',
    target: 'BDS',
    relationship: 'requires',
    description: 'Tow procedures require ballast system readiness',
    criticalInfo: [
      'System commissioning',
      'Operating procedures',
      'Crew training',
      'Contingency plans'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MRS',
    target: 'TOW',
    relationship: 'feeds-into',
    description: 'Mooring system required for tow-out operations',
    criticalInfo: [
      'Installation procedures',
      'Equipment readiness',
      'Weather windows',
      'Marine coordination'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'IFR',
    target: 'SYS',
    relationship: 'feeds-into',
    description: 'Interface close-out enables system completion',
    criticalInfo: [
      'Completed interfaces',
      'Test results',
      'Documentation packages',
      'Punch lists'
    ],
    timing: 'sequential'
  },
  
  // Safety System Integration Dependencies
  {
    source: 'SRS',
    target: 'LPD',
    relationship: 'requires',
    description: 'Safety requirements define SIS loop design',
    criticalInfo: [
      'SIL requirements',
      'Voting logic',
      'Bypass arrangements',
      'Test provisions'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'CE',
    target: 'CDS',
    relationship: 'feeds-into',
    description: 'Cause & effect integrated into control system',
    criticalInfo: [
      'Shutdown logic',
      'Interlock sequences',
      'Override provisions',
      'Alarm priorities'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'PSM',
    target: 'FBS',
    relationship: 'feeds-into',
    description: 'Safeguarding philosophy drives flare system design',
    criticalInfo: [
      'Relief scenarios',
      'Depressuring requirements',
      'System segregation',
      'Disposal philosophy'
    ],
    timing: 'sequential'
  },
  
  // Utility System Dependencies
  {
    source: 'UFD',
    target: 'ELS',
    relationship: 'validates',
    description: 'Utility flow diagrams verify equipment in list',
    criticalInfo: [
      'Utility equipment',
      'Standby units',
      'Distribution equipment',
      'Package boundaries'
    ],
    timing: 'parallel'
  },
  
  {
    source: 'UFD',
    target: 'PPS',
    relationship: 'feeds-into',
    description: 'Utility systems define piping specifications',
    criticalInfo: [
      'Service conditions',
      'Material requirements',
      'Special services',
      'Code requirements'
    ],
    timing: 'parallel'
  },
  
  // Advanced Process Control Dependencies
  {
    source: 'PCN',
    target: 'CDS',
    relationship: 'requires',
    description: 'Control narratives define DCS configuration',
    criticalInfo: [
      'Control strategies',
      'Advanced control',
      'Operator interfaces',
      'Alarm management'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HYD',
    target: 'PCN',
    relationship: 'feeds-into',
    description: 'Hydraulic analysis affects control strategies',
    criticalInfo: [
      'Control valve sizing',
      'System dynamics',
      'Surge control',
      'Minimum flow'
    ],
    timing: 'parallel'
  },
  
  // Environmental and Regulatory Dependencies
  {
    source: 'HSP',
    target: 'HSE-DBS',
    relationship: 'requires',
    description: 'HSE philosophy drives design requirements',
    criticalInfo: [
      'Safety principles',
      'Environmental limits',
      'Design standards',
      'Performance targets'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'HSE-DBS',
    target: 'PDB',
    relationship: 'feeds-into',
    description: 'HSE requirements integrated into process design',
    criticalInfo: [
      'Emission limits',
      'Safety distances',
      'Containment requirements',
      'Occupational limits'
    ],
    timing: 'parallel'
  },
  
  // Quality and Documentation Flow
  {
    source: 'VDR',
    target: 'EDS',
    relationship: 'validates',
    description: 'Vendor data validates equipment datasheets',
    criticalInfo: [
      'Actual performance',
      'Physical dimensions',
      'Utility requirements',
      'Operating limits'
    ],
    timing: 'sequential'
  },
  
  {
    source: 'MOD',
    target: 'MTO-W',
    relationship: 'feeds-into',
    description: '3D model enables accurate material take-offs',
    criticalInfo: [
      'Component quantities',
      'Accurate dimensions',
      'Material specifications',
      'Bulk materials'
    ],
    timing: 'sequential'
  }
];