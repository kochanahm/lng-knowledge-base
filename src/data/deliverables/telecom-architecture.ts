import { DeliverableKnowledge } from '@/types';

export const telecomDeliverables: DeliverableKnowledge[] = [
  {
    id: 'TCP',
    code: 'TCP',
    title: 'Telecom Philosophy',
    fullName: 'Telecommunications System Philosophy',
    phase: 'FEED',
    discipline: 'Telecom',
    issuanceStatus: 'IFR',
    
    summary: 'Overall telecommunications and IT infrastructure strategy for the facility',
    purpose: 'To define communication systems architecture and integration approach',
    scope: 'All telecommunication, IT, security, and communication systems',
    
    detailedDescription: `The Telecom Philosophy establishes the overall approach for all communication systems including voice, data, radio, CCTV, access control, and IT infrastructure. It defines system architecture, redundancy requirements, cybersecurity approach, and integration with control systems. This document guides all telecom/IT design decisions.`,
    
    keyComponents: [
      'Communication systems overview',
      'Network architecture philosophy',
      'Cybersecurity strategy',
      'Integration with control systems',
      'Redundancy and reliability requirements',
      'Technology standards',
      'Future expansion considerations'
    ],
    
    deliverables: [
      'Telecom philosophy document',
      'System architecture overview',
      'Technology roadmap',
      'Integration strategy',
      'Standards and guidelines'
    ],
    
    bestPractices: [
      'Align with corporate IT standards',
      'Plan for technology obsolescence',
      'Ensure proper network segregation',
      'Consider bandwidth growth requirements',
      'Include remote access capabilities',
      'Design for maintainability'
    ],
    
    commonMistakes: [
      'Insufficient bandwidth planning',
      'Poor integration with control systems',
      'Inadequate cybersecurity consideration',
      'No upgrade path planning',
      'Missing redundancy for critical systems',
      'Incompatible technology choices'
    ],
    
    qualityChecklist: [
      'All communication needs identified',
      'Architecture scalable for future',
      'Cybersecurity addressed comprehensively',
      'Integration approach defined',
      'Standards identified and appropriate',
      'Redundancy requirements clear'
    ],
    
    realWorldExamples: [
      'Typical systems: VoIP, radio, PAGA, CCTV, ACS',
      'Network: Dual redundant backbone common',
      'Bandwidth: Plan for 10x growth over project life',
      'Integration: OPC UA for control system data'
    ],
    
    applicableStandards: [
      {
        code: 'TIA-942',
        title: 'Telecommunications Infrastructure Standard for Data Centers',
        organization: 'Telecommunications Industry Association',
        relevantSections: ['Reliability and redundancy']
      },
      {
        code: 'IEC 61850',
        title: 'Communication networks and systems for power utility automation',
        organization: 'IEC',
        relevantSections: ['System architecture']
      }
    ],
    
    regulations: [
      'Radio frequency regulations',
      'Data privacy regulations',
      'Cybersecurity requirements'
    ],
    
    softwareTools: [
      'Microsoft Visio',
      'Network planning tools',
      'RF coverage planning software'
    ]
  },
  
  {
    id: 'NSA',
    code: 'NSA',
    title: 'Network System Architecture',
    fullName: 'IT/OT Network System Architecture',
    phase: 'FEED',
    discipline: 'Telecom',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed design of IT and OT network infrastructure',
    purpose: 'To define network topology, equipment, and security architecture',
    scope: 'All data networks including IT, OT, and specialized systems',
    
    detailedDescription: `The Network System Architecture provides detailed design of all data networks including corporate IT, operational technology (OT), and specialized networks. It defines network topology, equipment specifications, VLAN structure, routing protocols, QoS policies, and security zones. This is critical for ensuring reliable and secure data communications.`,
    
    keyComponents: [
      'Network topology diagrams',
      'Core/distribution/access architecture',
      'VLAN and subnet design',
      'Routing and switching protocols',
      'QoS and traffic prioritization',
      'Security zones and DMZ design',
      'Wireless network design'
    ],
    
    deliverables: [
      'Network architecture diagrams',
      'Equipment specifications',
      'IP addressing plan',
      'Security zone definitions',
      'Network standards document',
      'Wireless coverage plans'
    ],
    
    bestPractices: [
      'Use proven enterprise architectures',
      'Implement defense-in-depth security',
      'Design for zero single points of failure',
      'Use standard protocols where possible',
      'Plan for traffic growth',
      'Document everything thoroughly'
    ],
    
    commonMistakes: [
      'Flat network design without segmentation',
      'Insufficient bandwidth at core',
      'Poor wireless coverage planning',
      'No QoS for critical traffic',
      'Complex designs hard to troubleshoot',
      'Missing out-of-band management'
    ],
    
    qualityChecklist: [
      'All systems have network connectivity',
      'Security zones properly defined',
      'Redundancy meets requirements',
      'Scalability addressed',
      'Management network separate',
      'Documentation complete'
    ],
    
    realWorldExamples: [
      'Core switches: Dual 10/40/100 Gbps',
      'Access layer: 1 Gbps to end devices',
      'Wireless: 802.11ac/ax Wave 2',
      'Security: IEC 62443 zones and conduits'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 62443',
        title: 'Industrial communication networks - Network and system security',
        organization: 'IEC',
        relevantSections: ['Part 3-3: System requirements']
      },
      {
        code: 'IEEE 802.3',
        title: 'Ethernet Standards',
        organization: 'IEEE',
        relevantSections: ['Latest amendments']
      }
    ],
    
    regulations: [
      'Cybersecurity regulations',
      'Data sovereignty requirements',
      'Industry-specific mandates'
    ],
    
    softwareTools: [
      'Cisco Network Designer',
      'SolarWinds Network Topology Mapper',
      'NetBrain',
      'Visio'
    ]
  },
  
  {
    id: 'CTV',
    code: 'CCTV',
    title: 'CCTV Layout',
    fullName: 'Closed Circuit Television System Layout',
    phase: 'DD',
    discipline: 'Telecom',
    issuanceStatus: 'IFC',
    
    summary: 'Camera locations and coverage for security and operations monitoring',
    purpose: 'To provide comprehensive visual monitoring of the facility',
    scope: 'All areas requiring video surveillance',
    
    detailedDescription: `The CCTV Layout shows all camera locations, types, coverage areas, and blind spots for the video surveillance system. It includes camera specifications, viewing angles, lighting considerations, and integration with the video management system. The design must balance security needs, operational monitoring, and privacy requirements.`,
    
    keyComponents: [
      'Camera location plans',
      'Coverage analysis diagrams',
      'Camera schedule and specifications',
      'Blind spot identification',
      'Lighting integration',
      'Control room display layout',
      'Recording and retention requirements'
    ],
    
    deliverables: [
      'CCTV layout drawings',
      'Camera coverage diagrams',
      'Camera specification sheets',
      'VMS architecture',
      'Storage calculations',
      'Operating procedures'
    ],
    
    bestPractices: [
      'Eliminate blind spots in critical areas',
      'Use appropriate cameras for conditions',
      'Plan for lighting conditions',
      'Consider privacy regulations',
      'Design for maintenance access',
      'Include analytics capabilities'
    ],
    
    commonMistakes: [
      'Insufficient coverage of critical areas',
      'Wrong camera types for environment',
      'Not considering sun glare/backlighting',
      'Inadequate storage capacity',
      'Poor integration with access control',
      'Missing PTZ preset programming'
    ],
    
    qualityChecklist: [
      'All security zones covered',
      'Process areas adequately monitored',
      'Storage meets retention requirements',
      'Integration with other systems defined',
      'Maintenance access provided',
      'Privacy requirements met'
    ],
    
    realWorldExamples: [
      'Perimeter: PTZ cameras with analytics',
      'Process areas: Explosion-proof fixed cameras',
      'Resolution: 1080p minimum, 4K for critical areas',
      'Storage: 30-90 days typical retention'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 62676',
        title: 'Video surveillance systems for use in security applications',
        organization: 'IEC',
        relevantSections: ['Part 4: Application guidelines']
      },
      {
        code: 'ONVIF',
        title: 'Open Network Video Interface Forum',
        organization: 'ONVIF',
        relevantSections: ['Profile S for streaming']
      }
    ],
    
    regulations: [
      'Privacy laws and regulations',
      'Data retention requirements',
      'Export control for technology'
    ],
    
    softwareTools: [
      'JVSG CCTV Design Software',
      'Axis Site Designer',
      'Milestone XProtect',
      'AutoCAD'
    ]
  }
];

