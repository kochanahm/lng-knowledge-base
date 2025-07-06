import { DeliverableKnowledge } from '@/types';

export const architectureDeliverables: DeliverableKnowledge[] = [
  {
    id: 'ADB',
    code: 'ADB',
    title: 'Architectural Design Basis',
    fullName: 'Architectural Design Basis and Standards',
    phase: 'FEED',
    discipline: 'Architecture',
    issuanceStatus: 'IFD',
    
    summary: 'Design criteria for buildings and architectural elements',
    purpose: 'To establish consistent architectural design standards',
    scope: 'All buildings, control rooms, substations, and occupied spaces',
    
    detailedDescription: `The Architectural Design Basis establishes design criteria for all buildings and occupied spaces including control rooms, substations, workshops, and accommodation. It defines space requirements, human factors considerations, materials standards, and regulatory compliance requirements. Special attention is given to blast-resistant building design for control rooms.`,
    
    keyComponents: [
      'Space planning criteria',
      'Human factors requirements',
      'Material standards',
      'Blast design requirements',
      'Environmental criteria',
      'Accessibility standards',
      'Life safety provisions',
      'Finishes specifications'
    ],
    
    deliverables: [
      'Architectural design basis',
      'Space requirements matrix',
      'Material standards',
      'Typical details library',
      'Regulatory compliance matrix',
      'Human factors guidelines'
    ],
    
    bestPractices: [
      'Engage operations early for requirements',
      'Consider maintenance access',
      'Design for harsh marine environment',
      'Standardize materials and details',
      'Plan for future modifications',
      'Include ergonomic considerations'
    ],
    
    commonMistakes: [
      'Inadequate space allocation',
      'Poor material selection for environment',
      'Ignoring blast requirements',
      'Complex maintenance access',
      'Non-standard details',
      'Missing future flexibility'
    ],
    
    qualityChecklist: [
      'All buildings covered',
      'Standards appropriate',
      'Blast requirements defined',
      'Materials suitable',
      'Compliance verified',
      'Operations approved'
    ],
    
    realWorldExamples: [
      'Control room: 200-400m² typical',
      'Blast rating: 0.5-1.0 bar overpressure',
      'Workshop: 400-800m² common',
      'Materials: Marine-grade throughout'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 753',
        title: 'Management of Hazards Associated with Location of Process Plant Buildings',
        organization: 'API',
        relevantSections: ['Building siting and design']
      },
      {
        code: 'ASCE/SEI 7',
        title: 'Minimum Design Loads for Buildings',
        organization: 'ASCE',
        relevantSections: ['Load requirements']
      }
    ],
    
    regulations: [
      'Building codes',
      'Accessibility regulations',
      'Life safety codes',
      'Blast-resistant design standards'
    ],
    
    softwareTools: [
      'Revit Architecture',
      'AutoCAD Architecture',
      'Blast analysis software',
      'Space planning tools'
    ]
  },
  
  {
    id: 'BLD',
    code: 'BLD',
    title: 'Building Layout Drawings',
    fullName: 'Building Plans, Elevations, and Sections',
    phase: 'DD',
    discipline: 'Architecture',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed architectural drawings for all buildings',
    purpose: 'To define building layouts for construction',
    scope: 'All permanent and temporary buildings',
    
    detailedDescription: `Building Layout Drawings provide complete architectural documentation for all facility buildings. These include floor plans showing room layouts, elevations depicting exterior appearance, sections illustrating vertical relationships, and details for construction. Special emphasis is placed on blast-resistant construction details for critical buildings.`,
    
    keyComponents: [
      'Floor plans all levels',
      'Building elevations',
      'Building sections',
      'Room layout details',
      'Door and window schedules',
      'Finish schedules',
      'Typical construction details',
      'Blast-resistant details'
    ],
    
    deliverables: [
      'Architectural drawing sets',
      'Room data sheets',
      'Finish schedules',
      'Door/window schedules',
      'Detail drawings',
      'Specification sections'
    ],
    
    bestPractices: [
      'Coordinate with all disciplines',
      'Show clear dimensions',
      'Include adequate details',
      'Consider construction sequence',
      'Verify code compliance',
      'Review with end users'
    ],
    
    commonMistakes: [
      'Insufficient coordination',
      'Missing critical dimensions',
      'Inadequate details',
      'Poor drawing organization',
      'Conflicts with structure/MEP',
      'Non-compliant designs'
    ],
    
    qualityChecklist: [
      'All buildings documented',
      'Dimensions complete',
      'Details adequate',
      'Schedules accurate',
      'Coordination verified',
      'Codes satisfied'
    ],
    
    realWorldExamples: [
      'Drawing scale: 1:50 typical plans',
      'Details: 1:10 or 1:20',
      'Control room: Full blast details',
      'Substations: Arc flash considerations'
    ],
    
    applicableStandards: [
      {
        code: 'AIA CAD Layer Guidelines',
        title: 'CAD Layer Guidelines',
        organization: 'AIA',
        relevantSections: ['Drawing standards']
      }
    ],
    
    regulations: [
      'Local building codes',
      'Fire codes',
      'Accessibility standards'
    ],
    
    softwareTools: [
      'Revit',
      'AutoCAD Architecture',
      'Navisworks for coordination',
      'BIM 360'
    ]
  },
  
  {
    id: 'CRD',
    code: 'CRD',
    title: 'Control Room Design',
    fullName: 'Control Room Layout and Human Factors Design',
    phase: 'DD',
    discipline: 'Architecture',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed design of control room considering human factors and operations',
    purpose: 'To create optimal control room environment for safe operations',
    scope: 'Main control room and local control rooms',
    
    detailedDescription: `Control Room Design encompasses the detailed layout and human factors engineering of control rooms. It includes console arrangements, sight lines, lighting design, acoustic treatment, and ergonomic considerations. The design ensures operators can effectively monitor and control the facility under normal and emergency conditions.`,
    
    keyComponents: [
      'Console layout optimization',
      'Operator sight line studies',
      'Large screen display layout',
      'Lighting design and control',
      'Acoustic design',
      'HVAC integration',
      'Emergency facilities',
      'Future expansion provisions'
    ],
    
    deliverables: [
      'Control room layout plans',
      '3D visualization models',
      'Sight line studies',
      'Lighting calculations',
      'Acoustic analysis',
      'Human factors report',
      'Furniture specifications'
    ],
    
    bestPractices: [
      'Involve operators in design',
      'Use 3D modeling for visualization',
      'Consider all operating scenarios',
      'Design for 24/7 operations',
      'Include adequate support spaces',
      'Plan for technology updates'
    ],
    
    commonMistakes: [
      'Poor console arrangements',
      'Inadequate sight lines',
      'Insufficient operator space',
      'Poor lighting design',
      'Missing support facilities',
      'No expansion capability'
    ],
    
    qualityChecklist: [
      'Layout optimized',
      'Sight lines verified',
      'Lighting adequate',
      'Acoustics acceptable',
      'Ergonomics addressed',
      'Operations approved'
    ],
    
    realWorldExamples: [
      'Console spacing: 2-2.5m between',
      'Screen height: 2-4m typical',
      'Lighting: 500 lux at console',
      'Noise: <50 dBA design target'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 11064',
        title: 'Ergonomic design of control centres',
        organization: 'ISO',
        relevantSections: ['All parts']
      },
      {
        code: 'EEMUA 201',
        title: 'Process plant control rooms',
        organization: 'EEMUA',
        relevantSections: ['Design guidelines']
      }
    ],
    
    regulations: [
      'Workplace regulations',
      'Emergency egress requirements'
    ],
    
    softwareTools: [
      '3D modeling software',
      'Lighting design software',
      'Acoustic modeling tools',
      'VR for operator reviews'
    ]
  }
];

