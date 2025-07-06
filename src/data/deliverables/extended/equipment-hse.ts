import { DeliverableKnowledge } from '@/types';

export const equipmentDeliverables: DeliverableKnowledge[] = [
  {
    id: 'EDB',
    code: 'EDB',
    title: 'Equipment Design Basis',
    fullName: 'Equipment Design Basis and Philosophy',
    phase: 'FEED',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    
    summary: 'Master document defining design criteria and standards for all equipment',
    purpose: 'To establish consistent equipment design requirements and selection criteria',
    scope: 'All rotating, static, and packaged equipment for the LNG facility',
    
    detailedDescription: `The Equipment Design Basis establishes fundamental design criteria for all mechanical equipment including rotating machinery, vessels, heat exchangers, and packaged systems. It defines design margins, material requirements, spare philosophy, standardization requirements, and vendor interface requirements. This document ensures consistency in equipment specification and procurement across the project.`,
    
    keyComponents: [
      'Equipment design codes and standards',
      'Design margin philosophy',
      'Material selection criteria',
      'Spare equipment philosophy',
      'Standardization requirements',
      'Vendor data requirements',
      'Testing and inspection requirements',
      'Preservation and storage requirements'
    ],
    
    deliverables: [
      'Equipment design basis document',
      'Equipment standards matrix',
      'Spare parts philosophy',
      'Vendor data requirements list',
      'Equipment preservation procedures',
      'Standard specifications index'
    ],
    
    bestPractices: [
      'Standardize equipment where possible',
      'Consider lifecycle costs not just capital',
      'Define clear spare philosophy early',
      'Include lessons learned from similar projects',
      'Consider local maintenance capabilities',
      'Plan for long lead equipment early'
    ],
    
    commonMistakes: [
      'Insufficient design margins',
      'Over-specification increasing costs',
      'Ignoring local maintenance capabilities',
      'Inadequate spare parts strategy',
      'Missing criticality assessments',
      'Poor vendor data requirements'
    ],
    
    qualityChecklist: [
      'All equipment types covered',
      'Standards appropriate for service',
      'Margins clearly defined',
      'Spare philosophy practical',
      'Vendor requirements complete',
      'Maintenance strategy considered'
    ],
    
    realWorldExamples: [
      'API equipment typically for hydrocarbon service',
      'Design margins: 10% flow, 10% head typical',
      'Spare philosophy: N+1 for critical, shared spares for others',
      'Standardization: 2-3 vendors maximum per equipment type'
    ],
    
    applicableStandards: [
      {
        code: 'API 686',
        title: 'Recommended Practice for Machinery Installation',
        organization: 'API',
        relevantSections: ['General requirements']
      }
    ],
    
    regulations: [
      'Pressure equipment directives',
      'ATEX for hazardous areas',
      'Local machinery safety regulations'
    ],
    
    softwareTools: [
      'Equipment database systems',
      'Specification writing software',
      'Document management systems'
    ]
  },
  
  {
    id: 'EDS',
    code: 'EDS',
    title: 'Equipment Datasheets',
    fullName: 'Equipment Process and Mechanical Datasheets',
    phase: 'FEED',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed specification sheets for each piece of equipment defining all requirements',
    purpose: 'To specify equipment requirements for procurement and detailed design',
    scope: 'Individual datasheets for all tagged equipment items',
    
    detailedDescription: `Equipment Datasheets provide comprehensive technical specifications for every piece of equipment. They include process conditions, mechanical design requirements, material specifications, and special requirements. These datasheets form the basis for vendor quotations and are continuously updated through the project lifecycle with vendor information.`,
    
    keyComponents: [
      'Process design conditions',
      'Mechanical design parameters',
      'Material specifications',
      'Performance requirements',
      'Utility connections',
      'Instrumentation requirements',
      'Special design features',
      'Testing and inspection requirements'
    ],
    
    deliverables: [
      'Individual equipment datasheets',
      'Datasheet index and register',
      'Process/mechanical split sheets',
      'Vendor data incorporation',
      'Datasheet revision log',
      'Critical parameter summary'
    ],
    
    bestPractices: [
      'Use industry standard datasheet formats',
      'Clearly distinguish normal/design/test conditions',
      'Include all interface requirements',
      'Specify performance tolerances clearly',
      'Consider future operating scenarios',
      'Review with operations personnel'
    ],
    
    commonMistakes: [
      'Incomplete process conditions',
      'Missing utility requirements',
      'Unclear performance criteria',
      'Inadequate material specifications',
      'Conflicting requirements',
      'Not updating with vendor data'
    ],
    
    qualityChecklist: [
      'All process conditions defined',
      'Materials suitable for service',
      'Interfaces clearly specified',
      'Performance requirements measurable',
      'Standards referenced correctly',
      'Future conditions considered'
    ],
    
    realWorldExamples: [
      'Vessel datasheets per ASME/PD-1000',
      'Pump datasheets per API 610',
      'Compressor datasheets per API 617/618',
      'Heat exchanger datasheets per TEMA'
    ],
    
    applicableStandards: [
      {
        code: 'API 610',
        title: 'Centrifugal Pumps for Petroleum, Petrochemical and Natural Gas Industries',
        organization: 'API',
        relevantSections: ['Datasheet requirements']
      },
      {
        code: 'ASME Section VIII',
        title: 'Pressure Vessels',
        organization: 'ASME',
        relevantSections: ['Design requirements']
      }
    ],
    
    regulations: [
      'Pressure equipment directives',
      'Equipment safety regulations'
    ],
    
    softwareTools: [
      'Datasheet generation software',
      'Process simulation for conditions',
      'Equipment sizing programs'
    ]
  },
  
  {
    id: 'MTR',
    code: 'MTR',
    title: 'Material Requisitions',
    fullName: 'Equipment Material Requisitions',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFA',
    
    summary: 'Complete procurement packages for equipment including all technical requirements',
    purpose: 'To provide comprehensive documentation for equipment procurement',
    scope: 'All purchased equipment requiring formal procurement',
    
    detailedDescription: `Material Requisitions compile all technical requirements for equipment procurement into comprehensive packages. They include datasheets, specifications, drawings, inspection requirements, and commercial terms. These documents enable vendors to provide accurate quotations and form part of the purchase order technical requirements.`,
    
    keyComponents: [
      'Equipment datasheets (final)',
      'General specifications',
      'Special requirements',
      'Inspection and testing plans',
      'Documentation requirements',
      'Spare parts requirements',
      'Delivery requirements',
      'Bid evaluation criteria'
    ],
    
    deliverables: [
      'Material requisition packages',
      'Requisition cover sheets',
      'Technical bid evaluation criteria',
      'Vendor document requirements',
      'Inspection requirements',
      'Expedition requirements'
    ],
    
    bestPractices: [
      'Include all technical requirements upfront',
      'Define clear evaluation criteria',
      'Specify documentation in detail',
      'Include preservation requirements',
      'Consider logistics constraints',
      'Allow adequate vendor response time'
    ],
    
    commonMistakes: [
      'Incomplete technical requirements',
      'Missing inspection requirements',
      'Unclear evaluation criteria',
      'Inadequate delivery specifications',
      'Missing spare parts definition',
      'Poor quality requirements'
    ],
    
    qualityChecklist: [
      'All technical docs included',
      'Commercial terms clear',
      'Inspection requirements defined',
      'Documentation list complete',
      'Delivery requirements practical',
      'Evaluation criteria objective'
    ],
    
    realWorldExamples: [
      'Major equipment: 6-8 weeks bid time typical',
      'Long lead items: Order 18-24 months before need',
      'Critical spares: Include in main order',
      'Documentation: 20-30 documents typical per major item'
    ],
    
    applicableStandards: [
      {
        code: 'API Q1',
        title: 'Quality Management System Requirements',
        organization: 'API',
        relevantSections: ['Procurement controls']
      }
    ],
    
    regulations: [
      'Import/export regulations',
      'Quality assurance requirements'
    ],
    
    softwareTools: [
      'Procurement management systems',
      'Vendor document systems',
      'Technical bid evaluation tools'
    ]
  },
  
  {
    id: 'ELS',
    code: 'ELS',
    title: 'Equipment List',
    fullName: 'Master Equipment List',
    phase: 'FEED',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive list of all equipment with key parameters and status tracking',
    purpose: 'To provide single source register of all project equipment',
    scope: 'All tagged equipment items from major vessels to small pumps',
    
    detailedDescription: `The Equipment List is the master register of all project equipment, providing a single source of truth for equipment data. It includes tag numbers, descriptions, key process parameters, materials, weights, and status tracking throughout the project lifecycle. This living document is crucial for project management, procurement tracking, and interface coordination.`,
    
    keyComponents: [
      'Equipment tag numbers',
      'Equipment descriptions',
      'Key process parameters',
      'Design codes and materials',
      'Preliminary weights and sizes',
      'P&ID references',
      'Criticality classifications',
      'Procurement status tracking'
    ],
    
    deliverables: [
      'Master equipment list',
      'Equipment count summaries',
      'Critical equipment register',
      'Long lead item list',
      'Equipment status reports',
      'Interface with other registers'
    ],
    
    bestPractices: [
      'Establish tag numbering system early',
      'Include all equipment even if minor',
      'Regular updates as design progresses',
      'Link to other project databases',
      'Track changes rigorously',
      'Include equipment criticality'
    ],
    
    commonMistakes: [
      'Missing minor equipment items',
      'Inconsistent tag numbering',
      'Not updating regularly',
      'Poor change control',
      'Missing interface equipment',
      'Inadequate parameter tracking'
    ],
    
    qualityChecklist: [
      'All P&ID equipment captured',
      'Tag numbers unique and consistent',
      'Key parameters included',
      'Status tracking functional',
      'Links to other systems working',
      'Regular update process defined'
    ],
    
    realWorldExamples: [
      'Typical LNG plant: 500-1000 equipment items',
      'Major equipment: 10-15% of total count',
      'Tag format: XX-YYY-9999 common',
      'Updates: Weekly during detail design'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-95',
        title: 'Enterprise-Control System Integration',
        organization: 'ISA',
        relevantSections: ['Equipment hierarchy models']
      }
    ],
    
    regulations: [
      'Asset registration requirements',
      'Safety critical equipment tracking'
    ],
    
    softwareTools: [
      'Equipment database systems',
      'Excel with macros',
      'Integration with 3D model',
      'Procurement tracking systems'
    ]
  },
  
  {
    id: 'VDR',
    code: 'VDR',
    title: 'Vendor Document Review',
    fullName: 'Vendor Document Review and Approval',
    phase: 'DD',
    discipline: 'Equipment',
    issuanceStatus: 'IFA',
    
    summary: 'Review and approval of vendor-submitted technical documentation',
    purpose: 'To ensure vendor designs meet project requirements before manufacture',
    scope: 'All vendor drawings, calculations, and technical documents',
    
    detailedDescription: `Vendor Document Review encompasses the systematic review of all technical documentation submitted by equipment vendors. This includes drawings, calculations, test procedures, and quality documentation. The review ensures compliance with project specifications, identifies issues before manufacturing begins, and captures vendor information for incorporation into project deliverables.`,
    
    keyComponents: [
      'Vendor drawing review',
      'Calculation verification',
      'Material certification review',
      'Test procedure approval',
      'Quality documentation review',
      'Interface verification',
      'Code compliance check',
      'Documentation completeness'
    ],
    
    deliverables: [
      'Vendor document register',
      'Review comment sheets',
      'Approved vendor drawings',
      'Technical query responses',
      'Non-conformance reports',
      'Final documentation packages'
    ],
    
    bestPractices: [
      'Establish clear review timelines',
      'Use standard comment formats',
      'Focus on critical items first',
      'Coordinate multi-discipline reviews',
      'Track all changes and queries',
      'Maintain revision control strictly'
    ],
    
    commonMistakes: [
      'Delayed reviews impacting schedule',
      'Unclear or excessive comments',
      'Missing interface verifications',
      'Poor revision control',
      'Not capturing key information',
      'Inadequate technical checking'
    ],
    
    qualityChecklist: [
      'All required documents received',
      'Reviews completed on schedule',
      'Comments clear and justified',
      'Interfaces verified',
      'Compliance confirmed',
      'Information captured for project'
    ],
    
    realWorldExamples: [
      'Review time: 2-3 weeks typical',
      'Major equipment: 50-100 documents',
      'Comment cycles: Usually 2-3 maximum',
      'Critical items: Expedited review process'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 10005',
        title: 'Quality management — Guidelines for quality plans',
        organization: 'ISO',
        relevantSections: ['Document control requirements']
      }
    ],
    
    regulations: [
      'Regulatory approval requirements',
      'Quality system compliance'
    ],
    
    softwareTools: [
      'Document management systems',
      'Review workflow tools',
      'CAD review software',
      'Comment tracking databases'
    ]
  }
];

