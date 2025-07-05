import { DeliverableKnowledge } from '@/types';

export const enhancedProcessDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HMB',
    code: 'HMB',
    title: 'Heat & Material Balance',
    fullName: 'Process Heat and Material Balance',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive energy and mass balance for all process streams and equipment',
    purpose: 'To define process stream properties and equipment duties for design and optimization',
    scope: 'All process units from feed gas through LNG product and utilities',
    
    detailedDescription: `The Heat & Material Balance (HMB) is a fundamental process engineering deliverable that quantifies all mass and energy flows throughout the facility. It defines stream compositions, flow rates, temperatures, pressures, and thermodynamic properties. The HMB forms the basis for equipment sizing, utility requirements, and process optimization. For LNG facilities, accurate modeling of cryogenic processes and refrigeration cycles is critical.`,
    
    keyComponents: [
      'Stream properties table (T, P, flow, composition)',
      'Equipment heat duties and power requirements',
      'Phase equilibrium calculations',
      'Refrigeration cycle analysis',
      'Utility consumption summary',
      'Energy efficiency metrics',
      'Material balance closure verification',
      'Operating cases (normal, turndown, startup)'
    ],
    
    deliverables: [
      'HMB simulation files',
      'Stream summary tables',
      'Equipment duty specifications',
      'Utility balance summary',
      'Energy optimization report',
      'Case study results'
    ],
    
    bestPractices: [
      'Use rigorous thermodynamic models',
      'Validate against proven designs',
      'Include all operating scenarios',
      'Consider ambient condition variations',
      'Optimize energy integration',
      'Document all assumptions clearly'
    ],
    
    commonMistakes: [
      'Oversimplified thermodynamic models',
      'Missing trace component impacts',
      'Unrealistic equipment efficiencies',
      'Ignoring pressure drop effects',
      'Poor heat integration',
      'Not closing material balance'
    ],
    
    qualityChecklist: [
      'Material balance closure <0.1%',
      'Energy balance verified',
      'Thermodynamics validated',
      'All cases simulated',
      'Equipment duties realistic',
      'Optimization completed'
    ],
    
    realWorldExamples: [
      'LNG production: 300-600 kW/ton typical',
      'Acid gas removal: 95-99% CO2 removal',
      'Dehydration: <0.1 ppmv water',
      'C3+ recovery: >95% typical'
    ],
    
    applicableStandards: [
      {
        code: 'API 14.1',
        title: 'Collecting and Handling of Natural Gas Samples',
        organization: 'API',
        relevantSections: ['Composition analysis']
      },
      {
        code: 'GPA 2145',
        title: 'Table of Physical Properties for Hydrocarbons',
        organization: 'GPA',
        relevantSections: ['Property data']
      }
    ],
    
    regulations: [
      'Environmental emission limits',
      'Product quality specifications',
      'Energy efficiency requirements'
    ],
    
    softwareTools: [
      'Aspen HYSYS',
      'ProMax',
      'UniSim Design',
      'OLGA for dynamic simulation'
    ]
  },
  
  {
    id: 'PSV_Calc',
    code: 'PSV',
    title: 'PSV Calculations',
    fullName: 'Pressure Safety Valve Sizing Calculations',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed calculations for sizing all pressure relief devices',
    purpose: 'To ensure adequate overpressure protection for all equipment and systems',
    scope: 'All pressure relief valves, rupture disks, and depressuring systems',
    
    detailedDescription: `PSV Calculations document the sizing of all pressure safety valves and relief devices throughout the facility. Each calculation considers various relief scenarios including blocked outlet, fire, thermal expansion, and control failure. For LNG facilities, special attention is given to cryogenic relief scenarios and two-phase flow conditions. These calculations ensure code compliance and safe operation.`,
    
    keyComponents: [
      'Relief scenario identification',
      'Required relief rate calculations',
      'PSV sizing for each scenario',
      'Inlet/outlet piping verification',
      'Backpressure calculations',
      'Relief system isometrics',
      'Set pressure determination',
      'Disposal system capacity check'
    ],
    
    deliverables: [
      'PSV calculation report',
      'Relief device datasheets',
      'Relief scenario matrix',
      'Flare/vent system loads',
      'Installation drawings',
      'Test procedures'
    ],
    
    bestPractices: [
      'Consider all credible scenarios',
      'Use appropriate two-phase models',
      'Verify disposal system capacity',
      'Include installation effects',
      'Document governing cases clearly',
      'Consider staggered set pressures'
    ],
    
    commonMistakes: [
      'Missing thermal relief cases',
      'Incorrect two-phase calculations',
      'Inadequate inlet/outlet piping',
      'Not checking built-up backpressure',
      'Wrong fluid properties at relief conditions',
      'Ignoring installation effects'
    ],
    
    qualityChecklist: [
      'All equipment protected',
      'Scenarios comprehensive',
      'Calculations verified',
      'Codes requirements met',
      'Installation effects included',
      'Documentation complete'
    ],
    
    realWorldExamples: [
      'Fire case: API 521 wetted area method',
      'LNG tank rollover: Critical scenario',
      'Tube rupture: 2x tube flow typical',
      'Control valve failure: CV at full open'
    ],
    
    applicableStandards: [
      {
        code: 'API 520',
        title: 'Sizing, Selection, and Installation of Pressure-relieving Devices',
        organization: 'API',
        relevantSections: ['Part I - Sizing', 'Part II - Installation']
      },
      {
        code: 'API 521',
        title: 'Pressure-relieving and Depressuring Systems',
        organization: 'API',
        relevantSections: ['Relief scenarios', 'Disposal systems']
      },
      {
        code: 'ISO 4126',
        title: 'Safety devices for protection against excessive pressure',
        organization: 'ISO',
        relevantSections: ['Safety valve requirements']
      }
    ],
    
    regulations: [
      'Pressure vessel codes',
      'Local safety regulations',
      'Environmental discharge limits'
    ],
    
    softwareTools: [
      'Aspen HYSYS Dynamics',
      'SuperChems',
      'Mach II',
      'Simsci Visual Flow'
    ]
  },
  
  {
    id: 'OPM',
    code: 'OPM',
    title: 'Operating Manual',
    fullName: 'Operating Procedures Manual',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFA',
    
    summary: 'Comprehensive operating procedures for all process systems and equipment',
    purpose: 'To provide detailed guidance for safe and efficient facility operation',
    scope: 'All operating scenarios from startup through emergency shutdown',
    
    detailedDescription: `The Operating Manual provides step-by-step procedures for all aspects of facility operation. It covers normal operations, startup, shutdown, emergency procedures, and troubleshooting guides. The manual incorporates lessons from HAZOP studies, vendor recommendations, and industry best practices. It serves as the primary reference for operator training and daily operations.`,
    
    keyComponents: [
      'System descriptions and P&ID references',
      'Normal operating procedures',
      'Startup procedures (initial and restart)',
      'Shutdown procedures (normal and emergency)',
      'Emergency response procedures',
      'Troubleshooting guides',
      'Operating parameter limits',
      'Safety precautions and PPE requirements'
    ],
    
    deliverables: [
      'Operating manual volumes',
      'Quick reference guides',
      'Emergency response cards',
      'Training materials',
      'Control room procedures',
      'Field operator rounds sheets'
    ],
    
    bestPractices: [
      'Use clear, action-oriented language',
      'Include P&ID references throughout',
      'Validate procedures during commissioning',
      'Incorporate HAZOP recommendations',
      'Regular review and updates',
      'Available in control room and field'
    ],
    
    commonMistakes: [
      'Too generic without specific steps',
      'Missing abnormal scenarios',
      'No integration with alarm response',
      'Inadequate emergency procedures',
      'Poor organization/indexing',
      'Not updated after modifications'
    ],
    
    qualityChecklist: [
      'All systems covered',
      'Procedures step-by-step',
      'Safety precautions clear',
      'References to P&IDs',
      'Emergency procedures tested',
      'Training requirements defined'
    ],
    
    realWorldExamples: [
      'Startup sequence: 24-48 hours typical',
      'Emergency shutdown: <2 minutes',
      'Cool-down rate: 50°C/hour maximum',
      'Operating limits: ±10% of design typically'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 75',
        title: 'Recommended Practice for Development of a Safety and Environmental Management Program',
        organization: 'API',
        relevantSections: ['Operating procedures']
      },
      {
        code: 'ISO 45001',
        title: 'Occupational health and safety management systems',
        organization: 'ISO',
        relevantSections: ['Operational control']
      }
    ],
    
    regulations: [
      'Process Safety Management (PSM)',
      'Major Accident Hazard regulations',
      'Operator certification requirements'
    ],
    
    softwareTools: [
      'Procedure writing software',
      'Document management systems',
      'Training management systems',
      'Operator training simulators'
    ]
  }
];