export const hvacDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HDB',
    code: 'HDB',
    title: 'HVAC Design Basis',
    fullName: 'Heating, Ventilation, and Air Conditioning Design Basis',
    phase: 'FEED',
    discipline: 'HVAC',
    issuanceStatus: 'IFD',
    
    summary: 'Design criteria for all HVAC systems including hazardous area ventilation',
    purpose: 'To establish HVAC requirements for personnel comfort and safety',
    scope: 'All buildings, equipment rooms, and enclosed process areas',
    
    detailedDescription: `The HVAC Design Basis establishes criteria for heating, ventilation, and air conditioning systems throughout the facility. It addresses personnel comfort conditions, equipment cooling requirements, hazardous area ventilation, pressurization for area classification, and emergency ventilation. Special consideration is given to the marine environment and energy efficiency.`,
    
    keyComponents: [
      'Indoor/outdoor design conditions',
      'Ventilation rate requirements',
      'Pressurization criteria',
      'Hazardous area ventilation',
      'Equipment heat loads',
      'Filtration requirements',
      'Energy efficiency targets',
      'Redundancy philosophy'
    ],
    
    deliverables: [
      'HVAC design basis document',
      'Load calculation summaries',
      'Ventilation rate tables',
      'System selection criteria',
      'Equipment standards',
      'Energy analysis'
    ],
    
    bestPractices: [
      'Use site-specific weather data',
      'Consider equipment heat loads carefully',
      'Design for maintainability',
      'Include adequate redundancy',
      'Optimize energy consumption',
      'Plan for salt air environment'
    ],
    
    commonMistakes: [
      'Underestimating heat loads',
      'Inadequate ventilation rates',
      'Poor equipment selection',
      'Missing redundancy',
      'Ignoring marine environment',
      'Complex control strategies'
    ],
    
    qualityChecklist: [
      'All areas covered',
      'Loads calculated',
      'Standards applied',
      'Redundancy adequate',
      'Energy optimized',
      'Maintenance considered'
    ],
    
    realWorldExamples: [
      'Control room: 22±2°C, 50±10% RH',
      'Equipment rooms: Max 40°C',
      'Ventilation: 12-20 ACH hazardous',
      'Filtration: MERV 13 + salt removal'
    ],
    
    applicableStandards: [
      {
        code: 'ASHRAE 62.1',
        title: 'Ventilation for Acceptable Indoor Air Quality',
        organization: 'ASHRAE',
        relevantSections: ['Ventilation rates']
      },
      {
        code: 'API 500',
        title: 'Classification of Locations for Electrical Installations',
        organization: 'API',
        relevantSections: ['Ventilation requirements']
      }
    ],
    
    regulations: [
      'Workplace air quality standards',
      'Energy efficiency requirements',
      'Hazardous area regulations'
    ],
    
    softwareTools: [
      'Load calculation software',
      'Energy modeling tools',
      'CFD for airflow studies',
      'Equipment selection programs'
    ]
  },
  
  {
    id: 'HLD',
    code: 'HLD',
    title: 'HVAC Layout Drawings',
    fullName: 'HVAC Equipment and Distribution Layouts',
    phase: 'DD',
    discipline: 'HVAC',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed layouts of HVAC equipment and ductwork distribution',
    purpose: 'To define HVAC system installation requirements',
    scope: 'All HVAC systems including equipment, ductwork, and piping',
    
    detailedDescription: `HVAC Layout Drawings show the detailed arrangement of all HVAC equipment, ductwork routing, refrigerant piping, and associated components. These drawings ensure proper coordination with other disciplines, adequate space allocation, and maintainable installations. They include equipment locations, duct sizing, and critical dimensions.`,
    
    keyComponents: [
      'Equipment location plans',
      'Ductwork routing layouts',
      'Refrigerant piping routes',
      'Equipment schedules',
      'Duct sizing information',
      'Coordination sections',
      'Access requirements',
      'Support details'
    ],
    
    deliverables: [
      'HVAC plan drawings',
      'Equipment layout drawings',
      'Ductwork sections',
      'Piping schematics',
      'Equipment data sheets',
      'Coordination drawings'
    ],
    
    bestPractices: [
      'Coordinate early with structure',
      'Ensure maintenance access',
      'Minimize duct runs',
      'Avoid hazardous areas where possible',
      'Standardize equipment',
      'Consider future modifications'
    ],
    
    commonMistakes: [
      'Insufficient space allocation',
      'Poor coordination',
      'Inadequate access',
      'Complex duct routing',
      'Missing supports',
      'Ignoring acoustics'
    ],
    
    qualityChecklist: [
      'Equipment fits allocated space',
      'Routing coordinated',
      'Access provided',
      'Supports detailed',
      'Schedules complete',
      'Clashes resolved'
    ],
    
    realWorldExamples: [
      'Duct velocity: 5-10 m/s typical',
      'Access space: 1m minimum',
      'Support spacing: Per SMACNA',
      'Insulation: 50mm typical'
    ],
    
    applicableStandards: [
      {
        code: 'SMACNA',
        title: 'HVAC Duct Construction Standards',
        organization: 'SMACNA',
        relevantSections: ['Duct construction']
      }
    ],
    
    regulations: [
      'Building mechanical codes',
      'Fire damper requirements'
    ],
    
    softwareTools: [
      'Revit MEP',
      'AutoCAD MEP',
      'Navisworks',
      'Duct sizing software'
    ]
  },
  
  {
    id: 'HCS',
    code: 'HCS',
    title: 'HVAC Control Schematics',
    fullName: 'HVAC Control System Design and Schematics',
    phase: 'DD',
    discipline: 'HVAC',
    issuanceStatus: 'IFC',
    
    summary: 'Control strategies and schematics for HVAC systems',
    purpose: 'To define HVAC control logic and integration requirements',
    scope: 'All HVAC control systems and building automation',
    
    detailedDescription: `HVAC Control Schematics detail the control strategies for all HVAC systems including temperature control, pressure control, ventilation control, and integration with fire and gas systems. They define sensor locations, control valve arrangements, interlock logic, and interface with the building management system.`,
    
    keyComponents: [
      'Control strategy narratives',
      'Control schematic diagrams',
      'Sensor and device locations',
      'Control valve schedules',
      'Interlock logic diagrams',
      'BMS point lists',
      'Sequence of operations',
      'Emergency shutdown logic'
    ],
    
    deliverables: [
      'Control philosophy document',
      'Control schematics',
      'I/O lists',
      'Sequence descriptions',
      'BMS graphics concepts',
      'Points database'
    ],
    
    bestPractices: [
      'Keep control simple and reliable',
      'Include manual overrides',
      'Design for failure modes',
      'Integrate with F&G properly',
      'Consider energy optimization',
      'Document sequences clearly'
    ],
    
    commonMistakes: [
      'Over-complex control logic',
      'Missing failure modes',
      'Poor F&G integration',
      'Inadequate instrumentation',
      'No manual backups',
      'Unclear documentation'
    ],
    
    qualityChecklist: [
      'Strategies defined',
      'Logic clear',
      'Integration complete',
      'Points identified',
      'Sequences documented',
      'Testing planned'
    ],
    
    realWorldExamples: [
      'Temperature control: ±1°C typical',
      'Pressure: +5 to +50 Pa ranges',
      'BMS points: 500-1000 typical',
      'Response time: 5-10 minutes'
    ],
    
    applicableStandards: [
      {
        code: 'ASHRAE Guideline 36',
        title: 'High-Performance Sequences of Operation for HVAC Systems',
        organization: 'ASHRAE',
        relevantSections: ['Control sequences']
      }
    ],
    
    regulations: [
      'Energy code requirements',
      'Safety system integration rules'
    ],
    
    softwareTools: [
      'Control logic software',
      'BMS programming tools',
      'Simulation software',
      'Graphics packages'
    ]
  }
];