export const architectureDeliverables: DeliverableKnowledge[] = [
  {
    id: 'ADB',
    code: 'ADB',
    title: 'Architectural Design Basis',
    fullName: 'Architectural Design Basis and Standards',
    phase: 'FEED',
    discipline: 'Architecture',
    issuanceStatus: 'IFD',
    
    summary: 'Design standards and requirements for all buildings and architectural elements',
    purpose: 'To establish consistent architectural design parameters and standards',
    scope: 'All buildings, control rooms, substations, and accommodations',
    
    detailedDescription: `The Architectural Design Basis establishes design parameters for all buildings and occupied spaces. It covers space planning principles, environmental requirements, finishes standards, life safety requirements, and human factors considerations. This document ensures all architectural designs meet functional, safety, and aesthetic requirements.`,
    
    keyComponents: [
      'Space planning standards',
      'Environmental design criteria',
      'Finishes and materials standards',
      'Life safety requirements',
      'Accessibility standards',
      'Human factors guidelines',
      'Blast resistance requirements'
    ],
    
    deliverables: [
      'Design basis document',
      'Space standards manual',
      'Finish schedule templates',
      'Typical detail library',
      'Color and material palette'
    ],
    
    bestPractices: [
      'Consider local climate conditions',
      'Design for maintenance access',
      'Standardize where possible',
      'Consider operator comfort and efficiency',
      'Plan for future modifications',
      'Integrate with other disciplines early'
    ],
    
    commonMistakes: [
      'Inadequate space for equipment',
      'Poor HVAC integration',
      'Ignoring maintenance access',
      'Non-compliant egress design',
      'Wrong materials for environment',
      'Insufficient storage space'
    ],
    
    qualityChecklist: [
      'All building types addressed',
      'Code compliance verified',
      'Standards practical and achievable',
      'Materials suitable for environment',
      'Human factors considered',
      'Blast requirements addressed'
    ],
    
    realWorldExamples: [
      'Control room: 50-80 m² minimum',
      'Blast rating: 3-6 psi typical for control buildings',
      'Ceiling height: 2.7m minimum, 3.0m preferred',
      'Emergency exits: Maximum 30m travel distance'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 11064',
        title: 'Ergonomic design of control centres',
        organization: 'ISO',
        relevantSections: ['Part 3: Control room layout']
      },
      {
        code: 'NFPA 101',
        title: 'Life Safety Code',
        organization: 'NFPA',
        relevantSections: ['Chapter 40: Industrial Occupancies']
      }
    ],
    
    regulations: [
      'Local building codes',
      'Accessibility regulations',
      'Fire and life safety codes'
    ],
    
    softwareTools: [
      'Autodesk Revit',
      'AutoCAD Architecture',
      'SketchUp',
      'Navisworks'
    ]
  },
  
  {
    id: 'BLC',
    code: 'BLC',
    title: 'Building Layout Concept',
    fullName: 'Building Layout and Space Planning',
    phase: 'FEED',
    discipline: 'Architecture',
    issuanceStatus: 'IFD',
    
    summary: 'Conceptual layouts for all buildings showing space allocation and relationships',
    purpose: 'To define building arrangements and confirm space requirements',
    scope: 'All permanent buildings and major enclosures',
    
    detailedDescription: `Building Layout Concepts show the preliminary arrangement of all spaces within buildings. These layouts establish room relationships, circulation patterns, and overall building configuration. They are developed through coordination with end users and other disciplines to ensure functional and efficient designs.`,
    
    keyComponents: [
      'Floor plan layouts',
      'Space allocation diagrams',
      'Circulation and egress routes',
      'Department relationships',
      'Furniture layouts',
      'Equipment space requirements',
      'Growth allowances'
    ],
    
    deliverables: [
      'Conceptual floor plans',
      'Space program spreadsheet',
      'Adjacency diagrams',
      'Preliminary sections',
      '3D massing models'
    ],
    
    bestPractices: [
      'Involve end users in layout development',
      'Consider workflow and adjacencies',
      'Allow for future flexibility',
      'Ensure code-compliant egress',
      'Coordinate with MEP requirements',
      'Think about natural light and views'
    ],
    
    commonMistakes: [
      'Insufficient circulation space',
      'Poor departmental adjacencies',
      'Inadequate service spaces',
      'No expansion capability',
      'Ignoring column grid constraints',
      'Missing support spaces'
    ],
    
    qualityChecklist: [
      'All programmed spaces included',
      'Adjacencies logical',
      'Circulation efficient',
      'Egress compliant',
      'MEP spaces adequate',
      'Future expansion possible'
    ],
    
    realWorldExamples: [
      'Office space: 10-15 m²/person',
      'Corridors: 1.5-2.0m wide minimum',
      'Control room: Clear sight lines essential',
      'Equipment rooms: 30% space for maintenance'
    ],
    
    applicableStandards: [
      {
        code: 'ASHRAE 62.1',
        title: 'Ventilation for Acceptable Indoor Air Quality',
        organization: 'ASHRAE',
        relevantSections: ['Space planning impacts']
      }
    ],
    
    regulations: [
      'Building codes for occupancy',
      'Means of egress requirements',
      'Accessibility standards'
    ],
    
    softwareTools: [
      'Revit for BIM',
      'AutoCAD',
      'Space planning software',
      'Rhino for complex geometry'
    ]
  },
  
  {
    id: 'RML',
    code: 'RML',
    title: 'Room Layout Drawings',
    fullName: 'Detailed Room Layout and Furniture Plans',
    phase: 'DD',
    discipline: 'Architecture',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed layouts showing all furniture, equipment, and finishes for each room',
    purpose: 'To provide construction and procurement information for building interiors',
    scope: 'All occupied spaces requiring furniture or special equipment',
    
    detailedDescription: `Room Layout Drawings provide detailed plans for each space showing furniture arrangements, equipment locations, finishes, and architectural features. These drawings coordinate with all disciplines to ensure proper integration of services and meet functional requirements. They serve as the basis for furniture procurement and interior construction.`,
    
    keyComponents: [
      'Furniture layouts with dimensions',
      'Equipment locations and clearances',
      'Finish schedules and keys',
      'Reflected ceiling plans',
      'Power and data outlet locations',
      'Millwork and built-ins',
      'Signage and wayfinding'
    ],
    
    deliverables: [
      'Room layout plans',
      'Furniture schedules',
      'Finish plans and schedules',
      'Reflected ceiling plans',
      'Interior elevation drawings',
      'Millwork details'
    ],
    
    bestPractices: [
      'Coordinate with users on layouts',
      'Show all required clearances',
      'Include power/data requirements',
      'Consider ergonomics',
      'Plan for flexibility',
      'Specify appropriate finishes'
    ],
    
    commonMistakes: [
      'Furniture blocking egress paths',
      'Insufficient power/data outlets',
      'Poor acoustic treatment',
      'Wrong finishes for use',
      'Missing coordination items',
      'Inadequate lighting integration'
    ],
    
    qualityChecklist: [
      'All rooms have layouts',
      'Clearances meet codes',
      'Services coordinated',
      'Finishes appropriate',
      'Furniture specified',
      'Signage included'
    ],
    
    realWorldExamples: [
      'Control room: Console layouts critical',
      'Offices: Modular furniture typical',
      'Meeting rooms: AV integration essential',
      'Break rooms: Durable finishes required'
    ],
    
    applicableStandards: [
      {
        code: 'BIFMA',
        title: 'Business and Institutional Furniture Standards',
        organization: 'BIFMA International',
        relevantSections: ['Ergonomics and safety']
      }
    ],
    
    regulations: [
      'ADA compliance for furniture',
      'Fire ratings for finishes',
      'Egress width requirements'
    ],
    
    softwareTools: [
      'Revit',
      'AutoCAD',
      'CET Designer',
      '2020 Spaces'
    ]
  },
  
  {
    id: 'FEP',
    code: 'FEP',
    title: 'Fire Escape Plans',
    fullName: 'Fire and Emergency Escape Route Plans',
    phase: 'DD',
    discipline: 'Architecture',
    issuanceStatus: 'IFC',
    
    summary: 'Emergency evacuation routes and assembly points for all buildings',
    purpose: 'To ensure safe evacuation and comply with life safety codes',
    scope: 'All buildings and occupied structures',
    
    detailedDescription: `Fire Escape Plans show primary and secondary escape routes from all occupied spaces to safe assembly areas. These plans include exit signage locations, emergency lighting, fire fighting equipment locations, and evacuation procedures. They must be posted in buildings and used for emergency training.`,
    
    keyComponents: [
      'Primary and secondary escape routes',
      'Exit door locations and widths',
      'Assembly point locations',
      'Fire equipment locations',
      'Emergency lighting',
      'Evacuation zones',
      'Special procedures for disabled persons'
    ],
    
    deliverables: [
      'Escape route plans',
      'Posted evacuation maps',
      'Assembly point layouts',
      'Emergency lighting plans',
      'Signage location plans',
      'Training materials'
    ],
    
    bestPractices: [
      'Keep routes simple and direct',
      'Provide multiple escape paths',
      'Clearly mark all exits',
      'Consider all occupant types',
      'Coordinate with fire systems',
      'Regular training and drills'
    ],
    
    commonMistakes: [
      'Dead-end corridors too long',
      'Exit doors opening wrong direction',
      'Inadequate exit capacity',
      'Poor visibility of exit signs',
      'Assembly points in hazard zones',
      'Not considering disabled persons'
    ],
    
    qualityChecklist: [
      'All areas have two exits',
      'Travel distances compliant',
      'Exit capacity adequate',
      'Signs visible from all points',
      'Assembly points safe',
      'Special needs addressed'
    ],
    
    realWorldExamples: [
      'Maximum travel distance: 60m typical',
      'Exit width: 0.5 inches per person',
      'Assembly points: 100m from buildings',
      'Emergency lighting: 90 minutes duration'
    ],
    
    applicableStandards: [
      {
        code: 'NFPA 101',
        title: 'Life Safety Code',
        organization: 'NFPA',
        relevantSections: ['Chapter 7: Means of Egress']
      },
      {
        code: 'ISO 23601',
        title: 'Safety identification - Escape and evacuation plan signs',
        organization: 'ISO',
        relevantSections: ['Design principles']
      }
    ],
    
    regulations: [
      'Local fire codes',
      'Building evacuation requirements',
      'Workplace safety regulations'
    ],
    
    softwareTools: [
      'AutoCAD',
      'Pathfinder (evacuation simulation)',
      'Revit',
      'PyroSim'
    ]
  }
];