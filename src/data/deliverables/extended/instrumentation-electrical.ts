import { DeliverableKnowledge } from '@/types';

export const instrumentationDeliverables: DeliverableKnowledge[] = [
  {
    id: 'ICP',
    code: 'ICP',
    title: 'Instrumentation & Control Philosophy',
    fullName: 'Instrumentation and Control System Philosophy',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    
    summary: 'Master document defining instrumentation and control system design approach',
    purpose: 'To establish consistent I&C design principles and system architecture',
    scope: 'All instrumentation, control systems, and safety systems',
    
    detailedDescription: `The Instrumentation & Control Philosophy establishes the overall approach to process control, safety systems, and instrumentation design. It defines control system architecture, redundancy philosophy, interface strategies, and design standards. This document guides all subsequent I&C design decisions and ensures consistency across the facility.`,
    
    keyComponents: [
      'Control system architecture',
      'DCS/ESD/F&G system segregation',
      'Redundancy and voting philosophy',
      'Field instrumentation standards',
      'Control room design philosophy',
      'Alarm management strategy',
      'Cybersecurity approach',
      'System integration strategy'
    ],
    
    deliverables: [
      'I&C philosophy document',
      'System architecture diagrams',
      'Redundancy matrices',
      'Interface diagrams',
      'Standard specifications',
      'Cybersecurity framework'
    ],
    
    bestPractices: [
      'Define clear system boundaries',
      'Consider lifecycle costs in selection',
      'Plan for future expansions',
      'Ensure vendor independence where needed',
      'Address cybersecurity from start',
      'Include operations input early'
    ],
    
    commonMistakes: [
      'Over-complex architectures',
      'Insufficient redundancy planning',
      'Poor system integration strategy',
      'Ignoring cybersecurity requirements',
      'Vendor lock-in situations',
      'Inadequate spare capacity'
    ],
    
    qualityChecklist: [
      'Architecture clearly defined',
      'Standards comprehensive',
      'Redundancy appropriate',
      'Interfaces documented',
      'Future needs considered',
      'Operations alignment achieved'
    ],
    
    realWorldExamples: [
      'DCS: Typically 2oo3 voting for critical control',
      'ESD: SIL 3 capable systems common',
      'Field instruments: HART or Foundation Fieldbus',
      'Redundancy: N+1 for controllers, 2oo3 for critical'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61511',
        title: 'Functional safety - Safety instrumented systems',
        organization: 'IEC',
        relevantSections: ['Part 1 - Framework']
      },
      {
        code: 'ISA-95',
        title: 'Enterprise-Control System Integration',
        organization: 'ISA',
        relevantSections: ['System hierarchy']
      }
    ],
    
    regulations: [
      'Functional safety regulations',
      'Cybersecurity requirements',
      'Explosion protection standards'
    ],
    
    softwareTools: [
      'System architecture tools',
      'SIL calculation software',
      'Network design tools'
    ]
  },
  
  {
    id: 'ILS',
    code: 'ILS',
    title: 'Instrument List',
    fullName: 'Master Instrument List',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive list of all instruments with key parameters and specifications',
    purpose: 'To provide single source register of all instrumentation',
    scope: 'All field instruments, control valves, and analyzer systems',
    
    detailedDescription: `The Instrument List is the master database of all instrumentation in the facility. It includes tag numbers, service descriptions, process parameters, instrument types, and key specifications. This living document tracks instruments from conceptual design through commissioning and serves as the basis for procurement, installation, and maintenance planning.`,
    
    keyComponents: [
      'Instrument tag numbers',
      'Service descriptions',
      'Process parameters and ranges',
      'Instrument types and models',
      'Signal types and ranges',
      'Location and area classification',
      'P&ID references',
      'Criticality and SIL ratings'
    ],
    
    deliverables: [
      'Master instrument list',
      'Instrument count summaries',
      'I/O count lists',
      'Critical instrument register',
      'Smart instrument list',
      'Interface with other databases'
    ],
    
    bestPractices: [
      'Establish tag numbering early',
      'Include all instruments even locals',
      'Regular updates as design progresses',
      'Link to other project databases',
      'Include calibration requirements',
      'Track SIF instruments separately'
    ],
    
    commonMistakes: [
      'Missing local indicators',
      'Inconsistent tag numbering',
      'Incomplete process data',
      'Poor change management',
      'Missing analyzer systems',
      'No criticality assessment'
    ],
    
    qualityChecklist: [
      'All P&ID instruments included',
      'Tag numbers unique',
      'Process data complete',
      'Types specified correctly',
      'Areas classified',
      'Database links working'
    ],
    
    realWorldExamples: [
      'Typical LNG plant: 2000-4000 instruments',
      'I/O count: 3000-5000 points typical',
      'Smart instruments: 70-80% common',
      'SIF instruments: 200-400 typical'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-5.1',
        title: 'Instrumentation Symbols and Identification',
        organization: 'ISA',
        relevantSections: ['Tag numbering']
      }
    ],
    
    regulations: [
      'Asset management requirements',
      'SIS regulatory requirements'
    ],
    
    softwareTools: [
      'Instrument database systems',
      'SPI (SmartPlant Instrumentation)',
      'Integration with DCS tools',
      'I/O management systems'
    ]
  },
  
  {
    id: 'LPD',
    code: 'LPD',
    title: 'Loop Diagrams',
    fullName: 'Instrument Loop Diagrams',
    phase: 'DD',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed wiring and connection diagrams for each instrument loop',
    purpose: 'To define complete loop configuration for installation and commissioning',
    scope: 'All instrument loops including SIS loops',
    
    detailedDescription: `Loop Diagrams show the complete signal path from field instrument through junction boxes, marshalling cabinets, and system cabinets to the control system. They include all connection details, cable numbers, terminal identifications, and power supplies. These drawings are essential for installation, loop checking, and commissioning activities.`,
    
    keyComponents: [
      'Field instrument connections',
      'Junction box terminations',
      'Cable schedule information',
      'Marshalling cabinet details',
      'System cabinet terminations',
      'Power supply arrangements',
      'Barrier/isolator details',
      'Grounding and shielding'
    ],
    
    deliverables: [
      'Individual loop diagrams',
      'Typical loop drawings',
      'Loop diagram index',
      'Cable schedule interface',
      'Termination schedules',
      'Loop folder packages'
    ],
    
    bestPractices: [
      'Standardize loop diagram formats',
      'Show all connection points clearly',
      'Include cable specifications',
      'Coordinate with electrical discipline',
      'Consider maintenance access',
      'Include loop check provisions'
    ],
    
    commonMistakes: [
      'Missing intermediate connections',
      'Incorrect terminal numbers',
      'Poor cable routing information',
      'Missing power supply details',
      'Inadequate grounding details',
      'No as-built updates'
    ],
    
    qualityChecklist: [
      'All loops documented',
      'Connections verified',
      'Cable numbers assigned',
      'Power supplies shown',
      'Standards followed',
      'Constructability reviewed'
    ],
    
    realWorldExamples: [
      'Format: One loop per drawing typical',
      'Complexity: 5-15 connection points',
      'SIS loops: Separate series common',
      'Updates: Critical during construction'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-5.4',
        title: 'Instrument Loop Diagrams',
        organization: 'ISA',
        relevantSections: ['Loop diagram content']
      }
    ],
    
    regulations: [
      'Installation code compliance',
      'SIS loop requirements'
    ],
    
    softwareTools: [
      'SPI (SmartPlant Instrumentation)',
      'AutoCAD with instrumentation tools',
      'Cable management systems',
      'Loop folder generation tools'
    ]
  },
  
  {
    id: 'SRS',
    code: 'SRS',
    title: 'Safety Requirements Specification',
    fullName: 'SIS Safety Requirements Specification',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed requirements for all safety instrumented functions',
    purpose: 'To define SIF requirements for detailed design and implementation',
    scope: 'All safety instrumented functions identified in HAZOP/LOPA',
    
    detailedDescription: `The Safety Requirements Specification defines detailed requirements for each Safety Instrumented Function (SIF) including safety integrity level, functionality, interfaces, and performance requirements. It translates HAZOP/LOPA findings into specific design requirements that ensure each SIF meets its risk reduction targets throughout the safety lifecycle.`,
    
    keyComponents: [
      'SIF descriptions and objectives',
      'Required SIL for each function',
      'Functional specifications',
      'Input/output definitions',
      'Logic solver requirements',
      'Response time requirements',
      'Reset and bypass philosophy',
      'Proof testing requirements'
    ],
    
    deliverables: [
      'SRS document',
      'SIF register',
      'Logic narratives',
      'SIL calculation sheets',
      'Test procedure requirements',
      'Functional test plans'
    ],
    
    bestPractices: [
      'Write clear, testable requirements',
      'Include all modes of operation',
      'Define clear safe states',
      'Consider common cause failures',
      'Plan for proof testing access',
      'Align with operations philosophy'
    ],
    
    commonMistakes: [
      'Ambiguous requirements',
      'Missing manual actions',
      'Inadequate test provisions',
      'Complex reset procedures',
      'Ignoring partial stroke testing',
      'Poor operational interface'
    ],
    
    qualityChecklist: [
      'All SIFs documented',
      'Requirements testable',
      'SIL targets achievable',
      'Interfaces defined',
      'Testing practical',
      'Operations reviewed'
    ],
    
    realWorldExamples: [
      'SIF count: 50-150 typical for LNG',
      'SIL 2: Most common requirement',
      'SIL 3: For high consequence scenarios',
      'Response time: 2-10 seconds typical'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61511-1',
        title: 'Functional safety - Part 1',
        organization: 'IEC',
        relevantSections: ['Clause 10 - SRS']
      },
      {
        code: 'ANSI/ISA-84.00.01',
        title: 'Functional Safety: SIS for the Process Industry',
        organization: 'ISA',
        relevantSections: ['SRS requirements']
      }
    ],
    
    regulations: [
      'Process safety regulations',
      'SIS regulatory requirements'
    ],
    
    softwareTools: [
      'SIL calculation tools',
      'exSILentia',
      'Safety lifecycle tools',
      'Requirements management systems'
    ]
  },
  
  {
    id: 'CDS',
    code: 'CDS',
    title: 'Control System Design Specification',
    fullName: 'DCS/ESD/F&G System Design Specification',
    phase: 'DD',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed specifications for control and safety system implementation',
    purpose: 'To define all requirements for control system configuration and programming',
    scope: 'DCS, ESD, F&G systems including all interfaces',
    
    detailedDescription: `The Control System Design Specification provides comprehensive requirements for implementing the control and safety systems. It includes hardware architecture, software configuration, control strategies, graphics standards, alarm philosophy implementation, and integration requirements. This document bridges between functional requirements and actual system implementation.`,
    
    keyComponents: [
      'System architecture details',
      'Hardware specifications',
      'Software configuration requirements',
      'Control strategy implementations',
      'Graphics and HMI standards',
      'Alarm configuration details',
      'Communication protocols',
      'Integration and interface requirements'
    ],
    
    deliverables: [
      'Design specification document',
      'Architecture drawings',
      'I/O allocation lists',
      'Graphics style guide',
      'Alarm configuration sheets',
      'Communication matrices'
    ],
    
    bestPractices: [
      'Involve system vendor early',
      'Define clear configuration standards',
      'Plan for adequate testing',
      'Consider operator training needs',
      'Design for maintainability',
      'Include cybersecurity requirements'
    ],
    
    commonMistakes: [
      'Insufficient detail for vendors',
      'Poor graphics standards',
      'Complex control strategies',
      'Inadequate testing plans',
      'Missing integration details',
      'No migration strategy'
    ],
    
    qualityChecklist: [
      'Requirements comprehensive',
      'Standards clearly defined',
      'Architecture complete',
      'Testing specified',
      'Training considered',
      'Maintenance planned'
    ],
    
    realWorldExamples: [
      'DCS nodes: 4-8 typical with redundancy',
      'Graphics: 100-200 displays typical',
      'Alarms: 3000-5000 configured points',
      'Response time: <1 second for critical'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-101',
        title: 'Human Machine Interfaces',
        organization: 'ISA',
        relevantSections: ['HMI design principles']
      },
      {
        code: 'EEMUA 191',
        title: 'Alarm Systems Guide',
        organization: 'EEMUA',
        relevantSections: ['Alarm design']
      }
    ],
    
    regulations: [
      'Cybersecurity regulations',
      'Safety system requirements'
    ],
    
    softwareTools: [
      'System configuration tools',
      'Graphics development packages',
      'Alarm rationalization tools',
      'System testing simulators'
    ]
  }
];

