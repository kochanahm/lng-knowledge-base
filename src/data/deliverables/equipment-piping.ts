import { DeliverableKnowledge } from '@/types';

export const equipmentDeliverables: DeliverableKnowledge[] = [
  {
    id: 'EDS',
    code: 'EDS',
    title: 'Equipment Datasheets',
    fullName: 'Equipment Datasheets - Preliminary Specifications',
    phase: 'FEED',
    discipline: 'Equipment',
    issuanceStatus: 'IFR',
    
    summary: 'Technical specification sheets for all major equipment items',
    purpose: 'To define equipment requirements for sizing, budgeting, and vendor inquiries',
    scope: 'All major mechanical equipment including rotating and static equipment',
    
    detailedDescription: `Equipment datasheets are standardized forms that capture all technical requirements for equipment items. During FEED, preliminary datasheets are developed based on process requirements. These evolve through the project as vendor information is incorporated, ultimately becoming the definitive equipment specifications.`,
    
    keyComponents: [
      'Process design conditions',
      'Mechanical design requirements',
      'Material specifications',
      'Performance requirements',
      'Utility connections',
      'Special requirements (noise, vibration, etc.)'
    ],
    
    deliverables: [
      'Datasheets for all equipment types',
      'Datasheet index',
      'Standard datasheet templates',
      'Revision tracking log'
    ],
    
    bestPractices: [
      'Use API/industry standard datasheet formats',
      'Include all process conditions from PFD/HMB',
      'Add design margins per project standards',
      'Specify materials for process compatibility',
      'Include utility requirements clearly',
      'Consider maintenance and spare parts'
    ],
    
    commonMistakes: [
      'Incomplete process data from Process discipline',
      'Missing design margins or incorrect margins',
      'Material selection not suitable for service',
      'Utility requirements not fully defined',
      'Special requirements (winterization, tropicalization) missed'
    ],
    
    qualityChecklist: [
      'All equipment from equipment list included',
      'Process conditions match PFD/HMB',
      'Design margins applied correctly',
      'Materials specified for all components',
      'Utility requirements complete',
      'Codes and standards referenced'
    ],
    
    realWorldExamples: [
      'Compressor datasheet: includes gas composition, operating cases, power requirements, seal systems',
      'Heat exchanger datasheet: TEMA type, duty, fouling factors, materials',
      'Vessel datasheet: design conditions, internals, nozzle schedule'
    ],
    
    applicableStandards: [
      {
        code: 'API 617',
        title: 'Axial and Centrifugal Compressors',
        organization: 'American Petroleum Institute',
        relevantSections: ['Datasheet in Annex']
      },
      {
        code: 'API 660',
        title: 'Shell-and-tube Heat Exchangers',
        organization: 'American Petroleum Institute',
        relevantSections: ['Datasheet format']
      }
    ],
    
    regulations: [
      'Pressure Equipment Directive (PED) requirements',
      'Local regulatory design requirements'
    ],
    
    softwareTools: [
      'Compress (for vessels)',
      'HTRI (for heat exchangers)',
      'Vendor-specific sizing software',
      'Excel-based datasheet templates'
    ]
  },
  
  {
    id: 'EL',
    code: 'EL',
    title: 'Equipment List',
    fullName: 'Master Equipment List',
    phase: 'FEED',
    discipline: 'Equipment',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive list of all equipment with tag numbers and key data',
    purpose: 'To provide a master register of all equipment for project management and control',
    scope: 'All tagged equipment items in the facility',
    
    detailedDescription: `The Equipment List is a controlled document that lists every piece of equipment in the facility with its unique tag number, description, and key characteristics. It serves as the master reference for all disciplines and is used for cost estimation, procurement planning, and project controls.`,
    
    keyComponents: [
      'Equipment tag numbers',
      'Equipment descriptions',
      'Equipment type and size',
      'Design parameters summary',
      'Materials of construction',
      'Vendor/status information'
    ],
    
    deliverables: [
      'Master equipment list',
      'Equipment list by area/unit',
      'Equipment list by type',
      'Spare equipment list',
      'Package equipment lists'
    ],
    
    bestPractices: [
      'Establish tag numbering system early',
      'Maintain as single source of truth',
      'Include all equipment shown on PFDs/P&IDs',
      'Regular updates and revision control',
      'Coordinate with all disciplines',
      'Link to equipment datasheets'
    ],
    
    commonMistakes: [
      'Multiple versions in circulation',
      'Tag numbers changing without control',
      'Missing equipment (packages, spares)',
      'Inconsistency with P&IDs',
      'Poor revision control'
    ],
    
    qualityChecklist: [
      'All PFD/P&ID equipment included',
      'Tag numbers are unique',
      'Descriptions are consistent',
      'Spare equipment identified',
      'Package equipment broken down',
      'Revision status clear'
    ],
    
    realWorldExamples: [
      'Typical LNG plant: 2000-4000 equipment items',
      'Major equipment: compressors, turbines, heat exchangers, vessels, tanks',
      'Package units: refrigeration, utilities, fire systems'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-95',
        title: 'Enterprise-Control System Integration',
        organization: 'ISA',
        relevantSections: ['Equipment hierarchy']
      }
    ],
    
    regulations: [
      'Asset management regulations',
      'Maintenance planning requirements'
    ],
    
    softwareTools: [
      'Engineering database systems',
      'SAP/ERP systems',
      'SmartPlant Reference Data',
      'Excel with proper controls'
    ]
  }
];