export const supportDeliverables: DeliverableKnowledge[] = [
  {
    id: 'VDL',
    code: 'VDL',
    title: 'Vendor Data Requirements',
    fullName: 'Vendor Data Requirements List',
    phase: 'FEED',
    discipline: 'Support',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive list of documentation required from all vendors',
    purpose: 'To ensure complete and timely vendor documentation delivery',
    scope: 'All equipment and packaged system vendors',
    
    detailedDescription: `The Vendor Data Requirements List (VDRL) specifies all documentation required from equipment vendors throughout the project. It defines submittal types, timing, review categories, and final documentation requirements. The VDRL ensures vendors understand documentation expectations and enables proper project planning for document reviews.`,
    
    keyComponents: [
      'Document types and descriptions',
      'Submittal timing requirements',
      'Review action codes',
      'Number of copies required',
      'Format requirements',
      'Final documentation packages',
      'Certification requirements',
      'As-built requirements'
    ],
    
    deliverables: [
      'Master VDRL',
      'Equipment-specific VDRLs',
      'Submittal schedule',
      'Document standards',
      'Review procedures',
      'Close-out requirements'
    ],
    
    bestPractices: [
      'Standardize requirements across vendors',
      'Align with project schedule needs',
      'Include clear format requirements',
      'Define review turnaround times',
      'Plan for as-built updates',
      'Consider electronic deliverables'
    ],
    
    commonMistakes: [
      'Excessive documentation requests',
      'Unclear timing requirements',
      'Missing critical documents',
      'Poor format specifications',
      'No as-built requirements',
      'Inadequate review time'
    ],
    
    qualityChecklist: [
      'All equipment covered',
      'Requirements clear',
      'Timing realistic',
      'Formats defined',
      'Review process clear',
      'Close-out planned'
    ],
    
    realWorldExamples: [
      'Documents per vendor: 50-150 typical',
      'Review cycles: 2-3 common',
      'Review time: 2-3 weeks standard',
      'Final dossier: 500+ documents'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 15926',
        title: 'Industrial automation systems',
        organization: 'ISO',
        relevantSections: ['Data requirements']
      }
    ],
    
    regulations: [
      'Regulatory documentation requirements',
      'Quality system requirements'
    ],
    
    softwareTools: [
      'Document management systems',
      'Vendor portal systems',
      'Review workflow tools',
      'Submittal tracking'
    ]
  },
  
  {
    id: 'TRN',
    code: 'TRN',
    title: 'Training Requirements',
    fullName: 'Training Requirements and Program Development',
    phase: 'DD',
    discipline: 'Support',
    issuanceStatus: 'IFC',
    
    summary: 'Comprehensive training requirements for operations and maintenance',
    purpose: 'To ensure personnel are properly trained for safe operations',
    scope: 'All operations and maintenance personnel training needs',
    
    detailedDescription: `The Training Requirements document identifies all training needed for safe and efficient facility operation. It includes technical training on systems and equipment, safety training, emergency response training, and competency requirements. The document forms the basis for developing detailed training programs and materials.`,
    
    keyComponents: [
      'Training needs analysis',
      'Role-based requirements',
      'Technical training modules',
      'Safety training requirements',
      'Competency frameworks',
      'Training delivery methods',
      'Assessment criteria',
      'Refresher training cycles'
    ],
    
    deliverables: [
      'Training requirements document',
      'Training matrices by role',
      'Competency frameworks',
      'Training program outline',
      'Vendor training requirements',
      'Training facility needs'
    ],
    
    bestPractices: [
      'Base on actual job requirements',
      'Include hands-on components',
      'Plan for different learning styles',
      'Consider simulator training',
      'Include competency assessment',
      'Plan refresher training'
    ],
    
    commonMistakes: [
      'Generic training programs',
      'Missing role-specific needs',
      'Inadequate hands-on time',
      'No competency assessment',
      'Poor scheduling',
      'Missing refreshers'
    ],
    
    qualityChecklist: [
      'All roles covered',
      'Requirements specific',
      'Methods appropriate',
      'Assessment included',
      'Schedule realistic',
      'Resources identified'
    ],
    
    realWorldExamples: [
      'Operators: 6-12 weeks initial',
      'Maintenance: 4-8 weeks typical',
      'Simulator: 2-4 weeks included',
      'Refresher: Annual typical'
    ],
    
    applicableStandards: [
      {
        code: 'API RP T-1',
        title: 'Orientation Programs for Personnel',
        organization: 'API',
        relevantSections: ['Training guidelines']
      }
    ],
    
    regulations: [
      'Competency requirements',
      'Safety training regulations',
      'Emergency response training'
    ],
    
    softwareTools: [
      'Learning management systems',
      'Training simulators',
      'Competency tracking',
      'E-learning platforms'
    ]
  },
  
  {
    id: 'SPR',
    code: 'SPR',
    title: 'Spare Parts Analysis',
    fullName: 'Spare Parts Requirements and Initial Inventory',
    phase: 'DD',
    discipline: 'Support',
    issuanceStatus: 'IFC',
    
    summary: 'Analysis of spare parts requirements for operations and maintenance',
    purpose: 'To define initial spare parts inventory for reliable operations',
    scope: 'All equipment spare parts including insurance and consumables',
    
    detailedDescription: `The Spare Parts Analysis determines the optimal initial spare parts inventory based on equipment criticality, failure rates, lead times, and operational requirements. It categorizes spares as insurance, capital, and consumable, defining stocking levels and reorder strategies. The analysis balances inventory costs against operational risks.`,
    
    keyComponents: [
      'Equipment criticality assessment',
      'Spare parts categorization',
      'Recommended stocking levels',
      'Lead time analysis',
      'Common/interchangeable parts',
      'Storage requirements',
      'Preservation needs',
      'Initial inventory value'
    ],
    
    deliverables: [
      'Spare parts analysis report',
      'Recommended spare lists',
      'Criticality assessments',
      'Storage requirements',
      'Preservation procedures',
      'Budget estimates'
    ],
    
    bestPractices: [
      'Use vendor recommendations wisely',
      'Consider actual failure data',
      'Identify common parts',
      'Plan proper storage',
      'Include preservation costs',
      'Review with operations'
    ],
    
    commonMistakes: [
      'Over-reliance on vendor lists',
      'Ignoring lead times',
      'Poor criticality assessment',
      'Inadequate preservation',
      'Missing consumables',
      'No reorder strategy'
    ],
    
    qualityChecklist: [
      'All equipment analyzed',
      'Criticality assessed',
      'Lead times verified',
      'Storage planned',
      'Costs estimated',
      'Strategy defined'
    ],
    
    realWorldExamples: [
      'Initial inventory: 2-5% of CAPEX',
      'Critical spares: 2-year supply',
      'Insurance spares: Selected items',
      'Consumables: 6-12 months'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 14224',
        title: 'Reliability and maintenance data',
        organization: 'ISO',
        relevantSections: ['Failure data']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      'CMMS systems',
      'Spare optimization software',
      'Criticality analysis tools',
      'Inventory management'
    ]
  }
];