export const electricalDeliverables: DeliverableKnowledge[] = [
  {
    id: 'EDB',
    code: 'EDB',
    title: 'Electrical Design Basis',
    fullName: 'Electrical System Design Basis',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Fundamental electrical design criteria and system philosophy',
    purpose: 'To establish consistent electrical design parameters and standards',
    scope: 'Complete electrical system from utility/generation to end users',
    
    detailedDescription: `The Electrical Design Basis establishes all fundamental electrical system design parameters including voltage levels, system configuration, redundancy requirements, and design standards. It defines the overall electrical philosophy from power generation/utility supply through distribution to end users, ensuring a reliable and maintainable electrical system that meets project requirements.`,
    
    keyComponents: [
      'System voltage levels',
      'Power generation/utility supply',
      'Distribution philosophy',
      'Redundancy requirements',
      'Electrical area classification',
      'Grounding and lightning protection',
      'Design codes and standards',
      'Equipment specifications criteria'
    ],
    
    deliverables: [
      'Electrical design basis document',
      'System configuration diagrams',
      'Standard specifications list',
      'Voltage level matrix',
      'Design criteria summary',
      'Equipment rating guidelines'
    ],
    
    bestPractices: [
      'Consider utility reliability early',
      'Plan for future load growth',
      'Standardize voltage levels',
      'Define clear reliability targets',
      'Include maintenance philosophy',
      'Consider construction power needs'
    ],
    
    commonMistakes: [
      'Underestimating future loads',
      'Over-complex configurations',
      'Inadequate utility coordination',
      'Missing construction power',
      'Poor standardization',
      'Unclear reliability targets'
    ],
    
    qualityChecklist: [
      'All parameters defined',
      'Standards appropriate',
      'Reliability analyzed',
      'Future needs included',
      'Maintenance considered',
      'Utility agreement aligned'
    ],
    
    realWorldExamples: [
      'HV: 13.8kV or 11kV typical',
      'LV: 480V (US) or 400V (IEC)',
      'Critical loads: 2N redundancy',
      'Normal loads: N+1 redundancy'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 141',
        title: 'Recommended Practice for Electric Power Distribution',
        organization: 'IEEE',
        relevantSections: ['System design']
      },
      {
        code: 'IEC 61892',
        title: 'Offshore Units - Electrical Installations',
        organization: 'IEC',
        relevantSections: ['Design requirements']
      }
    ],
    
    regulations: [
      'National electrical codes',
      'Utility interconnection requirements',
      'Marine electrical regulations'
    ],
    
    softwareTools: [
      'Load flow analysis software',
      'SKM PowerTools',
      'ETAP',
      'Documentation systems'
    ]
  },
  
  {
    id: 'ELC',
    code: 'ELC',
    title: 'Electrical Load List',
    fullName: 'Electrical Load List and Analysis',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive list of all electrical loads with power requirements',
    purpose: 'To determine total power requirements and size electrical systems',
    scope: 'All electrical consumers including motors, heaters, lighting, and utilities',
    
    detailedDescription: `The Electrical Load List compiles all electrical loads in the facility, providing connected and operating loads, duty cycles, and criticality classifications. It forms the basis for power system sizing, load flow studies, and equipment selection. The list includes diversity factors and simultaneous operating scenarios to determine realistic power demands.`,
    
    keyComponents: [
      'Equipment tag and description',
      'Connected load (kW/kVA)',
      'Operating load and duty cycle',
      'Power factor',
      'Voltage level',
      'Criticality classification',
      'Starting requirements',
      'Location and MCC assignment'
    ],
    
    deliverables: [
      'Master electrical load list',
      'Load summary by area',
      'Load summary by voltage',
      'Critical load register',
      'Largest motor list',
      'Diversity factor analysis'
    ],
    
    bestPractices: [
      'Include all loads even small ones',
      'Use realistic diversity factors',
      'Consider all operating scenarios',
      'Coordinate with other disciplines',
      'Include spare and future loads',
      'Validate against similar projects'
    ],
    
    commonMistakes: [
      'Missing auxiliary loads',
      'Optimistic diversity factors',
      'Ignoring starting currents',
      'Missing future loads',
      'Poor load classification',
      'Inadequate spare capacity'
    ],
    
    qualityChecklist: [
      'All equipment included',
      'Loads verified with vendors',
      'Diversity factors justified',
      'Classifications correct',
      'Scenarios considered',
      'Growth factors included'
    ],
    
    realWorldExamples: [
      'Total load: 50-100MW for large LNG',
      'Diversity: 0.7-0.8 typical',
      'Spare capacity: 20-25% common',
      'Largest motors: 5-15MW compressors'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 3004.8',
        title: 'Recommended Practice for Motor Protection',
        organization: 'IEEE',
        relevantSections: ['Motor data requirements']
      }
    ],
    
    regulations: [
      'Energy efficiency requirements',
      'Utility reporting requirements'
    ],
    
    softwareTools: [
      'Load list databases',
      'Excel with macros',
      'Power system analysis software',
      'Integration with equipment database'
    ]
  },
  
  {
    id: 'SLD',
    code: 'SLD',
    title: 'Single Line Diagrams',
    fullName: 'Electrical Single Line Diagrams',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Schematic representation of electrical power distribution system',
    purpose: 'To show overall electrical system configuration and major equipment',
    scope: 'Complete electrical system from incoming supply to major loads',
    
    detailedDescription: `Single Line Diagrams provide a simplified representation of the electrical distribution system showing the path of power flow, major equipment, protection devices, and system configuration. They are essential for understanding system operation, performing studies, and identifying critical components. The SLDs evolve from conceptual through detailed design.`,
    
    keyComponents: [
      'Power sources and generators',
      'Main transformers and switchgear',
      'Bus configurations',
      'Protection devices',
      'Major feeders and loads',
      'Grounding system representation',
      'Metering and synchronizing',
      'Emergency power systems'
    ],
    
    deliverables: [
      'Overall plant SLD',
      'Area-specific SLDs',
      'Normal/emergency SLDs',
      'Protection SLDs',
      'Key interlocks diagram',
      'Operating philosophy'
    ],
    
    bestPractices: [
      'Keep diagrams uncluttered',
      'Show all operating modes',
      'Include protection settings',
      'Indicate normally open/closed',
      'Show physical separation',
      'Include revision control'
    ],
    
    commonMistakes: [
      'Too much detail too early',
      'Missing emergency systems',
      'Poor layout for understanding',
      'Incorrect protection representation',
      'Missing key interlocks',
      'No operating philosophy'
    ],
    
    qualityChecklist: [
      'All sources shown',
      'Load flow paths clear',
      'Protection adequate',
      'Operations reviewed',
      'Studies can be performed',
      'Constructability considered'
    ],
    
    realWorldExamples: [
      'Main buses: Double bus common',
      'Switchgear: Metal-clad typical',
      'Protection: Differential + overcurrent',
      'Segregation: Normal/emergency/critical'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 315',
        title: 'Graphic Symbols for Electrical and Electronics Diagrams',
        organization: 'IEEE',
        relevantSections: ['Symbol standards']
      },
      {
        code: 'IEC 61082',
        title: 'Preparation of documents used in electrotechnology',
        organization: 'IEC',
        relevantSections: ['Diagram preparation']
      }
    ],
    
    regulations: [
      'Utility interconnection requirements',
      'Safety regulations for diagrams'
    ],
    
    softwareTools: [
      'AutoCAD Electrical',
      'ETAP',
      'PowerCAD',
      'Visio for preliminaries'
    ]
  },
  
  {
    id: 'ESS',
    code: 'ESS',
    title: 'Electrical System Studies',
    fullName: 'Power System Analysis Studies',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Suite of electrical studies to verify system design and protection',
    purpose: 'To ensure electrical system stability, coordination, and safety',
    scope: 'Complete electrical system including utility interface',
    
    detailedDescription: `Electrical System Studies comprise multiple analyses including load flow, short circuit, protection coordination, arc flash, motor starting, harmonic analysis, and transient stability. These studies verify the electrical design meets operational requirements, protection is properly coordinated, and safety requirements are satisfied. Results directly impact equipment specifications and settings.`,
    
    keyComponents: [
      'Load flow analysis',
      'Short circuit calculations',
      'Protection coordination',
      'Arc flash hazard analysis',
      'Motor starting studies',
      'Harmonic analysis',
      'Transient stability',
      'Grounding system analysis'
    ],
    
    deliverables: [
      'Study report compilation',
      'Load flow results',
      'Short circuit results',
      'Coordination curves',
      'Arc flash labels',
      'Study recommendations'
    ],
    
    bestPractices: [
      'Use accurate equipment data',
      'Consider all operating modes',
      'Include utility contributions',
      'Coordinate protection properly',
      'Update with final equipment data',
      'Consider maintenance scenarios'
    ],
    
    commonMistakes: [
      'Generic equipment data',
      'Missing operating scenarios',
      'Poor protection coordination',
      'Ignoring harmonics',
      'Not updating studies',
      'Missing arc flash analysis'
    ],
    
    qualityChecklist: [
      'All studies complete',
      'Data verified',
      'Results acceptable',
      'Recommendations clear',
      'Equipment ratings adequate',
      'Safety requirements met'
    ],
    
    realWorldExamples: [
      'Short circuit: 40-50kA typical at main bus',
      'Voltage drop: <5% steady state',
      'Motor starting: 80% voltage typical limit',
      'Arc flash: Category 2 maximum desired'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 1584',
        title: 'Guide for Performing Arc-Flash Hazard Calculations',
        organization: 'IEEE',
        relevantSections: ['Calculation methods']
      },
      {
        code: 'IEEE 242',
        title: 'Protection and Coordination of Industrial and Commercial Power Systems',
        organization: 'IEEE',
        relevantSections: ['Coordination principles']
      }
    ],
    
    regulations: [
      'Electrical safety regulations',
      'Arc flash requirements (NFPA 70E)',
      'Utility requirements'
    ],
    
    softwareTools: [
      'ETAP',
      'SKM PowerTools',
      'CYME',
      'DIgSILENT PowerFactory'
    ]
  },
  
  {
    id: 'CRS',
    code: 'CRS',
    title: 'Cable Routing Study',
    fullName: 'Cable Routing and Segregation Study',
    phase: 'DD',
    discipline: 'Electrical',
    issuanceStatus: 'IFC',
    
    summary: 'Analysis of cable routing requirements and segregation philosophy',
    purpose: 'To optimize cable routing and ensure proper segregation',
    scope: 'All power, control, and instrumentation cables',
    
    detailedDescription: `The Cable Routing Study determines optimal cable paths from sources to loads, considering segregation requirements, cable tray loading, and installation constraints. It addresses separation between power and instrument cables, redundant system segregation, and fire zone considerations. The study minimizes cable lengths while ensuring reliability and maintainability.`,
    
    keyComponents: [
      'Cable routing philosophy',
      'Segregation requirements matrix',
      'Tray loading calculations',
      'Major cable route plans',
      'Fire zone crossing analysis',
      'Redundancy separation',
      'Installation space requirements',
      'Pulling tension calculations'
    ],
    
    deliverables: [
      'Cable routing study report',
      'Segregation philosophy',
      'Tray loading diagrams',
      'Cable routing drawings',
      'Installation guidelines',
      'Cable schedule inputs'
    ],
    
    bestPractices: [
      'Define segregation rules early',
      'Consider maintenance access',
      'Plan for future cables',
      'Minimize fire zone penetrations',
      'Coordinate with all disciplines',
      'Consider construction sequence'
    ],
    
    commonMistakes: [
      'Inadequate segregation',
      'Overloaded cable trays',
      'Poor future provisions',
      'Complex routing paths',
      'Ignoring pulling limits',
      'Missing vendor cables'
    ],
    
    qualityChecklist: [
      'Segregation rules met',
      'Tray loading acceptable',
      'Routes constructible',
      'Future capacity available',
      'Maintenance access provided',
      'Costs optimized'
    ],
    
    realWorldExamples: [
      'Tray fill: 40% power, 50% control typical',
      'Segregation: 300mm power/instrument',
      'Future capacity: 25% typical',
      'Bend radius: 6-12x cable diameter'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61000-5-2',
        title: 'Electromagnetic compatibility - Installation guidelines',
        organization: 'IEC',
        relevantSections: ['Cable segregation']
      },
      {
        code: 'IEEE 525',
        title: 'Guide for the Design and Installation of Cable Systems',
        organization: 'IEEE',
        relevantSections: ['Installation practices']
      }
    ],
    
    regulations: [
      'Fire protection requirements',
      'EMC regulations',
      'Marine cable regulations'
    ],
    
    softwareTools: [
      '3D modeling software',
      'Cable routing optimization tools',
      'Tray fill calculation programs',
      'Clash detection systems'
    ]
  }
];