import { DeliverableKnowledge } from '@/types';

export const pipingDeliverables: DeliverableKnowledge[] = [
  {
    id: 'PPP',
    code: 'PPP',
    title: 'Piping Design Philosophy',
    fullName: 'Piping Design Philosophy and Criteria',
    phase: 'FEED',
    discipline: 'Piping',
    issuanceStatus: 'IFD',
    
    summary: 'Master document establishing piping design principles and standards',
    purpose: 'To ensure consistent piping design approach across the project',
    scope: 'All piping systems including process, utility, and specialty services',
    
    detailedDescription: `The Piping Design Philosophy establishes fundamental design criteria for all piping systems including design codes, material selection principles, stress analysis requirements, support standards, and installation requirements. It ensures consistency in piping design approaches and serves as the basis for detailed specifications and procedures.`,
    
    keyComponents: [
      'Design codes and standards',
      'Material selection philosophy',
      'Stress analysis criteria',
      'Support spacing standards',
      'Slope and drainage requirements',
      'Venting and draining philosophy',
      'Testing requirements',
      'Insulation and heat tracing criteria'
    ],
    
    deliverables: [
      'Piping design philosophy document',
      'Standard specifications index',
      'Typical details catalog',
      'Material selection charts',
      'Support standards',
      'Installation requirements'
    ],
    
    bestPractices: [
      'Consider constructability early',
      'Standardize materials and sizes',
      'Define clear stress criteria',
      'Include operations input',
      'Plan for thermal expansion',
      'Consider maintenance access'
    ],
    
    commonMistakes: [
      'Over-complex specifications',
      'Inadequate drainage provisions',
      'Missing thermal considerations',
      'Poor support standards',
      'Ignoring constructability',
      'Insufficient flexibility'
    ],
    
    qualityChecklist: [
      'All services covered',
      'Standards appropriate',
      'Criteria clearly defined',
      'Constructability addressed',
      'Operations reviewed',
      'Maintenance considered'
    ],
    
    realWorldExamples: [
      'Design code: ASME B31.3 typical',
      'Minimum slope: 1:100 to 1:200',
      'Support spacing: Per MSS-SP-58',
      'Cold service: -196°C for LNG'
    ],
    
    applicableStandards: [
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Design requirements']
      },
      {
        code: 'MSS-SP-58',
        title: 'Pipe Hangers and Supports',
        organization: 'MSS',
        relevantSections: ['Support spacing']
      }
    ],
    
    regulations: [
      'Pressure equipment directives',
      'Marine piping regulations',
      'Local piping codes'
    ],
    
    softwareTools: [
      'CAESAR II for stress',
      'AutoCAD Plant 3D',
      'PDMS/E3D',
      'Specification writing tools'
    ]
  },
  
  {
    id: 'PPS',
    code: 'PPS',
    title: 'Piping Specifications',
    fullName: 'Piping Material Specifications',
    phase: 'FEED',
    discipline: 'Piping',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed specifications for piping components by service class',
    purpose: 'To define acceptable materials and components for each service',
    scope: 'All piping services with associated pressure/temperature ratings',
    
    detailedDescription: `Piping Specifications define allowable piping components for each service class based on process conditions, fluid properties, and corrosion requirements. Each specification includes pipe materials, fittings, flanges, gaskets, bolting, valves, and special items. These specs ensure material compatibility and standardization across the facility.`,
    
    keyComponents: [
      'Service class designations',
      'Pressure/temperature ratings',
      'Pipe materials and schedules',
      'Fitting types and ratings',
      'Flange specifications',
      'Gasket and bolting specs',
      'Valve requirements',
      'Branch connection tables'
    ],
    
    deliverables: [
      'Piping specification sheets',
      'Service class index',
      'Material selection guide',
      'Branch connection tables',
      'Valve specification sheets',
      'Special items list'
    ],
    
    bestPractices: [
      'Minimize number of spec classes',
      'Consider full temperature range',
      'Include corrosion allowance',
      'Standardize components',
      'Consider local availability',
      'Include specialty items early'
    ],
    
    commonMistakes: [
      'Too many specifications',
      'Inadequate temperature coverage',
      'Missing special components',
      'Poor material traceability',
      'Ignoring code requirements',
      'Complex branch tables'
    ],
    
    qualityChecklist: [
      'All services covered',
      'Materials code compliant',
      'Temperature ranges complete',
      'Components standardized',
      'Specials identified',
      'Procurement friendly'
    ],
    
    realWorldExamples: [
      'Spec classes: 30-50 typical',
      'Carbon steel: A106-B common',
      'Stainless: 316L for marine',
      'Cryogenic: 304/316 SS standard'
    ],
    
    applicableStandards: [
      {
        code: 'ASME B16.5',
        title: 'Pipe Flanges and Flanged Fittings',
        organization: 'ASME',
        relevantSections: ['Pressure-temperature ratings']
      },
      {
        code: 'ASME B16.34',
        title: 'Valves - Flanged, Threaded, and Welding End',
        organization: 'ASME',
        relevantSections: ['Pressure-temperature ratings']
      }
    ],
    
    regulations: [
      'Material certification requirements',
      'Pressure equipment directives'
    ],
    
    softwareTools: [
      'Specification databases',
      'SmartPlant Reference Data',
      'Material management systems',
      'Code compliance checkers'
    ]
  },
  
  {
    id: 'PLT',
    code: 'PLT',
    title: 'Plot Plan',
    fullName: 'Overall Plot Plan and Equipment Arrangement',
    phase: 'FEED',
    discipline: 'Piping',
    issuanceStatus: 'IFD',
    
    summary: 'Overall facility layout showing equipment arrangement and spacing',
    purpose: 'To optimize facility layout for safety, operations, and construction',
    scope: 'Complete facility including process units, utilities, and infrastructure',
    
    detailedDescription: `The Plot Plan establishes the overall facility arrangement showing location of all major equipment, structures, buildings, and infrastructure. It considers process flow, safety distances, maintenance access, constructability, and future expansion. The plot plan is fundamental to project execution and influences all other design disciplines.`,
    
    keyComponents: [
      'Equipment locations and spacing',
      'Process unit arrangements',
      'Utility area locations',
      'Buildings and control rooms',
      'Roads and access ways',
      'Pipe rack routing',
      'Safety distances',
      'Future expansion areas'
    ],
    
    deliverables: [
      'Overall plot plan',
      'Unit plot plans',
      'Equipment coordinates',
      'Spacing tables',
      'Access and escape routes',
      'Future expansion plan'
    ],
    
    bestPractices: [
      'Consider prevailing winds',
      'Minimize piping runs',
      'Group similar hazards',
      'Provide adequate access',
      'Plan for construction',
      'Allow future expansion'
    ],
    
    commonMistakes: [
      'Inadequate spacing',
      'Poor process flow',
      'Insufficient access',
      'Ignoring wind direction',
      'No construction space',
      'Complex piping routes'
    ],
    
    qualityChecklist: [
      'Safety distances met',
      'Process flow logical',
      'Access adequate',
      'Constructability verified',
      'Operations approved',
      'Expansion possible'
    ],
    
    realWorldExamples: [
      'LNG tank spacing: 0.5-1.0 x diameter',
      'Control room: 50-100m from process',
      'Pipe rack width: 6-20m typical',
      'Road width: 6-8m for maintenance'
    ],
    
    applicableStandards: [
      {
        code: 'NFPA 59A',
        title: 'Standard for the Production, Storage, and Handling of LNG',
        organization: 'NFPA',
        relevantSections: ['Siting requirements']
      },
      {
        code: 'API 752',
        title: 'Management of Hazards Associated with Location of Process Plant Buildings',
        organization: 'API',
        relevantSections: ['Building siting']
      }
    ],
    
    regulations: [
      'Local planning requirements',
      'Environmental permits',
      'Marine facility regulations'
    ],
    
    softwareTools: [
      'AutoCAD/MicroStation',
      'PDMS/E3D for 3D',
      'Navisworks for reviews',
      'Google Earth for site'
    ]
  },
  
  {
    id: 'ISO',
    code: 'ISO',
    title: 'Piping Isometrics',
    fullName: 'Piping Isometric Drawings',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed 3D representations of piping for fabrication and installation',
    purpose: 'To provide complete information for pipe fabrication and field installation',
    scope: 'All piping systems 2" and above, plus critical small bore',
    
    detailedDescription: `Piping Isometric drawings are detailed 3D representations of piping systems showing all components, dimensions, welds, and supports required for fabrication and installation. Each isometric represents a complete piping system or spool that can be fabricated as a unit. They include bills of materials, weld details, and installation information.`,
    
    keyComponents: [
      'Pipe routing in 3D',
      'All fittings and components',
      'Weld locations and types',
      'Support locations',
      'Dimensions and elevations',
      'Spool break locations',
      'Material take-off',
      'Field weld identification'
    ],
    
    deliverables: [
      'Individual isometric drawings',
      'Isometric index',
      'Spool lists',
      'Field weld maps',
      'Support details',
      'Material summaries'
    ],
    
    bestPractices: [
      'Optimize spool sizes for transport',
      'Minimize field welds',
      'Show all components clearly',
      'Include support details',
      'Consider erection sequence',
      'Check for interferences'
    ],
    
    commonMistakes: [
      'Missing small components',
      'Incorrect dimensions',
      'Poor spool breaks',
      'Missing support information',
      'No field weld access',
      'Unclear orientations'
    ],
    
    qualityChecklist: [
      'All components shown',
      'Dimensions complete',
      'Welds properly located',
      'Supports identified',
      'BOMs accurate',
      'Constructability verified'
    ],
    
    realWorldExamples: [
      'Spool size: Limited by transport/crane',
      'Field welds: Minimize but ensure access',
      'Accuracy: ±3mm typical tolerance',
      'Details: Every component down to gaskets'
    ],
    
    applicableStandards: [
      {
        code: 'PFI ES-21',
        title: 'Internal Machining and Fit-up of GTAW Root Pass Circumferential Butt Welds',
        organization: 'PFI',
        relevantSections: ['Fit-up requirements']
      }
    ],
    
    regulations: [
      'Welding code compliance',
      'Material traceability requirements'
    ],
    
    softwareTools: [
      'PDMS/E3D',
      'CADWorx',
      'Intergraph Smart 3D',
      'Isogen for automation'
    ]
  },
  
  {
    id: 'PSA',
    code: 'PSA',
    title: 'Pipe Stress Analysis',
    fullName: 'Pipe Stress Analysis Reports',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    
    summary: 'Analysis of piping systems for thermal, weight, and dynamic loads',
    purpose: 'To ensure piping systems are safe under all operating conditions',
    scope: 'Critical piping systems as defined in stress criteria',
    
    detailedDescription: `Pipe Stress Analysis evaluates piping systems for various loading conditions including thermal expansion, weight, pressure, wind, and seismic loads. The analysis ensures stresses remain within code allowables, equipment nozzle loads are acceptable, and adequate flexibility exists. Critical systems like cryogenic, high temperature, and large diameter piping require detailed analysis.`,
    
    keyComponents: [
      'System modeling parameters',
      'Load case definitions',
      'Stress calculation results',
      'Nozzle load summaries',
      'Support loads and types',
      'Displacement checks',
      'Spring hanger designs',
      'Expansion loop sizing'
    ],
    
    deliverables: [
      'Stress analysis reports',
      'Critical line list',
      'Stress isometrics',
      'Support load tables',
      'Spring hanger datasheets',
      'Nozzle load summaries'
    ],
    
    bestPractices: [
      'Model boundary conditions accurately',
      'Include all loading cases',
      'Verify equipment allowables',
      'Consider construction sequence',
      'Design for maintenance',
      'Document assumptions clearly'
    ],
    
    commonMistakes: [
      'Incorrect boundary conditions',
      'Missing load cases',
      'Ignoring equipment limits',
      'Over-constraining systems',
      'Poor spring sizing',
      'Inadequate documentation'
    ],
    
    qualityChecklist: [
      'All critical lines analyzed',
      'Code compliance verified',
      'Nozzle loads acceptable',
      'Supports properly designed',
      'Flexibility adequate',
      'Reports complete'
    ],
    
    realWorldExamples: [
      'Critical lines: 15-25% of total',
      'Temperature range: -196°C to 400°C',
      'Allowable stress: Per B31.3',
      'Nozzle loads: Per API 610/617'
    ],
    
    applicableStandards: [
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Chapter II - Design']
      },
      {
        code: 'WRC 107/537',
        title: 'Local Stresses in Cylindrical Shells',
        organization: 'WRC',
        relevantSections: ['Nozzle analysis']
      }
    ],
    
    regulations: [
      'Seismic design requirements',
      'Equipment certification requirements'
    ],
    
    softwareTools: [
      'CAESAR II',
      'AutoPIPE',
      'ROHR2',
      'FE/Pipe for special cases'
    ]
  }
];