export const enhancedEquipmentDeliverables: DeliverableKnowledge[] = [
  {
    id: 'MR',
    code: 'MR',
    title: 'Material Requisitions',
    fullName: 'Equipment Material Requisitions',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFA',
    
    summary: 'Procurement specifications for all equipment including technical and commercial requirements',
    purpose: 'To define complete requirements for equipment procurement and vendor selection',
    scope: 'All purchased equipment including packages, vessels, and rotating equipment',
    
    detailedDescription: `Material Requisitions (MRs) are comprehensive procurement documents that combine technical specifications with commercial requirements. They include detailed equipment specifications, required vendor documentation, inspection and testing requirements, delivery constraints, and spare parts requirements. MRs form the technical basis of purchase orders and are critical for obtaining comparable bids.`,
    
    keyComponents: [
      'Technical specifications and datasheets',
      'Performance requirements and guarantees',
      'Materials of construction requirements',
      'Inspection and testing requirements (ITR)',
      'Documentation requirements (VDR)',
      'Spare parts and special tools',
      'Delivery and preservation requirements',
      'Deviation and exception handling'
    ],
    
    deliverables: [
      'Material requisition packages',
      'Technical bid tabulations',
      'Vendor clarification records',
      'Technical bid evaluations',
      'Approved vendor lists',
      'Purchase order attachments'
    ],
    
    bestPractices: [
      'Include all technical requirements upfront',
      'Clearly define performance guarantees',
      'Specify documentation requirements in detail',
      'Include commissioning spare requirements',
      'Define quality requirements clearly',
      'Allow for standard vendor offerings where possible'
    ],
    
    commonMistakes: [
      'Incomplete technical specifications',
      'Missing documentation requirements',
      'Unrealistic delivery requirements',
      'Over-specification driving cost',
      'Inadequate spare parts definition',
      'Poor definition of interfaces'
    ],
    
    qualityChecklist: [
      'All technical requirements included',
      'Codes and standards referenced',
      'ITP requirements defined',
      'Documentation list complete',
      'Interfaces clearly defined',
      'Commercial terms addressed'
    ],
    
    realWorldExamples: [
      'Major equipment: 50-200 page MR typical',
      'Package units: Include full P&IDs',
      'Rotating equipment: API datasheets mandatory',
      'Vessels: Include all internals design'
    ],
    
    applicableStandards: [
      {
        code: 'API 617',
        title: 'Axial and Centrifugal Compressors',
        organization: 'API',
        relevantSections: ['Procurement requirements']
      },
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Material requirements']
      }
    ],
    
    regulations: [
      'Pressure Equipment Directive (PED)',
      'ATEX requirements',
      'Local regulatory requirements'
    ],
    
    softwareTools: [
      'SAP for requisition management',
      'Ariba for procurement',
      'SharePoint for document control',
      'Equipment databases'
    ]
  },
  
  {
    id: 'VDS',
    code: 'VDS',
    title: 'Vendor Drawings',
    fullName: 'Vendor Documentation Submittal',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFC',
    
    summary: 'Certified vendor drawings and technical documentation for all equipment',
    purpose: 'To provide actual equipment details for design verification and construction',
    scope: 'All vendor-supplied equipment drawings, data, and certifications',
    
    detailedDescription: `Vendor Drawings and Documentation include all technical information provided by equipment manufacturers after purchase order award. This includes certified dimensional drawings, P&IDs for packages, wiring diagrams, performance curves, and material certifications. These documents are critical for verifying design interfaces, planning installation, and supporting operations.`,
    
    keyComponents: [
      'Certified general arrangement drawings',
      'Foundation and anchor bolt plans',
      'Nozzle orientation drawings',
      'Package P&IDs and electrical diagrams',
      'Performance curves and test data',
      'Material test certificates',
      'Operating and maintenance manuals',
      'Spare parts lists and drawings'
    ],
    
    deliverables: [
      'Vendor drawing packages',
      'As-built documentation',
      'Test certificates',
      'IOM manuals',
      'Spare parts catalogs',
      'Training materials'
    ],
    
    bestPractices: [
      'Review drawings promptly upon receipt',
      'Verify interfaces with design',
      'Check for constructability issues',
      'Ensure completeness before approval',
      'Maintain revision control',
      'Distribute to all stakeholders'
    ],
    
    commonMistakes: [
      'Delayed review causing construction issues',
      'Not checking interface dimensions',
      'Missing as-built updates',
      'Poor revision control',
      'Incomplete documentation packages',
      'No verification of requirements'
    ],
    
    qualityChecklist: [
      'All required documents received',
      'Dimensions verified against design',
      'Certifications complete',
      'As-built status confirmed',
      'Electronic copies provided',
      'Distribution completed'
    ],
    
    realWorldExamples: [
      'Compressor package: 100+ drawings typical',
      'Vessel: GA, internals, support details',
      'Critical dimensions: ±5mm tolerance',
      'Documentation: 6-8 weeks after PO typical'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 10628-2',
        title: 'Diagrams for the chemical and petrochemical industry',
        organization: 'ISO',
        relevantSections: ['P&ID requirements']
      }
    ],
    
    regulations: [
      'CE marking requirements',
      'Pressure vessel documentation',
      'Electrical certification requirements'
    ],
    
    softwareTools: [
      'Document management systems',
      'CAD viewers',
      'PDF markup tools',
      'Model integration software'
    ]
  },
  
  {
    id: 'TBE',
    code: 'TBE',
    title: 'Technical Bid Evaluation',
    fullName: 'Technical Bid Evaluation and Recommendation',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    
    summary: 'Technical evaluation of vendor proposals for equipment selection',
    purpose: 'To select best technical solution considering performance, reliability, and lifecycle cost',
    scope: 'All major equipment and package bids',
    
    detailedDescription: `Technical Bid Evaluation (TBE) provides systematic comparison of vendor proposals against technical requirements. It evaluates compliance with specifications, performance capabilities, design features, and lifecycle considerations. The TBE includes technical scoring, risk assessment, and recommendations to support vendor selection. For LNG facilities, proven technology and reliability are paramount.`,
    
    keyComponents: [
      'Compliance matrix against specifications',
      'Performance comparison tables',
      'Technical feature evaluation',
      'Reliability and reference checks',
      'Lifecycle cost analysis',
      'Technical risk assessment',
      'Deviation and exception analysis',
      'Recommendation with justification'
    ],
    
    deliverables: [
      'Bid tabulation matrices',
      'Technical evaluation report',
      'Deviation lists',
      'Clarification records',
      'Reference check reports',
      'Recommendation memo'
    ],
    
    bestPractices: [
      'Use consistent evaluation criteria',
      'Weight factors based on criticality',
      'Include total lifecycle costs',
      'Verify vendor references thoroughly',
      'Document all clarifications',
      'Consider standardization benefits'
    ],
    
    commonMistakes: [
      'Focusing only on initial cost',
      'Inadequate reference checking',
      'Ignoring lifecycle costs',
      'Not considering spare parts availability',
      'Missing technical risks',
      'Biased evaluation criteria'
    ],
    
    qualityChecklist: [
      'All bids evaluated equally',
      'Evaluation criteria predefined',
      'Technical compliance verified',
      'References checked',
      'Risks identified',
      'Recommendation justified'
    ],
    
    realWorldExamples: [
      'Evaluation factors: Technical 40%, Commercial 30%, Schedule 20%, Risk 10%',
      'Reference checks: Minimum 3 similar installations',
      'Lifecycle: 20-25 years for major equipment',
      'Standardization: Can reduce spares 30%'
    ],
    
    applicableStandards: [
      {
        code: 'Company procurement procedures',
        title: 'Standard procurement practices',
        organization: 'Internal',
        relevantSections: ['Bid evaluation']
      }
    ],
    
    regulations: [
      'Fair procurement regulations',
      'Anti-corruption compliance',
      'Export control considerations'
    ],
    
    softwareTools: [
      'Excel for bid tabulation',
      'Procurement systems',
      'Technical evaluation software',
      'Risk assessment tools'
    ]
  }
];