export const integrationDeliverables: DeliverableKnowledge[] = [
  {
    id: 'IMS',
    code: 'IMS',
    title: 'Integration Management Strategy',
    fullName: 'Systems Integration Management Strategy',
    phase: 'FEED',
    discipline: 'Integration',
    issuanceStatus: 'IFD',
    
    summary: 'Overall strategy for managing interfaces between disciplines and systems',
    purpose: 'To ensure seamless integration of all systems and disciplines',
    scope: 'All technical interfaces and system boundaries',
    
    detailedDescription: `The Integration Management Strategy defines how technical interfaces between disciplines, systems, and contractors will be identified, documented, and managed throughout the project. It establishes processes for interface identification, documentation, verification, and close-out. This strategy is critical for complex LNG projects with multiple disciplines and contractors.`,
    
    keyComponents: [
      'Interface identification process',
      'Interface documentation standards',
      'Responsibility matrices',
      'Verification procedures',
      'Meeting and review cycles',
      'Change management process',
      'Close-out requirements',
      'Integration team structure'
    ],
    
    deliverables: [
      'Integration strategy document',
      'Interface management procedures',
      'Standard templates',
      'RACI matrices',
      'Meeting schedules',
      'Reporting formats'
    ],
    
    bestPractices: [
      'Start interface management early',
      'Use structured identification process',
      'Maintain live interface register',
      'Regular interface meetings',
      'Clear accountability assignment',
      'Proactive issue resolution'
    ],
    
    commonMistakes: [
      'Late start to integration',
      'Unclear responsibilities',
      'Poor documentation',
      'Reactive management',
      'Missing interfaces',
      'Weak enforcement'
    ],
    
    qualityChecklist: [
      'Process comprehensive',
      'Roles defined',
      'Tools established',
      'Schedule integrated',
      'Reporting clear',
      'Buy-in achieved'
    ],
    
    realWorldExamples: [
      'Interface count: 500-1500 typical',
      'Critical interfaces: 10-20%',
      'Meeting frequency: Bi-weekly',
      'Close-out rate: 90% by start-up'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 15288',
        title: 'Systems and software engineering',
        organization: 'ISO',
        relevantSections: ['System integration']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      'Interface management systems',
      'Collaboration platforms',
      'Document control systems',
      'Progress tracking tools'
    ]
  },
  
  {
    id: 'IFR',
    code: 'IFR',
    title: 'Interface Register',
    fullName: 'Project Interface Register and Tracking',
    phase: 'FEED',
    discipline: 'Integration',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive register of all project technical interfaces',
    purpose: 'To track and manage all interfaces to closure',
    scope: 'All technical interfaces between disciplines and contractors',
    
    detailedDescription: `The Interface Register is the central database for all project interfaces, documenting interface agreements between parties. Each interface includes description, responsible parties, deliverables exchanged, dates, and status. The register is actively managed throughout the project to ensure all interfaces are properly closed before commissioning.`,
    
    keyComponents: [
      'Interface identification number',
      'Interface description',
      'Responsible parties',
      'Information exchanged',
      'Due dates and status',
      'Supporting documents',
      'Approval records',
      'Close-out criteria'
    ],
    
    deliverables: [
      'Interface register database',
      'Interface sheets',
      'Status reports',
      'Critical interface list',
      'Close-out documentation',
      'Metrics dashboards'
    ],
    
    bestPractices: [
      'Use unique numbering system',
      'Regular status updates',
      'Link to project schedule',
      'Track approval status',
      'Monitor aging interfaces',
      'Escalate blocked items'
    ],
    
    commonMistakes: [
      'Incomplete descriptions',
      'Missing parties',
      'No follow-up process',
      'Poor status tracking',
      'Weak close-out criteria',
      'Limited accessibility'
    ],
    
    qualityChecklist: [
      'All interfaces captured',
      'Descriptions clear',
      'Parties identified',
      'Dates realistic',
      'Status current',
      'Process working'
    ],
    
    realWorldExamples: [
      'Update frequency: Weekly minimum',
      'Critical review: Monthly',
      'Close-out target: 95% by commissioning',
      'Typical delays: 20-30% past due'
    ],
    
    applicableStandards: [],
    
    regulations: [],
    
    softwareTools: [
      'Interface databases',
      'SharePoint/Teams',
      'Project systems',
      'Dashboard tools'
    ]
  },
  
  {
    id: 'MOD',
    code: 'MOD',
    title: '3D Model Reviews',
    fullName: '3D Model Integration and Clash Detection',
    phase: 'DD',
    discipline: 'Integration',
    issuanceStatus: 'IFC',
    
    summary: 'Systematic review of integrated 3D model for clash detection',
    purpose: 'To identify and resolve spatial conflicts before construction',
    scope: 'Complete 3D model including all disciplines',
    
    detailedDescription: `3D Model Reviews involve systematic examination of the integrated 3D model to identify clashes between disciplines, verify constructability, and ensure operability and maintainability. Reviews are conducted at increasing levels of detail as design progresses, with formal sessions including all stakeholders.`,
    
    keyComponents: [
      'Model integration procedures',
      'Clash detection rules',
      'Review session planning',
      'Clash categorization',
      'Resolution tracking',
      'Constructability checks',
      'Operability verification',
      'Model maturity metrics'
    ],
    
    deliverables: [
      'Model review reports',
      'Clash reports by area',
      'Resolution tracking logs',
      'Model screenshots',
      'Action item lists',
      'Model maturity assessments'
    ],
    
    bestPractices: [
      'Regular review cycles',
      'Involve construction team',
      'Include operations input',
      'Prioritize critical areas',
      'Track resolution progress',
      'Verify fixes in model'
    ],
    
    commonMistakes: [
      'Late model integration',
      'Missing disciplines',
      'Poor clash categorization',
      'Slow resolution',
      'No construction input',
      'Inadequate access space'
    ],
    
    qualityChecklist: [
      'Model complete',
      'All disciplines integrated',
      'Clashes identified',
      'Resolutions tracked',
      'Access verified',
      'Sign-offs obtained'
    ],
    
    realWorldExamples: [
      'Review frequency: 30/60/90%',
      'Clash count: 1000s initially',
      'Resolution time: 2-4 weeks',
      'Critical clashes: <50 at IFC'
    ],
    
    applicableStandards: [
      {
        code: 'PAS 1192-2',
        title: 'Specification for information management',
        organization: 'BSI',
        relevantSections: ['Clash detection']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      'Navisworks',
      'Tekla BIMsight',
      'Revit',
      'PDMS/E3D clash manager'
    ]
  },
  
  {
    id: 'SYS',
    code: 'SYS',
    title: 'System Completion Strategy',
    fullName: 'System Completion and Handover Strategy',
    phase: 'DD',
    discipline: 'Integration',
    issuanceStatus: 'IFC',
    
    summary: 'Strategy for systematic completion and handover of systems',
    purpose: 'To ensure organized transition from construction to operations',
    scope: 'All systems and subsystems for commissioning and handover',
    
    detailedDescription: `The System Completion Strategy defines how systems will be completed, tested, and handed over from construction to commissioning and ultimately to operations. It establishes system boundaries, completion sequences, documentation requirements, and acceptance criteria. This strategy ensures efficient and safe transition to operations.`,
    
    keyComponents: [
      'System breakdown structure',
      'Completion sequence logic',
      'System boundary definitions',
      'Testing requirements matrix',
      'Documentation packages',
      'Acceptance criteria',
      'Handover procedures',
      'Punch list management'
    ],
    
    deliverables: [
      'System completion strategy',
      'System boundary drawings',
      'Completion sequence plans',
      'Handover procedures',
      'Acceptance forms',
      'Progress tracking tools'
    ],
    
    bestPractices: [
      'Define clear system boundaries',
      'Logical completion sequence',
      'Early commissioning involvement',
      'Complete documentation packages',
      'Structured walkdown process',
      'Clear acceptance criteria'
    ],
    
    commonMistakes: [
      'Unclear boundaries',
      'Illogical sequences',
      'Incomplete packages',
      'Poor quality walkdowns',
      'Missing documentation',
      'Rushed handovers'
    ],
    
    qualityChecklist: [
      'Systems defined',
      'Sequences logical',
      'Documentation complete',
      'Criteria clear',
      'Resources planned',
      'Schedule integrated'
    ],
    
    realWorldExamples: [
      'System count: 50-150 typical',
      'Completion duration: 6-12 months',
      'Documentation: 50-200 items/system',
      'Punch lists: 10-50 items typical'
    ],
    
    applicableStandards: [
      {
        code: 'NORSOK Z-007',
        title: 'Mechanical completion and commissioning',
        organization: 'NORSOK',
        relevantSections: ['System completion']
      }
    ],
    
    regulations: [
      'Regulatory witness points',
      'Safety handover requirements'
    ],
    
    softwareTools: [
      'Completion management systems',
      'WinPCS or similar',
      'Document control systems',
      'Progress tracking tools'
    ]
  }
];