// src/data/deliverables/structural-civil.ts

import { DeliverableKnowledge } from '@/types';

export const structuralDeliverables: DeliverableKnowledge[] = [
  {
    id: 'SDB',
    code: 'SDB',
    title: 'Structural Design Basis',
    fullName: 'Structural Design Basis Document',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive document defining all design criteria, loads, and standards for structural design',
    purpose: 'To establish consistent design parameters and ensure all structural designs meet project requirements',
    scope: 'All structural steel, concrete structures, and supports for the LNG facility',
    
    detailedDescription: `The Structural Design Basis is the foundation document for all structural engineering work on the project. It defines design loads (dead, live, environmental), load combinations, design codes and standards, material specifications, deflection criteria, and special requirements. This document ensures consistency across all structural designs and provides the basis for third-party verification.`,
    
    keyComponents: [
      'Design codes and standards listing',
      'Load definitions and combinations',
      'Material specifications',
      'Deflection and vibration criteria',
      'Corrosion protection requirements',
      'Modularization requirements',
      'Interface loads from other disciplines'
    ],
    
    deliverables: [
      'Design basis document',
      'Load combination matrices',
      'Environmental criteria summary',
      'Material specification sheets',
      'Design checklist'
    ],
    
    bestPractices: [
      'Involve all disciplines early to capture interface loads',
      'Consider construction methodology in design criteria',
      'Include fatigue requirements for cyclic loading',
      'Account for thermal loads in LNG service',
      'Define clear acceptance criteria for deflections',
      'Consider future expansion in load allowances'
    ],
    
    commonMistakes: [
      'Missing interface loads from equipment/piping',
      'Inadequate consideration of construction loads',
      'Incorrect environmental load statistics',
      'Not considering dynamic loads from equipment',
      'Overlooking thermal expansion effects',
      'Inconsistent application of load factors'
    ],
    
    qualityChecklist: [
      'All applicable codes identified and latest editions confirmed',
      'Environmental data verified with metocean report',
      'Load combinations cover all scenarios',
      'Materials suitable for environmental conditions',
      'Modularization constraints clearly defined',
      'Interface with other disciplines documented'
    ],
    
    realWorldExamples: [
      'Typical wind loads: 3-second gust speeds of 150-200 km/h',
      'Seismic design: often 0.15-0.3g peak ground acceleration',
      'Live loads: 5 kPa for general access, 10 kPa for laydown areas',
      'Blast loads may govern design in some areas'
    ],
    
    applicableStandards: [
      {
        code: 'AISC 360',
        title: 'Specification for Structural Steel Buildings',
        organization: 'American Institute of Steel Construction',
        relevantSections: ['Chapter B - Design Requirements', 'Chapter C - Stability']
      },
      {
        code: 'API RP 2A-WSD',
        title: 'Planning, Designing, and Constructing Fixed Offshore Platforms',
        organization: 'American Petroleum Institute',
        relevantSections: ['Section 3 - Loads', 'Section 5 - Structural Steel Design']
      },
      {
        code: 'ASCE 7',
        title: 'Minimum Design Loads for Buildings and Other Structures',
        organization: 'American Society of Civil Engineers',
        relevantSections: ['Chapters 26-30: Wind Loads', 'Chapters 11-22: Seismic']
      }
    ],
    
    regulations: [
      'Local building codes and regulations',
      'Maritime regulations for GBS structures',
      'Occupational safety requirements'
    ],
    
    softwareTools: [
      'STAAD.Pro',
      'SAP2000',
      'ANSYS',
      'Robot Structural Analysis'
    ]
  },
  
  {
    id: 'PSA',
    code: 'PSA',
    title: 'Preliminary Structural Analysis',
    fullName: 'Preliminary Structural Analysis Report',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFR',
    
    summary: 'Initial structural analysis to size major members and validate design concept',
    purpose: 'To confirm structural feasibility and establish preliminary member sizes for cost estimation',
    scope: 'Primary structural steel for pipe racks, equipment structures, and buildings',
    
    detailedDescription: `The Preliminary Structural Analysis provides initial sizing of major structural members based on the design basis loads. It includes simplified analysis models, preliminary member sizes, and quantity estimates. This analysis validates the structural concept and provides input for cost estimation and constructability reviews.`,
    
    keyComponents: [
      'Analysis model descriptions',
      'Load application methodology',
      'Preliminary member sizes',
      'Deflection check results',
      'Steel tonnage estimates',
      'Key assumptions and simplifications'
    ],
    
    deliverables: [
      'Analysis report',
      'Preliminary sizing spreadsheets',
      'Structural model files',
      'Weight estimates',
      'Marked-up drawings'
    ],
    
    bestPractices: [
      'Use appropriate safety factors for preliminary design',
      'Include all major loads even if simplified',
      'Coordinate with piping for rack loading',
      'Consider constructability in member selection',
      'Document all assumptions clearly',
      'Validate results with similar projects'
    ],
    
    commonMistakes: [
      'Over-simplifying load paths',
      'Missing lateral load systems',
      'Inadequate foundation stiffness assumptions',
      'Not considering construction sequences',
      'Optimistic weight estimates'
    ],
    
    qualityChecklist: [
      'Analysis models reviewed for accuracy',
      'Loads match design basis',
      'Member sizes are standard/available',
      'Deflections within limits',
      'Connection feasibility considered',
      'Weight estimates include connections'
    ],
    
    realWorldExamples: [
      'Pipe rack beams: typically W24-W36 sections',
      'Columns: W12-W14 for multi-story structures',
      'Typical steel quantities: 150-200 kg/m² for pipe racks'
    ],
    
    applicableStandards: [
      {
        code: 'AISC Steel Construction Manual',
        title: 'Steel Construction Manual',
        organization: 'AISC',
        relevantSections: ['Part 1 - Dimensions and Properties']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      'STAAD.Pro',
      'Excel for preliminary calculations',
      'MathCAD for design checks'
    ]
  },
  
  {
    id: 'SFP',
    code: 'SFP',
    title: 'Structural Framing Plans',
    fullName: 'Structural Steel Framing Plans',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFD',
    
    summary: 'Plan drawings showing primary structural steel arrangement at each elevation',
    purpose: 'To define the structural steel layout for coordination with other disciplines',
    scope: 'All structural steel framing including pipe racks, platforms, and equipment structures',
    
    detailedDescription: `Structural Framing Plans show the arrangement of primary and secondary structural members at each elevation level. These drawings are crucial for interdisciplinary coordination, showing column locations, beam arrangements, floor openings, and major equipment supports. They form the basis for detailed design development.`,
    
    keyComponents: [
      'Column grid lines and dimensions',
      'Primary beam arrangements',
      'Secondary framing members',
      'Floor plate and grating areas',
      'Major equipment support locations',
      'Elevation marks',
      'Preliminary member sizes'
    ],
    
    deliverables: [
      'Framing plans at each level',
      'Column schedule',
      'Beam schedule (preliminary)',
      'Typical detail sketches',
      'Coordination drawings'
    ],
    
    bestPractices: [
      'Coordinate column locations with equipment/piping',
      'Maintain consistent grid system throughout',
      'Show clear dimensions for construction',
      'Consider maintenance access requirements',
      'Indicate expansion joints clearly',
      'Review with operations for functionality'
    ],
    
    commonMistakes: [
      'Inadequate clearances for equipment removal',
      'Conflicts with major piping routes',
      'Missing intermediate platforms',
      'Incorrect elevation references',
      'Insufficient laydown areas'
    ],
    
    qualityChecklist: [
      'All equipment from plot plan accommodated',
      'Piping routes do not conflict',
      'Access routes clearly defined',
      'Member sizes match analysis',
      'Constructability reviewed',
      'Future expansion considered'
    ],
    
    realWorldExamples: [
      'Typical column spacing: 6-10m for pipe racks',
      'Platform widths: 2-3m for access, 4-6m for equipment',
      'Headroom clearance: minimum 2.1m, preferred 2.4m'
    ],
    
    applicableStandards: [
      {
        code: 'AISC 303',
        title: 'Code of Standard Practice for Steel Buildings and Bridges',
        organization: 'AISC',
        relevantSections: ['Section 3 - Contract Documents']
      }
    ],
    
    regulations: [
      'Local building codes for means of egress',
      'OSHA requirements for platforms and access'
    ],
    
    softwareTools: [
      'AutoCAD',
      'Tekla Structures',
      'Revit Structure',
      'PDMS/E3D for 3D coordination'
    ]
  },
  
  {
    id: 'SDD',
    code: 'SDD',
    title: 'Structural Detail Drawings',
    fullName: 'Structural Steel Detail Drawings',
    phase: 'DD',
    discipline: 'Structural',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed drawings showing connections, member sizes, and fabrication requirements',
    purpose: 'To provide complete information for steel fabrication and erection',
    scope: 'All structural steel connections, base plates, and special details',
    
    detailedDescription: `Structural Detail Drawings provide comprehensive information for fabrication and construction of all structural steel elements. These include connection details, base plate designs, stair and platform details, and any special structural elements. Every connection must be fully detailed with weld sizes, bolt patterns, and dimensional requirements.`,
    
    keyComponents: [
      'Connection details for all member types',
      'Base plate and anchor bolt details',
      'Stair and ladder details',
      'Platform framing and decking details',
      'Expansion joint details',
      'Lifting lug and temporary support details',
      'Fabrication specifications'
    ],
    
    deliverables: [
      'Connection detail sheets',
      'Base plate details',
      'Typical detail standards',
      'Erection drawings',
      'Bolt and weld schedules',
      'Material lists'
    ],
    
    bestPractices: [
      'Use standard connections where possible',
      'Clearly show all weld symbols and sizes',
      'Include erection requirements in details',
      'Consider galvanizing requirements in design',
      'Show clear dimensions for fabrication',
      'Include tolerances for critical dimensions'
    ],
    
    commonMistakes: [
      'Insufficient weld access clearance',
      'Bolt spacing violations',
      'Missing erection aids',
      'Inadequate base plate designs',
      'Conflicts between trades at connections',
      'Not considering coating thickness'
    ],
    
    qualityChecklist: [
      'All connections have complete details',
      'Weld sizes verified by calculation',
      'Bolt patterns meet code requirements',
      'Constructability of connections verified',
      'Material specifications clear',
      'NDT requirements specified'
    ],
    
    realWorldExamples: [
      'Typical beam connections: shear tabs or clip angles',
      'Column base plates: 25-50mm thick for major columns',
      'Anchor bolts: typically 25-50mm diameter ASTM F1554'
    ],
    
    applicableStandards: [
      {
        code: 'AWS D1.1',
        title: 'Structural Welding Code - Steel',
        organization: 'American Welding Society',
        relevantSections: ['Section 3 - Prequalified WPS', 'Section 4 - Qualification']
      },
      {
        code: 'RCSC Specification',
        title: 'Specification for Structural Joints Using High-Strength Bolts',
        organization: 'Research Council on Structural Connections',
        relevantSections: ['Section 3 - Bolted Parts', 'Section 5 - Installation']
      }
    ],
    
    regulations: [
      'Local welding inspection requirements',
      'Quality control regulations'
    ],
    
    softwareTools: [
      'Tekla Structures',
      'SDS/2',
      'AutoCAD with steel detailing plugins',
      'IDEA StatiCa for connection design'
    ]
  }
];

export const civilDeliverables: DeliverableKnowledge[] = [
  {
    id: 'GDR',
    code: 'GDR',
    title: 'Geotechnical Data Report',
    fullName: 'Geotechnical Investigation and Data Report',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive report on subsurface conditions based on site investigation',
    purpose: 'To provide geotechnical parameters for foundation design and identify subsurface risks',
    scope: 'Entire project site including onshore and nearshore areas for GBS',
    
    detailedDescription: `The Geotechnical Data Report presents results from the site investigation program including boring logs, laboratory test results, and engineering recommendations. For LNG projects with GBS, this includes both onshore investigations for construction areas and marine investigations for the GBS permanent location. The report provides crucial design parameters for foundations and identifies geohazards.`,
    
    keyComponents: [
      'Boring logs and soil profiles',
      'Laboratory test results',
      'Soil strength parameters',
      'Settlement calculations',
      'Liquefaction assessment',
      'Recommended bearing capacities',
      'Groundwater conditions',
      'Seabed bathymetry and conditions'
    ],
    
    deliverables: [
      'Geotechnical investigation report',
      'Boring location plan',
      'Soil profile sections',
      'Laboratory test reports',
      'Geophysical survey results',
      'Foundation recommendations'
    ],
    
    bestPractices: [
      'Ensure adequate borehole coverage and depth',
      'Include seasonal groundwater variations',
      'Perform appropriate lab tests for soil types',
      'Consider both static and dynamic conditions',
      'Investigate to sufficient depth below foundations',
      'Include marine investigations for GBS site'
    ],
    
    commonMistakes: [
      'Insufficient investigation density',
      'Not reaching competent bearing strata',
      'Missing seasonal variations',
      'Inadequate marine investigations',
      'Poor sample handling affecting test results',
      'Not investigating borrow areas'
    ],
    
    qualityChecklist: [
      'Investigation covers all structure locations',
      'Boring depths adequate for stress influence',
      'Lab tests appropriate for soil types',
      'Marine conditions fully characterized',
      'Recommendations clear and specific',
      'Risks and uncertainties identified'
    ],
    
    realWorldExamples: [
      'Typical bearing capacity: 150-300 kPa for spread footings',
      'Marine soils often soft clay requiring ground improvement',
      'Settlement criteria: 25mm total, 15mm differential typically',
      'Scour potential assessment critical for GBS'
    ],
    
    applicableStandards: [
      {
        code: 'ASTM D1586',
        title: 'Standard Test Method for SPT',
        organization: 'ASTM International',
        relevantSections: ['Entire standard']
      },
      {
        code: 'ISO 19901-4',
        title: 'Petroleum and natural gas industries - Geotechnical and foundation design',
        organization: 'ISO',
        relevantSections: ['Section 7 - Site Investigation']
      }
    ],
    
    regulations: [
      'Local geotechnical investigation requirements',
      'Environmental regulations for drilling'
    ],
    
    softwareTools: [
      'gINT for boring logs',
      'PLAXIS for settlement analysis',
      'GRL WEAP for pile analysis',
      'Settle3D for settlement'
    ]
  },
  
  {
    id: 'FDC',
    code: 'FDC',
    title: 'Foundation Design Criteria',
    fullName: 'Foundation Design Criteria Document',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFD',
    
    summary: 'Design criteria specific to foundations based on geotechnical conditions',
    purpose: 'To establish consistent foundation design parameters for all structures',
    scope: 'All foundations including GBS, equipment, buildings, and pipe racks',
    
    detailedDescription: `The Foundation Design Criteria translates geotechnical investigation results into specific design requirements for different foundation types. It covers allowable bearing pressures, settlement criteria, pile design parameters, and special requirements for dynamic equipment. For GBS projects, it includes marine foundation requirements and scour protection design.`,
    
    keyComponents: [
      'Allowable bearing pressures by area',
      'Settlement criteria (total and differential)',
      'Pile design parameters if applicable',
      'Dynamic foundation requirements',
      'Minimum foundation sizes',
      'Frost protection requirements',
      'GBS foundation preparation requirements'
    ],
    
    deliverables: [
      'Foundation design criteria document',
      'Foundation type selection matrix',
      'Standard foundation details',
      'Dynamic foundation guidelines',
      'GBS foundation requirements'
    ],
    
    bestPractices: [
      'Coordinate with structural for accurate loads',
      'Consider construction tolerances',
      'Include factors of safety appropriate to uncertainty',
      'Account for equipment vibration',
      'Design for future settlement monitoring',
      'Consider constructability of foundations'
    ],
    
    commonMistakes: [
      'Using one bearing capacity for entire site',
      'Ignoring group effects for closely spaced foundations',
      'Inadequate dynamic analysis for reciprocating equipment',
      'Not considering construction dewatering effects',
      'Missing long-term consolidation settlement'
    ],
    
    qualityChecklist: [
      'Criteria based on geotechnical report',
      'All structure types addressed',
      'Settlement criteria achievable',
      'Dynamic requirements defined',
      'Construction methodology considered',
      'Monitoring requirements specified'
    ],
    
    realWorldExamples: [
      'Compressor foundations: limit vibration to 25 mm/s',
      'Tank foundations: differential settlement < 1:500',
      'GBS bearing: typically 100-200 kPa on prepared seabed'
    ],
    
    applicableStandards: [
      {
        code: 'ACI 351.3R',
        title: 'Foundations for Dynamic Equipment',
        organization: 'American Concrete Institute',
        relevantSections: ['Chapter 4 - Design Criteria']
      }
    ],
    
    regulations: [
      'Local building code foundation requirements',
      'Environmental regulations for marine works'
    ],
    
    softwareTools: [
      'DYNA6',
      'SAFE for mat foundations',
      'LPILE for lateral pile analysis'
    ]
  },
  
  {
    id: 'GBD',
    code: 'GBD',
    title: 'GBS Detail Drawings',
    fullName: 'Gravity Based Structure Detail Drawings',
    phase: 'DD',
    discipline: 'Civil',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed construction drawings for the concrete GBS hull and base',
    purpose: 'To provide complete information for GBS construction',
    scope: 'Complete GBS structure including base slab, walls, and deck',
    
    detailedDescription: `GBS Detail Drawings provide comprehensive construction information for the massive concrete structure that will support the LNG facility. These drawings show reinforcement details, concrete pours sequences, embedded items, penetrations, and special features like ballast compartments. The drawings must address both the temporary construction condition and permanent installation.`,
    
    keyComponents: [
      'Concrete outline drawings',
      'Reinforcement layouts and schedules',
      'Construction joint locations',
      'Embedded plate and anchor details',
      'Penetration and sleeve details',
      'Ballast compartment arrangement',
      'Post-tensioning layouts if applicable'
    ],
    
    deliverables: [
      'Concrete general arrangement',
      'Reinforcement drawings',
      'Embedded items drawings',
      'Construction sequence drawings',
      'Concrete volume calculations',
      'Rebar quantity schedules'
    ],
    
    bestPractices: [
      'Coordinate penetrations with all disciplines early',
      'Design for slip-form construction if applicable',
      'Consider concrete supply logistics',
      'Include provisions for monitoring systems',
      'Design details for durability in marine environment',
      'Plan construction joints for water-tightness'
    ],
    
    commonMistakes: [
      'Reinforcement congestion at critical areas',
      'Missing temporary construction loads',
      'Inadequate concrete cover for marine exposure',
      'Poor construction joint details',
      'Conflicts between embedded items',
      'Insufficient access for concrete placement'
    ],
    
    qualityChecklist: [
      'All penetrations from other disciplines included',
      'Reinforcement can be placed practically',
      'Concrete cover meets durability requirements',
      'Construction sequence is feasible',
      'Temporary conditions checked',
      'Quality control requirements specified'
    ],
    
    realWorldExamples: [
      'GBS walls: typically 1-2m thick concrete',
      'Base slab: 3-5m thick with heavy reinforcement',
      'Concrete grade: C45/55 or higher for marine exposure',
      'Reinforcement: 200-400 kg/m³ in critical areas'
    ],
    
    applicableStandards: [
      {
        code: 'ACI 357R',
        title: 'Guide for the Design and Construction of Fixed Offshore Concrete Structures',
        organization: 'ACI',
        relevantSections: ['Chapter 6 - Structural Design']
      },
      {
        code: 'EN 1992-1-1',
        title: 'Eurocode 2: Design of concrete structures',
        organization: 'CEN',
        relevantSections: ['Section 4 - Durability']
      }
    ],
    
    regulations: [
      'Marine concrete regulations',
      'Classification society requirements'
    ],
    
    softwareTools: [
      'Tekla Structures for concrete',
      'AutoCAD with RebarCAD',
      'ANSYS for complex analysis',
      'SCIA Engineer'
    ]
  },
  
  {
    id: 'SDL',
    code: 'SDL',
    title: 'Site Development Layout',
    fullName: 'Site Development and Grading Plan',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFR',
    
    summary: 'Overall site development plan showing grading, drainage, and utilities',
    purpose: 'To define site preparation requirements and establish finished grade elevations',
    scope: 'Entire project site including temporary construction areas',
    
    detailedDescription: `The Site Development Layout shows the overall site grading strategy, drainage systems, road layouts, and underground utility corridors. It establishes finished grade elevations for all areas, ensures positive drainage, and identifies major earthwork quantities. This drawing coordinates civil works with all other disciplines.`,
    
    keyComponents: [
      'Existing and finished contours',
      'Drainage flow patterns',
      'Road layouts and grades',
      'Underground utility corridors',
      'Retention pond locations',
      'Cut and fill areas',
      'Construction laydown areas'
    ],
    
    deliverables: [
      'Site development plan',
      'Grading and drainage plan',
      'Road and paving layout',
      'Earthwork quantity estimates',
      'Drainage calculations'
    ],
    
    bestPractices: [
      'Balance cut and fill to minimize import/export',
      'Ensure positive drainage away from structures',
      'Consider staged construction requirements',
      'Coordinate utility corridors with all services',
      'Allow for future expansion areas',
      'Design for 100-year storm events'
    ],
    
    commonMistakes: [
      'Inadequate drainage slopes (minimum 1%)',
      'Conflicts between utilities in corridors',
      'Not considering construction access',
      'Insufficient laydown areas',
      'Poor coordination with existing utilities',
      'Underestimating settlement of filled areas'
    ],
    
    qualityChecklist: [
      'Drainage achieves positive flow',
      'All equipment foundations accommodated',
      'Road grades suitable for heavy transport',
      'Utilities do not conflict',
      'Earthwork quantities calculated',
      'Environmental requirements met'
    ],
    
    realWorldExamples: [
      'Minimum road grades: 0.5%, maximum 8% for heavy loads',
      'Drainage slopes: 1-2% minimum for paved areas',
      'Typical cut/fill: ±3m from existing grade',
      'Laydown areas: 20-30% of process area'
    ],
    
    applicableStandards: [
      {
        code: 'AASHTO Green Book',
        title: 'A Policy on Geometric Design of Highways and Streets',
        organization: 'AASHTO',
        relevantSections: ['Chapter 4 - Cross-Section Elements']
      }
    ],
    
    regulations: [
      'Local stormwater management regulations',
      'Environmental permits for earthwork',
      'Erosion and sediment control requirements'
    ],
    
    softwareTools: [
      'Civil 3D',
      'Bentley InRoads',
      'HEC-RAS for drainage',
      'GIS software'
    ]
  }
];