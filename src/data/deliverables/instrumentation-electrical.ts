import { DeliverableKnowledge } from '@/types';

export const instrumentationDeliverables: DeliverableKnowledge[] = [
  {
    id: 'ICP',
    code: 'ICP',
    title: 'Instrument & Control Philosophy',
    fullName: 'Instrumentation and Control System Philosophy',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    
    summary: 'Overall philosophy defining control system architecture, strategies, and standards',
    purpose: 'To establish consistent approach for all instrumentation and control systems design',
    scope: 'All control systems including DCS, ESD, F&G, and package controls',
    
    detailedDescription: `The Instrumentation & Control Philosophy document establishes the fundamental principles and strategies for all control systems in the LNG facility. It defines the control system architecture, level of automation, operator interface philosophy, alarm management strategy, and integration requirements. This document guides all subsequent instrumentation design work and ensures consistency across the facility.`,
    
    keyComponents: [
      'Control system architecture overview',
      'Automation philosophy and levels',
      'Operator interface standards',
      'Alarm management philosophy',
      'Safety system philosophy (ESD/F&G)',
      'Integration requirements',
      'Cybersecurity approach',
      'Maintenance and diagnostic philosophy'
    ],
    
    deliverables: [
      'I&C philosophy document',
      'System architecture diagrams',
      'Automation level matrix',
      'Standard symbology library',
      'Alarm philosophy document',
      'Integration requirements specification'
    ],
    
    bestPractices: [
      'Align with operator experience and preferences',
      'Consider lifecycle costs in automation decisions',
      'Standardize on proven platforms',
      'Plan for future expansions and upgrades',
      'Include cybersecurity from the beginning',
      'Define clear boundaries between systems'
    ],
    
    commonMistakes: [
      'Over-automating beyond operator capabilities',
      'Inconsistent philosophy between units',
      'Inadequate integration planning',
      'Ignoring maintenance requirements',
      'Unclear system boundaries',
      'Missing package unit integration'
    ],
    
    qualityChecklist: [
      'Philosophy aligns with operator requirements',
      'System boundaries clearly defined',
      'Integration approach comprehensive',
      'Standards and symbols defined',
      'Cybersecurity addressed',
      'Maintenance philosophy included'
    ],
    
    realWorldExamples: [
      'Typical architecture: Integrated DCS with separate SIS',
      'Automation levels: Semi-automatic startup/shutdown common',
      'Alarm targets: <10 alarms per hour per operator',
      'Integration: OPC UA becoming standard'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-101',
        title: 'Human Machine Interfaces for Process Automation Systems',
        organization: 'ISA',
        relevantSections: ['Section 6 - HMI Philosophy']
      },
      {
        code: 'EEMUA 191',
        title: 'Alarm Systems - A Guide to Design, Management and Procurement',
        organization: 'EEMUA',
        relevantSections: ['Section 3 - Alarm Philosophy']
      },
      {
        code: 'IEC 62682',
        title: 'Management of alarm systems for the process industries',
        organization: 'IEC',
        relevantSections: ['Section 7 - Alarm philosophy']
      }
    ],
    
    regulations: [
      'Process Safety Management requirements',
      'Cybersecurity regulations',
      'Local regulatory requirements'
    ],
    
    softwareTools: [
      'Visio for architecture diagrams',
      'Vendor configuration tools',
      'Alarm management software'
    ]
  },
  
  {
    id: 'CSA',
    code: 'CSA',
    title: 'Control System Architecture',
    fullName: 'Control System Architecture Design',
    phase: 'FEED',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed design of DCS, ESD, and F&G system architecture including hardware and networks',
    purpose: 'To define the complete control system hardware, software, and network architecture',
    scope: 'All control systems, networks, and interfaces for the facility',
    
    detailedDescription: `The Control System Architecture document provides the detailed design of all control system hardware, software configurations, and network architectures. It includes controller allocation, I/O distribution, network topology, redundancy schemes, and system interfaces. This document forms the basis for control system procurement and detailed design.`,
    
    keyComponents: [
      'DCS architecture and controller layout',
      'ESD system architecture',
      'F&G system configuration',
      'Network topology and redundancy',
      'I/O allocation and distribution',
      'Operator workstation configuration',
      'System interfaces and gateways',
      'Virtualization and server architecture'
    ],
    
    deliverables: [
      'System architecture drawings',
      'Network topology diagrams',
      'I/O allocation spreadsheets',
      'Controller loading calculations',
      'Cabinet layout drawings',
      'System interface specifications'
    ],
    
    bestPractices: [
      'Design for N+1 redundancy on critical systems',
      'Segregate safety and control networks',
      'Distribute I/O to minimize cable runs',
      'Plan for 30% spare I/O capacity',
      'Use standard cabinet designs',
      'Consider environmental conditions for equipment'
    ],
    
    commonMistakes: [
      'Insufficient I/O spare capacity',
      'Poor network segregation',
      'Inadequate redundancy planning',
      'Controller overloading',
      'Complex architectures difficult to maintain',
      'Missing interface requirements'
    ],
    
    qualityChecklist: [
      'Architecture meets availability requirements',
      'Redundancy implemented correctly',
      'I/O capacity adequate with spares',
      'Network design secure and segregated',
      'All interfaces defined',
      'Environmental requirements addressed'
    ],
    
    realWorldExamples: [
      'Typical DCS: 5-10 controllers per train',
      'I/O counts: 5,000-15,000 points per train',
      'Network: Redundant 1Gb Ethernet common',
      'Redundancy: Hot standby for critical controllers'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61508',
        title: 'Functional safety of electrical/electronic/programmable electronic safety-related systems',
        organization: 'IEC',
        relevantSections: ['Part 1 - General requirements']
      },
      {
        code: 'ISA-99/IEC 62443',
        title: 'Security for Industrial Automation and Control Systems',
        organization: 'ISA/IEC',
        relevantSections: ['Part 3-3 - System security requirements']
      }
    ],
    
    regulations: [
      'Functional safety regulations',
      'Cybersecurity requirements',
      'Classification society rules'
    ],
    
    softwareTools: [
      'Vendor architecture tools',
      'Network design software',
      'I/O database tools'
    ]
  },
  
  {
    id: 'LPD',
    code: 'LPD',
    title: 'Loop Drawings',
    fullName: 'Instrumentation Loop Drawings',
    phase: 'DD',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed wiring diagrams showing complete signal path from field device to control system',
    purpose: 'To provide complete wiring and connection information for each control loop',
    scope: 'All instrumentation loops including analog, discrete, and complex loops',
    
    detailedDescription: `Loop Drawings show the complete signal path for each instrumentation loop from the field device through junction boxes, marshalling cabinets, system cabinets, to the control system I/O. They include all connection points, cable numbers, terminal numbers, and signal types. These drawings are essential for installation, commissioning, and maintenance.`,
    
    keyComponents: [
      'Field device connections',
      'Junction box terminations',
      'Cable and pair identification',
      'Marshalling cabinet layout',
      'System cabinet terminations',
      'Power supply details',
      'Intrinsic safety barriers',
      'Shield and ground connections'
    ],
    
    deliverables: [
      'Individual loop drawings',
      'Loop drawing index',
      'Typical loop drawings',
      'Special/complex loop drawings',
      'Loop folder packages'
    ],
    
    bestPractices: [
      'Use standard loop drawing formats',
      'Show all connection points clearly',
      'Include cable and pair numbers',
      'Verify against P&IDs and cable schedules',
      'Show intrinsic safety requirements',
      'Include calibration information'
    ],
    
    commonMistakes: [
      'Missing junction box details',
      'Incorrect terminal assignments',
      'Shield grounding errors',
      'Wrong cable pair allocation',
      'Missing power supply details',
      'Inconsistent with cable schedule'
    ],
    
    qualityChecklist: [
      'All loops from P&ID included',
      'Terminal numbers unique and correct',
      'Cable numbers match cable schedule',
      'IS requirements clearly shown',
      'Power supplies adequate',
      'Shield grounding per standards'
    ],
    
    realWorldExamples: [
      'Typical project: 1,000-3,000 loops',
      'Loop types: 4-20mA, HART, Foundation Fieldbus',
      'Complex loops: SIS loops with diagnostics',
      'Average: 2-4 devices per loop drawing'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-5.4',
        title: 'Instrument Loop Diagrams',
        organization: 'ISA',
        relevantSections: ['All sections']
      },
      {
        code: 'IEC 61082-1',
        title: 'Preparation of documents used in electrotechnology',
        organization: 'IEC',
        relevantSections: ['Part 1 - Rules']
      }
    ],
    
    regulations: [
      'Electrical installation codes',
      'Hazardous area requirements'
    ],
    
    softwareTools: [
      'SPI (SmartPlant Instrumentation)',
      'COMOS',
      'AutoCAD Electrical',
      'AVEVA Instrumentation'
    ]
  },
  
  {
    id: 'CE',
    code: 'C&E',
    title: 'Cause & Effect Charts',
    fullName: 'Cause & Effect Logic Diagrams',
    phase: 'DD',
    discipline: 'Instrumentation',
    issuanceStatus: 'IFC',
    
    summary: 'Matrix showing all safety interlocks and shutdown logic for the facility',
    purpose: 'To define all automatic safety actions and their initiating causes',
    scope: 'All ESD, process shutdown, and critical control interlocks',
    
    detailedDescription: `Cause & Effect Charts present the shutdown and interlock logic in a matrix format showing what actions (effects) result from specific conditions (causes). They define the complete safety logic for ESD systems, unit shutdowns, and critical process interlocks. These charts are essential for programming safety systems and are key operations reference documents.`,
    
    keyComponents: [
      'Initiating causes (inputs)',
      'Resulting effects (outputs)',
      'Logic relationships (AND/OR)',
      'Time delays and bypasses',
      'Reset requirements',
      'Shutdown levels and hierarchy',
      'Override capabilities'
    ],
    
    deliverables: [
      'Master cause & effect chart',
      'Unit-specific C&E charts',
      'ESD hierarchy diagram',
      'Logic narrative descriptions',
      'Bypass and override procedures'
    ],
    
    bestPractices: [
      'Keep logic as simple as possible',
      'Group related causes and effects',
      'Clearly show shutdown hierarchy',
      'Include time delays where needed',
      'Document all assumptions',
      'Review thoroughly with operations'
    ],
    
    commonMistakes: [
      'Over-complex logic difficult to understand',
      'Missing manual shutdown capabilities',
      'Inadequate reset logic',
      'No consideration of startup conditions',
      'Insufficient bypasses for maintenance',
      'Logic conflicts between units'
    ],
    
    qualityChecklist: [
      'All safety functions from HAZOP included',
      'Logic is clear and unambiguous',
      'Shutdown hierarchy well defined',
      'Reset philosophy consistent',
      'Bypasses properly controlled',
      'Operations team agreement'
    ],
    
    realWorldExamples: [
      'Typical ESD levels: ESD-0 (total), ESD-1 (train), ESD-2 (unit)',
      'Common causes: High pressure, low level, fire detection',
      'Effects: Valve closures, pump stops, depressurization',
      'Time delays: 2-30 seconds typical for confirmations'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61511',
        title: 'Functional safety - Safety instrumented systems for the process industry',
        organization: 'IEC',
        relevantSections: ['Part 1 - Framework, definitions, system, hardware and software requirements']
      },
      {
        code: 'ISA-TR84.00.02',
        title: 'Safety Instrumented Functions (SIF) - Safety Integrity Level (SIL) Evaluation Techniques',
        organization: 'ISA',
        relevantSections: ['Part 5 - Logic Solver']
      }
    ],
    
    regulations: [
      'Process Safety Management regulations',
      'Local safety authority requirements'
    ],
    
    softwareTools: [
      'Excel for C&E matrices',
      'Safety PLC programming tools',
      'CAD for logic diagrams'
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
    
    summary: 'Fundamental design criteria for all electrical systems including power generation and distribution',
    purpose: 'To establish consistent electrical design parameters and philosophies',
    scope: 'All electrical systems from power generation through to end users',
    
    detailedDescription: `The Electrical Design Basis establishes all fundamental parameters and philosophies for electrical system design. It covers power generation philosophy, distribution voltage levels, earthing philosophy, equipment specifications, redundancy requirements, and design standards. This document ensures consistency across all electrical designs and interfaces.`,
    
    keyComponents: [
      'Power generation philosophy',
      'Voltage levels and distribution scheme',
      'Earthing and bonding philosophy',
      'Equipment specification criteria',
      'Redundancy and reliability requirements',
      'Short circuit and coordination philosophy',
      'Hazardous area requirements',
      'Power quality requirements'
    ],
    
    deliverables: [
      'Electrical design basis document',
      'System voltage schedule',
      'Equipment specification standards',
      'Standard symbol library',
      'Design checklist'
    ],
    
    bestPractices: [
      'Standardize on common voltage levels',
      'Design for future load growth (20-30%)',
      'Consider power quality for sensitive loads',
      'Plan for black start capability',
      'Include lifecycle cost considerations',
      'Coordinate with utility requirements early'
    ],
    
    commonMistakes: [
      'Inadequate spare capacity planning',
      'Inconsistent earthing philosophy',
      'Missing harmonic considerations',
      'Poor coordination with mechanical loads',
      'Overlooking ambient conditions',
      'Insufficient emergency power'
    ],
    
    qualityChecklist: [
      'All voltage levels defined and justified',
      'Load growth allowance included',
      'Earthing philosophy comprehensive',
      'Standards and codes identified',
      'Reliability requirements met',
      'Hazardous area approach clear'
    ],
    
    realWorldExamples: [
      'HV distribution: typically 11kV or 13.8kV',
      'LV distribution: 400V/230V or 480V/277V',
      'Emergency power: 100% backup for critical loads',
      'Power factor target: 0.85-0.95'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 3004 Series',
        title: 'Industrial and Commercial Power Systems',
        organization: 'IEEE',
        relevantSections: ['All relevant standards in series']
      },
      {
        code: 'IEC 61892',
        title: 'Mobile and fixed offshore units - Electrical installations',
        organization: 'IEC',
        relevantSections: ['Part 1 - General requirements']
      },
      {
        code: 'API RP 14F',
        title: 'Design, Installation, and Maintenance of Electrical Systems for Fixed and Floating Offshore Facilities',
        organization: 'API',
        relevantSections: ['Section 4 - System Design']
      }
    ],
    
    regulations: [
      'National Electrical Code (local version)',
      'Hazardous area regulations',
      'Marine electrical regulations for GBS'
    ],
    
    softwareTools: [
      'ETAP',
      'SKM PowerTools',
      'DIgSILENT PowerFactory'
    ]
  },
  
  {
    id: 'SLD',
    code: 'SLD',
    title: 'Single Line Diagram',
    fullName: 'Electrical Single Line Diagram',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Simplified diagram showing complete power distribution from generation to end users',
    purpose: 'To show overall power system configuration and major equipment',
    scope: 'Complete electrical system including normal and emergency power',
    
    detailedDescription: `The Single Line Diagram (SLD) is the primary electrical drawing showing power flow from generation through all distribution levels to major loads. It includes generators, transformers, switchgear, major feeders, and large motors. The SLD is used for system studies, protection coordination, and as the basis for detailed design.`,
    
    keyComponents: [
      'Power generation units',
      'Main transformers',
      'HV and LV switchgear',
      'Major distribution feeders',
      'Large motors and drives',
      'Emergency power systems',
      'Key protection devices',
      'Utility connections'
    ],
    
    deliverables: [
      'Overall single line diagram',
      'Area single line diagrams',
      'Emergency power SLD',
      'Key electrical data tables',
      'Equipment rating summary'
    ],
    
    bestPractices: [
      'Show clear power flow paths',
      'Include all switching capabilities',
      'Label all equipment clearly',
      'Show protection device ratings',
      'Indicate normal switching positions',
      'Include metering points'
    ],
    
    commonMistakes: [
      'Too much detail cluttering diagram',
      'Missing emergency power paths',
      'Incorrect transformer connections',
      'No indication of normal configuration',
      'Missing key interlocks',
      'Poor layout making it hard to follow'
    ],
    
    qualityChecklist: [
      'All generation and major loads shown',
      'Power flow paths are clear',
      'Equipment ratings indicated',
      'Protection devices shown',
      'Normal configuration marked',
      'Consistent with load list'
    ],
    
    realWorldExamples: [
      'Typical generation: 20-40MW gas turbines',
      'Main transformers: 30-50MVA typical',
      'Switchgear: Metal-clad for HV, Metal-enclosed for LV',
      'Critical loads on emergency bus'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 315',
        title: 'Graphic Symbols for Electrical and Electronics Diagrams',
        organization: 'IEEE',
        relevantSections: ['All sections']
      },
      {
        code: 'IEC 61082-1',
        title: 'Preparation of documents used in electrotechnology',
        organization: 'IEC',
        relevantSections: ['Part 1 - Rules']
      }
    ],
    
    regulations: [
      'Local electrical code requirements',
      'Utility interconnection standards'
    ],
    
    softwareTools: [
      'ETAP',
      'AutoCAD Electrical',
      'EPLAN',
      'PowerCAD'
    ]
  },
  
  {
    id: 'ELC',
    code: 'ELC',
    title: 'Electrical Load List',
    fullName: 'Master Electrical Load List',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFR',
    
    summary: 'Comprehensive list of all electrical loads with power requirements and characteristics',
    purpose: 'To document all electrical loads for system sizing and design',
    scope: 'All electrical consumers including motors, heaters, lighting, and instrumentation',
    
    detailedDescription: `The Electrical Load List is a comprehensive database of all electrical loads in the facility. It includes rated power, operating power, power factor, starting characteristics, and criticality classification. This list is used for transformer sizing, generator sizing, cable sizing, and load flow studies. It's continuously updated throughout the project.`,
    
    keyComponents: [
      'Equipment tag and description',
      'Rated power (kW/HP)',
      'Operating power and load factor',
      'Voltage level',
      'Starting method and current',
      'Power factor',
      'Criticality classification',
      'Normal/emergency power source'
    ],
    
    deliverables: [
      'Master load list spreadsheet',
      'Load summary by area',
      'Load summary by voltage',
      'Critical load list',
      'Load growth projections'
    ],
    
    bestPractices: [
      'Use realistic load factors',
      'Include all small loads (aggregate)',
      'Verify motor sizes with mechanical',
      'Consider future loads',
      'Classify criticality carefully',
      'Update regularly as design progresses'
    ],
    
    commonMistakes: [
      'Using nameplate without load factors',
      'Missing small/miscellaneous loads',
      'Incorrect criticality classification',
      'Not updating after equipment changes',
      'Wrong voltage assignments',
      'Missing spare/standby loads'
    ],
    
    qualityChecklist: [
      'All equipment from P&IDs included',
      'Load factors realistic',
      'Starting methods defined',
      'Criticality classification complete',
      'Voltage levels correct',
      'Totals reconciled with studies'
    ],
    
    realWorldExamples: [
      'Large motors: 1-10MW for compressors',
      'Total connected load: 50-150MW typical',
      'Operating load: 60-80% of connected',
      'Critical loads: 20-30% of total'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 3004.8',
        title: 'Recommended Practice for Motor Protection',
        organization: 'IEEE',
        relevantSections: ['Section 4 - Motor Data']
      }
    ],
    
    regulations: [
      'Energy efficiency regulations',
      'Emergency power requirements'
    ],
    
    softwareTools: [
      'Excel or database',
      'ETAP load list module',
      'Integration with equipment database'
    ]
  },
  
  {
    id: 'SLD_DD',
    code: 'SLD-DD',
    title: 'Single Line Diagram - Detailed',
    fullName: 'Detailed Electrical Single Line Diagrams',
    phase: 'DD',
    discipline: 'Electrical',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed single line diagrams with all equipment, protection settings, and cable data',
    purpose: 'To provide complete electrical system information for construction and operation',
    scope: 'All electrical systems with full detail for installation',
    
    detailedDescription: `The Detailed Single Line Diagrams expand on the FEED SLDs to show complete information needed for construction and operation. This includes all feeders, protection relay settings, cable sizes and lengths, control power systems, metering, and synchronizing schemes. These drawings are the primary reference for electrical installation and commissioning.`,
    
    keyComponents: [
      'All electrical equipment with ratings',
      'Protection relay types and settings',
      'Cable sizes and lengths',
      'CT/PT ratios and accuracies',
      'Metering and monitoring points',
      'Control power distribution',
      'Interlocking schemes',
      'Synchronizing arrangements'
    ],
    
    deliverables: [
      'Detailed single line diagrams',
      'Protection coordination curves',
      'Cable schedule cross-references',
      'Relay setting tables',
      'Interlock logic diagrams'
    ],
    
    bestPractices: [
      'Show all feeders and loads',
      'Include cable data on diagram',
      'Cross-reference to other documents',
      'Show all protection zones clearly',
      'Include control power systems',
      'Verify against protection study'
    ],
    
    commonMistakes: [
      'Inconsistent with protection study',
      'Missing small feeders',
      'Wrong cable sizes shown',
      'CT/PT ratios incorrect',
      'Control power not shown',
      'Missing key interlocks'
    ],
    
    qualityChecklist: [
      'All equipment from load list included',
      'Protection settings match study',
      'Cable sizes verified',
      'CT/PT ratios correct for relays',
      'Control power complete',
      'Interlocks clearly shown'
    ],
    
    realWorldExamples: [
      'Typical SLD set: 50-100 drawings',
      'Protection zones clearly delineated',
      'Cable data boxes for each feeder',
      'Detailed notes for special conditions'
    ],
    
    applicableStandards: [
      {
        code: 'IEEE 242',
        title: 'Recommended Practice for Protection and Coordination of Industrial and Commercial Power Systems',
        organization: 'IEEE',
        relevantSections: ['Chapter 3 - System Analysis']
      }
    ],
    
    regulations: [
      'Electrical installation codes',
      'Arc flash labeling requirements'
    ],
    
    softwareTools: [
      'ETAP or SKM',
      'AutoCAD Electrical',
      'Microstation'
    ]
  },
  
  {
    id: 'HAC',
    code: 'HAC',
    title: 'Hazardous Area Classification',
    fullName: 'Hazardous Area Classification Drawings',
    phase: 'FEED',
    discipline: 'Electrical',
    issuanceStatus: 'IFD',
    
    summary: 'Drawings showing classified hazardous areas for electrical equipment selection',
    purpose: 'To define area classifications for proper electrical equipment specification',
    scope: 'All areas of the facility where flammable materials may be present',
    
    detailedDescription: `Hazardous Area Classification drawings show the extent and classification of areas where flammable gases or vapors may be present. These drawings are critical for selecting appropriate electrical equipment and installation methods. They are developed based on process information and ventilation conditions, following recognized codes and standards.`,
    
    keyComponents: [
      'Zone classifications (0, 1, 2)',
      'Gas group classifications',
      'Temperature classifications',
      'Extent of hazardous areas',
      'Ventilation considerations',
      'Sources of release',
      'Special conditions'
    ],
    
    deliverables: [
      'Area classification drawings (plan views)',
      'Area classification sections/elevations',
      'Classification data sheets',
      'Equipment selection guide',
      'Installation detail requirements'
    ],
    
    bestPractices: [
      'Coordinate closely with process safety',
      'Consider all sources of release',
      'Account for ventilation effects',
      'Be consistent in classification approach',
      'Document all assumptions',
      'Review with operations team'
    ],
    
    commonMistakes: [
      'Inconsistent classification methodology',
      'Missing small sources of release',
      'Not considering abnormal operation',
      'Incorrect distances from source',
      'Ignoring heavier-than-air gases',
      'Poor coordination with equipment layout'
    ],
    
    qualityChecklist: [
      'All process equipment evaluated',
      'Classification distances verified',
      'Ventilation effects included',
      'Boundaries clearly shown',
      'Gas groups identified',
      'Temperature classes assigned'
    ],
    
    realWorldExamples: [
      'Zone 1: Within 3m of flanges typically',
      'Zone 2: Extends 3-10m depending on source',
      'Gas Group IIA (propane) or IIB (ethylene)',
      'Temperature Class T3 common for hydrocarbons'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 60079-10-1',
        title: 'Classification of areas - Explosive gas atmospheres',
        organization: 'IEC',
        relevantSections: ['All sections']
      },
      {
        code: 'API RP 500',
        title: 'Recommended Practice for Classification of Locations for Electrical Installations at Petroleum Facilities',
        organization: 'API',
        relevantSections: ['Section 6 - Specific Locations']
      },
      {
        code: 'NFPA 497',
        title: 'Recommended Practice for the Classification of Flammable Liquids, Gases, or Vapors',
        organization: 'NFPA',
        relevantSections: ['Chapter 4 - Class I Locations']
      }
    ],
    
    regulations: [
      'ATEX Directive (Europe)',
      'NEC Article 500 (US)',
      'Local electrical safety codes'
    ],
    
    softwareTools: [
      'AutoCAD with HAC tools',
      'Specialized HAC software',
      'CFD for complex ventilation'
    ]
  }
];