export const materialDeliverables: DeliverableKnowledge[] = [
  {
    id: 'MSP',
    code: 'MSP',
    title: 'Material Selection Philosophy',
    fullName: 'Material Selection Philosophy and Criteria',
    phase: 'FEED',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Overall philosophy for material selection considering corrosion and service conditions',
    purpose: 'To ensure appropriate material selection for all services',
    scope: 'All equipment and piping materials exposed to process and utilities',
    
    detailedDescription: `The Material Selection Philosophy establishes the approach for selecting materials based on corrosion mechanisms, service conditions, and lifecycle considerations. It addresses carbon steel limits, corrosion allowances, stainless steel requirements, special alloys, and non-metallic materials. The philosophy ensures materials are fit for service while optimizing costs.`,
    
    keyComponents: [
      'Corrosion assessment methodology',
      'Material selection criteria',
      'Corrosion allowance philosophy',
      'Carbon steel limits',
      'Stainless steel applications',
      'Special alloy requirements',
      'Non-metallic materials',
      'Cathodic protection requirements'
    ],
    
    deliverables: [
      'Material selection philosophy document',
      'Corrosion assessment reports',
      'Material selection diagrams',
      'Corrosion allowance tables',
      'Special materials register',
      'Lessons learned integration'
    ],
    
    bestPractices: [
      'Consider all corrosion mechanisms',
      'Include lifecycle costs',
      'Standardize materials where possible',
      'Consider local experience',
      'Plan for inspectability',
      'Address external corrosion'
    ],
    
    commonMistakes: [
      'Ignoring localized corrosion',
      'Inadequate velocity limits',
      'Missing chloride exposure',
      'Poor gasket selection',
      'Ignoring CUI risks',
      'Over-conservative selection'
    ],
    
    qualityChecklist: [
      'All services evaluated',
      'Corrosion mechanisms identified',
      'Materials appropriate',
      'Standards referenced',
      'Experience incorporated',
      'Costs optimized'
    ],
    
    realWorldExamples: [
      'CS limit: -29°C typical minimum',
      'CA: 3mm process, 1.5mm utility',
      'SS: 316L for marine atmosphere',
      'Duplex: For high chloride services'
    ],
    
    applicableStandards: [
      {
        code: 'NACE MR0175',
        title: 'Sulfide Stress Cracking Resistant Materials',
        organization: 'NACE',
        relevantSections: ['Material requirements']
      },
      {
        code: 'ISO 21457',
        title: 'Materials selection and corrosion control for oil and gas production systems',
        organization: 'ISO',
        relevantSections: ['Selection methodology']
      }
    ],
    
    regulations: [
      'Environmental compliance',
      'Material certification requirements'
    ],
    
    softwareTools: [
      'Corrosion modeling software',
      'Material databases',
      'Lifecycle cost tools',
      'Inspection planning systems'
    ]
  },
  
  {
    id: 'MSD',
    code: 'MSD',
    title: 'Material Selection Diagrams',
    fullName: 'Material Selection Diagrams for Process Services',
    phase: 'FEED',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Graphical representation of material requirements by service conditions',
    purpose: 'To provide clear material selection guidance for all conditions',
    scope: 'All process and utility services',
    
    detailedDescription: `Material Selection Diagrams provide graphical representation of appropriate materials based on temperature, pressure, and fluid composition. These diagrams translate the material selection philosophy into practical tools for specifying materials. They include boundaries between material types and special requirements for specific services.`,
    
    keyComponents: [
      'Temperature-pressure envelopes',
      'Material boundary curves',
      'Fluid composition effects',
      'Velocity limit curves',
      'Special service requirements',
      'Corrosion rate contours',
      'Notes and exceptions',
      'Reference conditions'
    ],
    
    deliverables: [
      'Material selection diagrams',
      'Service-specific charts',
      'Velocity limit diagrams',
      'Material compatibility matrices',
      'Application guidelines',
      'Example calculations'
    ],
    
    bestPractices: [
      'Make diagrams user-friendly',
      'Include all relevant parameters',
      'Show clear boundaries',
      'Provide adequate notes',
      'Consider upset conditions',
      'Update with project experience'
    ],
    
    commonMistakes: [
      'Over-complicated diagrams',
      'Missing service conditions',
      'Unclear boundaries',
      'Inadequate notes',
      'No velocity considerations',
      'Poor quality graphics'
    ],
    
    qualityChecklist: [
      'All services covered',
      'Boundaries clear',
      'Parameters complete',
      'Notes comprehensive',
      'Examples provided',
      'Easy to use'
    ],
    
    realWorldExamples: [
      'H2S limits: 50 ppm for CS typical',
      'CO2: Corrosion curves provided',
      'Velocity: 3-6 m/s for CS',
      'Temperature: -29°C to 425°C range'
    ],
    
    applicableStandards: [
      {
        code: 'API 571',
        title: 'Damage Mechanisms Affecting Fixed Equipment',
        organization: 'API',
        relevantSections: ['Corrosion mechanisms']
      }
    ],
    
    regulations: [
      'Material compliance requirements'
    ],
    
    softwareTools: [
      'CAD for diagram creation',
      'Corrosion prediction software',
      'Database integration tools'
    ]
  },
  
  {
    id: 'INS',
    code: 'INS',
    title: 'Insulation Specification',
    fullName: 'Thermal Insulation Specifications',
    phase: 'FEED',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Specifications for thermal insulation systems including cold and hot services',
    purpose: 'To define insulation requirements for energy conservation and personnel protection',
    scope: 'All insulated piping and equipment',
    
    detailedDescription: `The Insulation Specification defines requirements for all thermal insulation systems including hot insulation for energy conservation and personnel protection, cold insulation for condensation prevention, acoustic insulation, and fire protection. It addresses material selection, thickness calculations, installation details, and inspection requirements.`,
    
    keyComponents: [
      'Insulation material types',
      'Thickness calculation methods',
      'Hot service requirements',
      'Cold service systems',
      'Personnel protection criteria',
      'Cladding specifications',
      'Installation details',
      'CUI prevention measures'
    ],
    
    deliverables: [
      'Insulation specifications',
      'Thickness tables',
      'Material datasheets',
      'Installation procedures',
      'Typical details',
      'Inspection requirements'
    ],
    
    bestPractices: [
      'Consider CUI prevention',
      'Optimize economic thickness',
      'Standardize materials',
      'Design for maintainability',
      'Include proper sealing',
      'Consider local climate'
    ],
    
    commonMistakes: [
      'Inadequate CUI prevention',
      'Poor cold insulation design',
      'Missing vapor barriers',
      'Complex specifications',
      'Ignoring maintenance needs',
      'Poor joint details'
    ],
    
    qualityChecklist: [
      'All services covered',
      'Thicknesses optimized',
      'CUI addressed',
      'Details complete',
      'Installation practical',
      'Inspection defined'
    ],
    
    realWorldExamples: [
      'Hot: 60°C personnel protection',
      'Cold: -196°C LNG service',
      'Economic: 40-80mm typical hot',
      'Materials: PIR/PUR for cold'
    ],
    
    applicableStandards: [
      {
        code: 'ASTM C680',
        title: 'Practice for Estimate of the Heat Gain or Loss',
        organization: 'ASTM',
        relevantSections: ['Calculation methods']
      },
      {
        code: 'CINI',
        title: 'Insulation Handbook',
        organization: 'CINI',
        relevantSections: ['Design guidelines']
      }
    ],
    
    regulations: [
      'Energy efficiency requirements',
      'Personnel safety regulations'
    ],
    
    softwareTools: [
      '3E Plus for calculations',
      'Navisworks for 3D review',
      'Specification databases'
    ]
  },
  
  {
    id: 'PNT',
    code: 'PNT',
    title: 'Painting Specification',
    fullName: 'Protective Coating and Painting Specifications',
    phase: 'FEED',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Specifications for protective coatings and painting systems',
    purpose: 'To ensure adequate corrosion protection and asset preservation',
    scope: 'All carbon steel surfaces and special coating requirements',
    
    detailedDescription: `The Painting Specification defines protective coating systems for all painted surfaces based on environmental conditions and service requirements. It includes surface preparation standards, coating systems for different exposures, application requirements, and inspection criteria. Special attention is given to marine atmospheric conditions typical of LNG facilities.`,
    
    keyComponents: [
      'Environmental categories',
      'Surface preparation standards',
      'Coating system specifications',
      'Application requirements',
      'Quality control procedures',
      'Touch-up and repair methods',
      'Galvanizing specifications',
      'Fireproofing coating requirements'
    ],
    
    deliverables: [
      'Painting specifications',
      'Coating system tables',
      'Surface preparation standards',
      'Application procedures',
      'Inspection criteria',
      'Approved products list'
    ],
    
    bestPractices: [
      'Consider full service life',
      'Specify proven systems',
      'Include adequate QC',
      'Plan for maintenance',
      'Consider local conditions',
      'Standardize colors'
    ],
    
    commonMistakes: [
      'Inadequate surface preparation',
      'Wrong system selection',
      'Poor specification of DFT',
      'Missing repair procedures',
      'Ignoring compatibility',
      'Complex color schemes'
    ],
    
    qualityChecklist: [
      'All environments covered',
      'Systems proven',
      'QC requirements clear',
      'Application practical',
      'Maintenance considered',
      'Standards referenced'
    ],
    
    realWorldExamples: [
      'C5-M: Severe marine typical',
      'DFT: 250-350μm offshore',
      'Surface prep: Sa 2.5 minimum',
      'Systems: Epoxy/PU common'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 12944',
        title: 'Corrosion protection of steel structures by protective paint systems',
        organization: 'ISO',
        relevantSections: ['All parts']
      },
      {
        code: 'NORSOK M-501',
        title: 'Surface preparation and protective coating',
        organization: 'NORSOK',
        relevantSections: ['System selection']
      }
    ],
    
    regulations: [
      'Environmental VOC limits',
      'Health and safety requirements'
    ],
    
    softwareTools: [
      'Coating selection databases',
      'Inspection management systems',
      'Color coding tools'
    ]
  },
  
  {
    id: 'FPM',
    code: 'FPM',
    title: 'Fireproofing Specification',
    fullName: 'Passive Fire Protection Material Specifications',
    phase: 'FEED',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Specifications for passive fire protection materials and systems',
    purpose: 'To define fireproofing requirements based on fire risk assessment',
    scope: 'Structural steel, equipment supports, and critical equipment',
    
    detailedDescription: `The Fireproofing Specification defines passive fire protection requirements based on fire risk assessments. It covers material types, performance requirements, application methods, and extent of coverage for different fire scenarios. The specification ensures critical structures maintain integrity during fire events, allowing safe shutdown and emergency response.`,
    
    keyComponents: [
      'Fire zone definitions',
      'Protection requirements by zone',
      'Material types and properties',
      'Fire rating requirements',
      'Application specifications',
      'Extent of coverage rules',
      'Interface details',
      'Inspection and maintenance'
    ],
    
    deliverables: [
      'Fireproofing specifications',
      'Coverage drawings',
      'Material datasheets',
      'Application procedures',
      'Typical details',
      'Maintenance guidelines'
    ],
    
    bestPractices: [
      'Base on credible fire scenarios',
      'Consider jet fires not just pool',
      'Design for maintainability',
      'Include proper drainage',
      'Address interfaces clearly',
      'Plan inspection access'
    ],
    
    commonMistakes: [
      'Inadequate jet fire protection',
      'Missing critical members',
      'Poor interface details',
      'Ignoring maintenance',
      'Water accumulation issues',
      'Incomplete specifications'
    ],
    
    qualityChecklist: [
      'Fire scenarios addressed',
      'Coverage comprehensive',
      'Ratings appropriate',
      'Details complete',
      'Maintenance possible',
      'Costs optimized'
    ],
    
    realWorldExamples: [
      'Rating: H120 typical for hydrocarbons',
      'Jet fire: 2-4 hours protection',
      'Materials: Epoxy intumescent common',
      'Coverage: Per API 2218 guidelines'
    ],
    
    applicableStandards: [
      {
        code: 'API 2218',
        title: 'Fireproofing Practices in Petroleum and Petrochemical Processing Plants',
        organization: 'API',
        relevantSections: ['Coverage guidelines']
      },
      {
        code: 'UL 1709',
        title: 'Rapid Rise Fire Tests of Protection Materials',
        organization: 'UL',
        relevantSections: ['Test methods']
      }
    ],
    
    regulations: [
      'Building code requirements',
      'Insurance requirements',
      'Major hazard regulations'
    ],
    
    softwareTools: [
      'Fire modeling software',
      '3D coverage visualization',
      'Specification databases',
      'QA tracking systems'
    ]
  }
];