export const enhancedPipingDeliverables: DeliverableKnowledge[] = [
  {
    id: 'GAD',
    code: 'GAD',
    title: 'General Arrangement Drawings',
    fullName: '3D Model General Arrangement Drawings',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    
    summary: '3D model-extracted arrangement drawings showing equipment and piping layout',
    purpose: 'To communicate spatial arrangement for construction and operations planning',
    scope: 'All process areas showing equipment, piping, structures, and access',
    
    detailedDescription: `General Arrangement Drawings (GADs) are extracted from the 3D model and show the physical arrangement of all equipment, piping, structures, and access ways. These drawings are essential for construction planning, crane studies, and operational access verification. GADs include plan views at multiple elevations and sections through congested areas.`,
    
    keyComponents: [
      'Equipment arrangement with tags',
      'Major piping routes',
      'Structural steel framework',
      'Access platforms and ladders',
      'Crane access and maintenance space',
      'Underground piping and foundations',
      'Key dimensions and elevations',
      'Area classification boundaries'
    ],
    
    deliverables: [
      'Plan views at key elevations',
      'Section views through equipment',
      'Isometric overview drawings',
      'Underground piping plans',
      'Crane study drawings',
      'Clash-free 3D model'
    ],
    
    bestPractices: [
      'Extract after model review completion',
      'Show only essential information clearly',
      'Include human figures for scale',
      'Verify maintenance access',
      'Coordinate with construction sequence',
      'Update after major changes'
    ],
    
    commonMistakes: [
      'Too much detail obscuring clarity',
      'Missing key dimensions',
      'Not showing underground elements',
      'Poor choice of section locations',
      'Outdated from 3D model',
      'Inadequate access verification'
    ],
    
    qualityChecklist: [
      'Model reviews completed',
      'All equipment shown',
      'Access routes clear',
      'Dimensions adequate',
      'Sections informative',
      'Coordination verified'
    ],
    
    realWorldExamples: [
      'Plan views: Every 3-5m elevation typically',
      'Sections: Through major equipment',
      'Scale: 1:100 or 1:50 for details',
      'Model accuracy: ±25mm typical'
    ],
    
    applicableStandards: [
      {
        code: 'PIP PNE00001',
        title: 'Piping General Arrangement Drawings',
        organization: 'PIP',
        relevantSections: ['Drawing requirements']
      }
    ],
    
    regulations: [
      'Local building codes for access',
      'Safety regulations for egress'
    ],
    
    softwareTools: [
      'PDMS/E3D',
      'Navisworks',
      'SmartPlant 3D',
      'AutoCAD for 2D extraction'
    ]
  },
  
  {
    id: 'MTO',
    code: 'MTO',
    title: 'Material Take-Off',
    fullName: 'Piping Material Take-Off',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFA',
    
    summary: 'Comprehensive quantification of all piping materials for procurement',
    purpose: 'To provide accurate material quantities for procurement and cost control',
    scope: 'All piping, fittings, flanges, gaskets, bolts, and supports',
    
    detailedDescription: `The Material Take-Off (MTO) extracts quantities of all piping materials from the 3D model and isometrics. It provides detailed lists by material class, size, and schedule for procurement packaging. The MTO includes bulk materials (gaskets, bolts), special items, and factors for waste and testing. Accuracy is critical for cost control and avoiding material shortages.`,
    
    keyComponents: [
      'Pipe quantities by specification',
      'Fitting counts by type and size',
      'Flange and gasket quantities',
      'Bolt and stud bolt lists',
      'Valve quantities from P&IDs',
      'Support material estimates',
      'Special item identification',
      'Waste and contingency factors'
    ],
    
    deliverables: [
      'MTO reports by area',
      'MTO by material class',
      'Bulk material summaries',
      'Special items list',
      'Procurement packages',
      'Progress tracking reports'
    ],
    
    bestPractices: [
      'Validate model completeness first',
      'Include appropriate contingency',
      'Separate field run from shop fabricated',
      'Consider testing requirements',
      'Package by delivery priority',
      'Regular updates as design progresses'
    ],
    
    commonMistakes: [
      'Premature MTO from incomplete model',
      'Missing small bore piping',
      'Inadequate waste factors',
      'Wrong material specifications',
      'Missing special items',
      'No tracking of changes'
    ],
    
    qualityChecklist: [
      'Model status verified',
      'All line classes included',
      'Quantities reasonable',
      'Waste factors applied',
      'Special items identified',
      'Reconciled with estimates'
    ],
    
    realWorldExamples: [
      'Waste factors: 5-10% for pipe, 10-15% for fittings',
      'Small bore: Can be 30% of total footage',
      'Bolting: 2.5 bolts per inch of flange diameter',
      'Updates: Monthly during detailed design'
    ],
    
    applicableStandards: [
      {
        code: 'PIP PCSIP001',
        title: 'Piping Material Take-Off',
        organization: 'PIP',
        relevantSections: ['MTO procedures']
      }
    ],
    
    regulations: [
      'Import/export requirements',
      'Material certification requirements'
    ],
    
    softwareTools: [
      'PDMS/E3D MTO module',
      'SmartPlant Materials',
      'COMOS MTO',
      'Excel for summaries'
    ]
  },
  
  {
    id: 'SPO',
    code: 'SPO',
    title: 'Spool Drawings',
    fullName: 'Piping Fabrication Spool Drawings',
    phase: 'DD',
    discipline: 'Piping',
    issuanceStatus: 'IFC',
    
    summary: 'Shop fabrication drawings for prefabricated pipe spools',
    purpose: 'To provide detailed fabrication information for shop manufacturing',
    scope: 'All shop-fabricated piping spools',
    
    detailedDescription: `Spool Drawings break down piping isometrics into shop-fabricatable pieces based on shipping constraints, welding positions, and field assembly requirements. Each spool drawing shows exact dimensions, weld details, material specifications, and QC requirements. These drawings are used directly by fabrication shops and must account for fit-up tolerances and shipping limitations.`,
    
    keyComponents: [
      'Spool piece dimensions and geometry',
      'Cut lengths for all components',
      'Weld identification and details',
      'Material heat numbers',
      'Shop vs field weld designation',
      'NDT requirements marking',
      'Shipping and handling points',
      'Match marks for field assembly'
    ],
    
    deliverables: [
      'Individual spool drawings',
      'Spool lists by area',
      'Fabrication schedules',
      'NDT plans',
      'Shipping lists',
      'Field erection drawings'
    ],
    
    bestPractices: [
      'Optimize spool breaks for shipping',
      'Minimize field welds where possible',
      'Consider erection sequence',
      'Clear marking system for tracking',
      'Include handling attachments',
      'Verify against isometrics'
    ],
    
    commonMistakes: [
      'Spools too large for transport',
      'Difficult field weld positions',
      'Missing material traceability',
      'Poor match marking system',
      'Inadequate dimensional tolerance',
      'Not considering galvanizing'
    ],
    
    qualityChecklist: [
      'All dimensions verified',
      'Shipping constraints met',
      'Field welds accessible',
      'NDT requirements clear',
      'Materials identified',
      'QC points marked'
    ],
    
    realWorldExamples: [
      'Maximum spool size: 12m x 3m x 3m typical',
      'Spool weight: <5 tons for manual handling',
      'Shop welds: 70-80% typical target',
      'Dimensional tolerance: ±3mm typical'
    ],
    
    applicableStandards: [
      {
        code: 'AWS D1.1',
        title: 'Structural Welding Code',
        organization: 'AWS',
        relevantSections: ['Fabrication requirements']
      },
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Fabrication and assembly']
      }
    ],
    
    regulations: [
      'Welding qualification requirements',
      'Material traceability regulations',
      'Transportation regulations'
    ],
    
    softwareTools: [
      'Spoolgen',
      'ISOGEN',
      'AutoCAD Plant 3D',
      'Fabrication management software'
    ]
  }
];