export const pipingDeliverables: DeliverableKnowledge[] = [
  {
    id: 'PLD',
    code: 'PLD',
    title: 'Plot Plan',
    fullName: 'Overall Plot Plan / Equipment Layout',
    phase: 'FEED',
    discipline: 'Piping',
    issuanceStatus: 'IFD',
    
    summary: 'Overall facility layout showing equipment locations and major pipe racks',
    purpose: 'To optimize facility layout for safety, operations, maintenance, and cost',
    scope: 'Complete facility including process units, utilities, storage, and marine facilities',
    
    detailedDescription: `The Plot Plan is a critical document that shows the physical arrangement of all major equipment, structures, buildings, and roads within the facility. It must balance multiple requirements including process flow, safety distances, maintenance access, future expansion, and constructability. For LNG facilities with GBS, it must also consider marine operations and module boundaries.`,
    
    keyComponents: [
      'Equipment locations with tag numbers',
      'Major pipe rack routes',
      'Roads and access ways',
      'Buildings and control rooms',
      'Safety distances and fire zones',
      'Module boundaries (for modular execution)'
    ],
    
    deliverables: [
      'Overall plot plan',
      'Unit plot plans',
      'Elevation drawings',
      'Pipe rack layouts',
      '3D model views'
    ],
    
    bestPractices: [
      'Consider prevailing wind direction for flare/vents',
      'Maintain code-required safety distances',
      'Group equipment by maintenance philosophy',
      'Allow for operator and maintenance access',
      'Consider construction and module assembly',
      'Plan for future expansion'
    ],
    
    commonMistakes: [
      'Inadequate spacing for maintenance',
      'Safety distances not per standards',
      'Poor process flow arrangement',
      'Ignoring constructability',
      'No provision for future expansion',
      'Module split in wrong locations'
    ],
    
    qualityChecklist: [
      'All equipment from equipment list shown',
      'Safety distances meet codes',
      'Maintenance access provided',
      'Process flow is logical',
      'Construction sequence considered',
      'Hazardous area classification shown'
    ],
    
    realWorldExamples: [
      'LNG trains typically 100m x 400m per train',
      'Storage tanks require large safety distances',
      'Marine facilities integrated with process areas',
      'Modular layouts consider transportation limits'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 752',
        title: 'Management of Hazards Associated with Location of Process Plant Buildings',
        organization: 'API',
        relevantSections: ['Building siting']
      },
      {
        code: 'NFPA 59A',
        title: 'Standard for the Production, Storage, and Handling of LNG',
        organization: 'NFPA',
        relevantSections: ['Siting requirements']
      }
    ],
    
    regulations: [
      'Local planning and zoning requirements',
      'Environmental permit conditions',
      'Fire department access requirements'
    ],
    
    softwareTools: [
      'Navisworks',
      'PDMS/E3D',
      'SmartPlant 3D',
      'AutoCAD Plant 3D'
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
    
    summary: 'Detailed fabrication drawings for each piping spool',
    purpose: 'To provide fabrication and installation information for piping',
    scope: 'All process and utility piping 2" and above (typically)',
    
    detailedDescription: `Piping isometric drawings are detailed 3D representations of piping systems drawn in an isometric projection. They show exact routing, dimensions, elevations, and all components required for fabrication and installation. Each isometric represents a portion of piping that can be fabricated as a unit (spool).`,
    
    keyComponents: [
      'Pipe routing with coordinates',
      'All fittings and components',
      'Weld locations and types',
      'Support locations',
      'Bill of materials',
      'Reference to P&ID and specifications'
    ],
    
    deliverables: [
      'Isometric drawings',
      'Spool drawings',
      'Field weld maps',
      'Material take-off summaries',
      'Isometric index'
    ],
    
    bestPractices: [
      'Extract from clash-free 3D model',
      'Include all small bore connections',
      'Show support locations accurately',
      'Consider shipping and handling limits',
      'Include stress analysis requirements',
      'Coordinate with structural for supports'
    ],
    
    commonMistakes: [
      'Missing small bore connections',
      'Incorrect support locations',
      'Not considering constructability',
      'Wrong material specifications',
      'Missing or incorrect welds',
      'No reference to stress requirements'
    ],
    
    qualityChecklist: [
      'Matches P&ID exactly',
      'Materials per piping specification',
      'All dimensions provided',
      'Supports match stress analysis',
      'Constructability reviewed',
      'Hydro test limits shown'
    ],
    
    realWorldExamples: [
      'Large bore critical piping: individual ISOs',
      'Small bore piping: area ISOs',
      'Typical LNG project: 10,000-20,000 ISOs'
    ],
    
    applicableStandards: [
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Fabrication requirements']
      },
      {
        code: 'PFI ES-05',
        title: 'Pipe Fabrication Institute Standard',
        organization: 'PFI',
        relevantSections: ['Fabrication tolerances']
      }
    ],
    
    regulations: [
      'Welding standards and qualifications',
      'Pressure testing requirements'
    ],
    
    softwareTools: [
      'Isogen (automatic ISO generation)',
      'Spoolgen',
      'CADWorx',
      'Plant 3D'
    ]
  },
  
  {
    id: 'PSP',
    code: 'PSP',
    title: 'Piping Specifications',
    fullName: 'Piping Material Specifications',
    phase: 'FEED',
    discipline: 'Piping',
    issuanceStatus: 'IFD',
    
    summary: 'Standard specifications for piping materials and components',
    purpose: 'To standardize piping materials selection for different services',
    scope: 'All piping systems in the facility',
    
    detailedDescription: `Piping Specifications (also called Piping Classes) define standard piping materials and components for various process services. Each specification covers a range of sizes and pressure ratings, ensuring consistent material selection throughout the facility. They are critical for procurement, fabrication, and long-term maintenance.`,
    
    keyComponents: [
      'Service description and limits',
      'Pipe materials and schedules',
      'Fitting types and ratings',
      'Valve specifications',
      'Gasket and bolt specifications',
      'Branch connection tables'
    ],
    
    deliverables: [
      'Piping specification index',
      'Individual piping specs',
      'Piping class datasheets',
      'Special item specifications',
      'Valve specification sheets'
    ],
    
    bestPractices: [
      'Base on proven industry standards',
      'Consider full range of operating conditions',
      'Include upset and cleaning conditions',
      'Minimize number of different specs',
      'Consider maintenance and spare parts',
      'Coordinate with material selection report'
    ],
    
    commonMistakes: [
      'Too many different specifications',
      'Not considering all process conditions',
      'Incompatible materials in same spec',
      'Missing special requirements (low temp, cycling)',
      'Incorrect pressure/temperature ratings'
    ],
    
    qualityChecklist: [
      'All services covered',
      'Materials compatible with process',
      'Pressure/temperature ratings adequate',
      'Corrosion allowance included',
      'Special requirements addressed',
      'Procurement specifications clear'
    ],
    
    realWorldExamples: [
      'Typical LNG plant: 20-30 piping specs',
      'Cryogenic service: stainless steel specs',
      'Utility services: carbon steel specs',
      'Special services: duplex, alloy specs'
    ],
    
    applicableStandards: [
      {
        code: 'ASME B31.3',
        title: 'Process Piping',
        organization: 'ASME',
        relevantSections: ['Chapter II - Design']
      },
      {
        code: 'ASME B16.5',
        title: 'Pipe Flanges and Flanged Fittings',
        organization: 'ASME',
        relevantSections: ['Pressure-temperature ratings']
      }
    ],
    
    regulations: [
      'Pressure Equipment Directive (PED)',
      'Local material regulations'
    ],
    
    softwareTools: [
      'SmartPlant Reference Data',
      'COADE Materials',
      'PDS Spec Manager',
      'Custom databases'
    ]
  }
];