export const hseDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HSP',
    code: 'HSP',
    title: 'HSE Philosophy',
    fullName: 'Health, Safety and Environmental Philosophy',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Overarching document defining HSE principles, objectives, and management approach',
    purpose: 'To establish HSE expectations and framework for all project activities',
    scope: 'All project phases from design through operations',
    
    detailedDescription: `The HSE Philosophy establishes the fundamental principles and commitments for managing health, safety, and environmental aspects throughout the project lifecycle. It defines the HSE management system framework, key performance indicators, and the approach to achieving world-class HSE performance. This document guides all HSE-related decisions and activities.`,
    
    keyComponents: [
      'HSE vision and objectives',
      'HSE management system framework',
      'Roles and responsibilities',
      'Risk management approach',
      'Performance standards and KPIs',
      'Incident management philosophy',
      'Environmental protection principles',
      'Emergency response framework'
    ],
    
    deliverables: [
      'HSE philosophy document',
      'HSE management system outline',
      'KPI definitions and targets',
      'HSE organization chart',
      'Interface agreements',
      'Training requirements matrix'
    ],
    
    bestPractices: [
      'Align with corporate HSE policies',
      'Set challenging but achievable targets',
      'Ensure leadership commitment visible',
      'Include contractor management approach',
      'Consider full project lifecycle',
      'Make it practical and implementable'
    ],
    
    commonMistakes: [
      'Generic statements without specifics',
      'Unrealistic zero-incident targets',
      'Missing contractor requirements',
      'No clear accountability',
      'Ignoring operational phase',
      'Too complex for implementation'
    ],
    
    qualityChecklist: [
      'Clear measurable objectives',
      'Roles and responsibilities defined',
      'Risk approach comprehensive',
      'Standards referenced correctly',
      'Implementation plan included',
      'Management commitment evident'
    ],
    
    realWorldExamples: [
      'Target: <0.2 TRIR typical for LNG projects',
      'Environmental: Zero significant spills',
      'Process safety: Tier 1/2 incident targets',
      'Leading indicators: 10-15 typically tracked'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 45001',
        title: 'Occupational health and safety management systems',
        organization: 'ISO',
        relevantSections: ['Leadership and commitment']
      },
      {
        code: 'ISO 14001',
        title: 'Environmental management systems',
        organization: 'ISO',
        relevantSections: ['Environmental policy']
      }
    ],
    
    regulations: [
      'Local HSE regulations',
      'International maritime requirements',
      'IFC Performance Standards'
    ],
    
    softwareTools: [
      'HSE management platforms',
      'Document control systems',
      'Training management systems'
    ]
  },
  
  {
    id: 'HSE-DBS',
    code: 'HSE-DBS',
    title: 'HSE Design Basis',
    fullName: 'HSE Design Basis and Requirements',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Technical HSE requirements to be incorporated into facility design',
    purpose: 'To ensure inherent safety and environmental protection in design',
    scope: 'All design disciplines and facility areas',
    
    detailedDescription: `The HSE Design Basis translates HSE philosophy into specific technical requirements for facility design. It covers safety systems, environmental controls, occupational health provisions, and emergency response facilities. This document ensures HSE considerations are embedded in the design rather than added as afterthoughts, following hierarchy of controls principles.`,
    
    keyComponents: [
      'Inherent safety requirements',
      'Safety system design criteria',
      'Fire protection requirements',
      'Environmental design criteria',
      'Occupational health standards',
      'Emergency facilities requirements',
      'Security design provisions',
      'Human factors requirements'
    ],
    
    deliverables: [
      'HSE design basis document',
      'Safety critical element register',
      'Design standard references',
      'HSE design checklist',
      'Facility siting requirements',
      'Emergency response infrastructure'
    ],
    
    bestPractices: [
      'Apply hierarchy of controls rigorously',
      'Consider human factors early',
      'Design for emergency scenarios',
      'Include security by design',
      'Consider construction safety',
      'Plan for future modifications'
    ],
    
    commonMistakes: [
      'Over-reliance on procedural controls',
      'Missing human factors considerations',
      'Inadequate emergency provisions',
      'Poor integration with operations',
      'Ignoring construction phase risks',
      'Insufficient maintenance access'
    ],
    
    qualityChecklist: [
      'Inherent safety maximized',
      'All hazards addressed',
      'Standards correctly applied',
      'Emergency scenarios covered',
      'Constructability considered',
      'Operations input included'
    ],
    
    realWorldExamples: [
      'Blast zones: Based on explosion studies',
      'Escape routes: Two independent paths minimum',
      'Control room: Blast resistant design common',
      'F&G detection: 90% coverage target in process areas'
    ],
    
    applicableStandards: [
      {
        code: 'NFPA 59A',
        title: 'Standard for the Production, Storage, and Handling of LNG',
        organization: 'NFPA',
        relevantSections: ['Safety systems design']
      },
      {
        code: 'API RP 753',
        title: 'Management of Hazards Associated with Location of Process Plant Buildings',
        organization: 'API',
        relevantSections: ['Facility siting']
      }
    ],
    
    regulations: [
      'COMAH/Seveso requirements',
      'EPA regulations',
      'OSHA standards'
    ],
    
    softwareTools: [
      'Risk assessment software',
      'Fire & gas mapping tools',
      '3D visualization for reviews',
      'Human factors assessment tools'
    ]
  },
  
  {
    id: 'HAZID',
    code: 'HAZID',
    title: 'HAZID Study Report',
    fullName: 'Hazard Identification Study Report',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Systematic identification of major hazards in the early design phase',
    purpose: 'To identify and assess major accident hazards early for design decisions',
    scope: 'Complete facility including marine operations for GBS',
    
    detailedDescription: `The HAZID Study systematically identifies potential major accident hazards at the conceptual design stage. Using a structured workshop approach with multidisciplinary teams, it examines all aspects of the facility to identify hazards that could lead to major accidents. The study influences fundamental design decisions like layout, inherent safety measures, and major risk reduction strategies.`,
    
    keyComponents: [
      'Workshop methodology',
      'Hazard identification checklists',
      'Major accident hazard scenarios',
      'Risk ranking matrices',
      'Safeguard identification',
      'Action items and recommendations',
      'Residual risk assessment',
      'Design change requirements'
    ],
    
    deliverables: [
      'HAZID report',
      'Hazard register',
      'Risk matrices',
      'Action tracking list',
      'Design impact summary',
      'Workshop minutes'
    ],
    
    bestPractices: [
      'Include experienced facilitator',
      'Ensure right expertise in workshop',
      'Use structured methodology',
      'Focus on major accident hazards',
      'Link findings to design decisions',
      'Track actions to closure'
    ],
    
    commonMistakes: [
      'Too detailed for design stage',
      'Missing key disciplines',
      'Poor action descriptions',
      'No risk ranking consistency',
      'Delayed report issuance',
      'Not influencing design'
    ],
    
    qualityChecklist: [
      'All facility areas covered',
      'Major hazards identified',
      'Risks appropriately ranked',
      'Actions clear and owned',
      'Design impacts documented',
      'Close-out plan defined'
    ],
    
    realWorldExamples: [
      'Duration: 3-5 days typical for LNG facility',
      'Team size: 10-15 participants',
      'Actions: 50-150 typical',
      'Major hazards: 20-30 scenarios typical'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 17776',
        title: 'Petroleum and natural gas industries — Offshore production installations — Hazard identification',
        organization: 'ISO',
        relevantSections: ['HAZID methodology']
      }
    ],
    
    regulations: [
      'Major hazard regulations',
      'Environmental impact requirements'
    ],
    
    softwareTools: [
      'HAZID recording software',
      'Risk matrix tools',
      'Action tracking systems'
    ]
  },
  
  {
    id: 'HAZOP',
    code: 'HAZOP',
    title: 'HAZOP Study Report',
    fullName: 'Hazard and Operability Study Report',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed systematic review of process hazards using P&IDs',
    purpose: 'To identify process hazards and operability issues in the design',
    scope: 'All process systems shown on P&IDs',
    
    detailedDescription: `The HAZOP Study is a systematic examination of process design to identify potential hazards and operability problems. Using a structured methodology with guide words and process parameters, multidisciplinary teams review each P&ID line-by-line. The study identifies required safeguards, generates safety instrumented functions, and ensures the design can be operated safely.`,
    
    keyComponents: [
      'Node selection and definition',
      'Parameter and guide word application',
      'Deviation scenarios',
      'Cause and consequence analysis',
      'Safeguard identification',
      'Recommendations and actions',
      'SIL determination requirements',
      'Operability issues'
    ],
    
    deliverables: [
      'HAZOP study report',
      'HAZOP worksheets',
      'Action register',
      'SIF register',
      'P&ID markups',
      'Design change register'
    ],
    
    bestPractices: [
      'Use experienced independent facilitator',
      'Ensure P&IDs are sufficiently developed',
      'Include operations representatives',
      'Apply methodology consistently',
      'Focus on credible scenarios',
      'Document assumptions clearly'
    ],
    
    commonMistakes: [
      'Starting with immature P&IDs',
      'Rushing through nodes',
      'Poor action descriptions',
      'Missing operability issues',
      'Inconsistent risk assessment',
      'Not closing actions'
    ],
    
    qualityChecklist: [
      'All P&IDs reviewed',
      'Nodes properly defined',
      'Guide words systematically applied',
      'Actions clear and assigned',
      'SIFs identified',
      'Report issued timely'
    ],
    
    realWorldExamples: [
      'Duration: 4-6 weeks for LNG facility',
      'Nodes: 200-400 typical',
      'Actions: 500-1000 common',
      'SIFs identified: 50-100 typical'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61882',
        title: 'Hazard and operability studies (HAZOP studies)',
        organization: 'IEC',
        relevantSections: ['Application guide']
      }
    ],
    
    regulations: [
      'Process safety regulations',
      'Major accident prevention requirements'
    ],
    
    softwareTools: [
      'HAZOP recording software',
      'P&ID markup tools',
      'Action management systems',
      'SIF tracking databases'
    ]
  },
  
  {
    id: 'FES',
    code: 'FES',
    title: 'Fire & Explosion Study',
    fullName: 'Fire and Explosion Risk Analysis',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Quantitative analysis of fire and explosion risks to support design decisions',
    purpose: 'To quantify fire/explosion risks and define mitigation measures',
    scope: 'All process areas with hydrocarbon inventory',
    
    detailedDescription: `The Fire & Explosion Study uses consequence modeling and frequency analysis to quantify risks from fire and explosion scenarios. It determines design accident loads, establishes safety distances, defines fire zones, and specifies passive fire protection requirements. The study directly influences layout, structural design, and emergency response planning.`,
    
    keyComponents: [
      'Release scenario identification',
      'Frequency assessment',
      'Consequence modeling',
      'Explosion overpressure analysis',
      'Thermal radiation assessment',
      'Escalation potential',
      'Risk contours',
      'Mitigation recommendations'
    ],
    
    deliverables: [
      'Fire & explosion study report',
      'Risk contour plots',
      'Design accident loads',
      'PFP requirements',
      'Safety distance tables',
      'Blast wall specifications'
    ],
    
    bestPractices: [
      'Use validated models and data',
      'Consider full range of scenarios',
      'Include jet fires not just pool fires',
      'Account for congestion/confinement',
      'Validate with CFD for critical areas',
      'Consider domino effects'
    ],
    
    commonMistakes: [
      'Oversimplified geometry',
      'Missing jet fire scenarios',
      'Incorrect hole size distributions',
      'Ignoring ventilation effects',
      'Not considering escalation',
      'Poor integration with design'
    ],
    
    qualityChecklist: [
      'Scenarios comprehensive',
      'Models appropriate',
      'Results validated',
      'Design integration clear',
      'Recommendations practical',
      'Assumptions documented'
    ],
    
    realWorldExamples: [
      'Design blast: 0.2-0.5 bar typical',
      'Pool fire duration: 2-4 hours for design',
      'Jet fire loads: Often govern PFP design',
      'Safety distances: 50-200m typical'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 752',
        title: 'Management of Hazards Associated with Location of Process Plant Buildings',
        organization: 'API',
        relevantSections: ['Building siting evaluation']
      },
      {
        code: 'NFPA 59A',
        title: 'Standard for the Production, Storage, and Handling of LNG',
        organization: 'NFPA',
        relevantSections: ['Thermal radiation limits']
      }
    ],
    
    regulations: [
      'Land use planning requirements',
      'Major hazard regulations',
      'Environmental protection limits'
    ],
    
    softwareTools: [
      'PHAST',
      'FLACS CFD',
      'KFX',
      'FRED fire modeling',
      'Risk integration software'
    ]
  }
];