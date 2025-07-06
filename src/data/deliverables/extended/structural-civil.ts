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
      'Insufficient corrosion protection'
    ],
    
    qualityChecklist: [
      'All load types identified',
      'Load combinations per code',
      'Material specs complete',
      'Deflection limits defined',
      'Interfaces documented',
      'Future loads considered'
    ],
    
    realWorldExamples: [
      'Wind speed: 150-200 km/h design basis',
      'Seismic: Zone-specific acceleration values',
      'Live load: 5-10 kPa for platforms',
      'Temperature: -50°C to +50°C range typical'
    ],
    
    applicableStandards: [
      {
        code: 'AISC 360',
        title: 'Specification for Structural Steel Buildings',
        organization: 'AISC',
        relevantSections: ['Design requirements']
      },
      {
        code: 'ACI 318',
        title: 'Building Code Requirements for Structural Concrete',
        organization: 'ACI',
        relevantSections: ['Design criteria']
      }
    ],
    
    regulations: [
      'Local building codes',
      'Seismic design regulations',
      'Maritime structural codes'
    ],
    
    softwareTools: [
      'Excel for load calculations',
      'MathCAD for criteria',
      'Standards databases'
    ]
  },
  
  {
    id: 'SAR',
    code: 'SAR',
    title: 'Structural Analysis Report',
    fullName: 'Preliminary Structural Analysis Report',
    phase: 'FEED',
    discipline: 'Structural',
    issuanceStatus: 'IFD',
    
    summary: 'Preliminary structural analysis demonstrating design feasibility',
    purpose: 'To validate structural concept and size primary members',
    scope: 'Major structures including pipe racks, equipment structures, and buildings',
    
    detailedDescription: `The Structural Analysis Report documents preliminary structural analysis performed during FEED to validate the structural concept and establish member sizes. It includes simplified analysis models, preliminary member sizes, and quantity estimates. This analysis validates the structural concept and provides input for cost estimation and constructability reviews.`,
    
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
    
    detailedDescription: `Structural Detail Drawings provide comprehensive information for fabrication and construction of all structural steel elements. They include connection details, welding specifications, bolt patterns, and special fabrication requirements. These drawings are essential for accurate steel fabrication and safe erection.`,
    
    keyComponents: [
      'Connection details and schedules',
      'Base plate designs',
      'Welding specifications',
      'Bolt patterns and specifications',
      'Special connection details',
      'Fabrication tolerances',
      'Erection marks and sequences',
      'Material specifications'
    ],
    
    deliverables: [
      'Connection detail sheets',
      'Base plate details',
      'Typical detail library',
      'Welding procedure specs',
      'Bolt schedules',
      'Erection drawings'
    ],
    
    bestPractices: [
      'Standardize connections where possible',
      'Provide clear welding symbols',
      'Consider erection sequence in details',
      'Include all necessary dimensions',
      'Specify inspection requirements',
      'Coordinate with fabricator capabilities'
    ],
    
    commonMistakes: [
      'Over-complex connection designs',
      'Missing critical dimensions',
      'Incorrect welding specifications',
      'Inadequate bolt edge distances',
      'Ignoring fabrication constraints',
      'Poor detail clarity'
    ],
    
    qualityChecklist: [
      'All connections detailed',
      'Welding specs complete',
      'Dimensions comprehensive',
      'Standards referenced',
      'Constructability verified',
      'Shop drawing friendly'
    ],
    
    realWorldExamples: [
      'Typical connections: Shear tabs, moment connections',
      'Base plates: 25-50mm typical thickness',
      'Anchor bolts: M24-M48 common sizes',
      'Welding: E70XX electrodes standard'
    ],
    
    applicableStandards: [
      {
        code: 'AWS D1.1',
        title: 'Structural Welding Code - Steel',
        organization: 'AWS',
        relevantSections: ['Welding requirements']
      },
      {
        code: 'RCSC',
        title: 'Specification for Structural Joints Using High-Strength Bolts',
        organization: 'RCSC',
        relevantSections: ['Bolting requirements']
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
  },
  
  {
    id: 'LPS',
    code: 'LPS',
    title: 'Lifting Plans & Studies',
    fullName: 'Heavy Lift Plans and Engineering Studies',
    phase: 'DD',
    discipline: 'Structural',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed plans for lifting and installing major equipment and modules',
    purpose: 'To ensure safe lifting operations and structural integrity during lifts',
    scope: 'All heavy lifts including equipment, modules, and pre-assembled racks',
    
    detailedDescription: `Lifting Plans & Studies provide comprehensive engineering for all major lifting operations during construction. This includes crane selection, rigging design, lift point calculations, and temporary works design. The studies ensure structural integrity of lifted items and safety of lifting operations.`,
    
    keyComponents: [
      'Lift weight calculations including rigging',
      'Center of gravity determinations',
      'Crane selection and positioning',
      'Rigging design and sling arrangements',
      'Lift point design and verification',
      'Dynamic amplification factors',
      'Weather limitations',
      'Lift procedures and sequences'
    ],
    
    deliverables: [
      'Lifting study reports',
      'Rigging arrangements',
      'Lift point details',
      'Crane layout plans',
      'Lift procedures',
      'Risk assessments'
    ],
    
    bestPractices: [
      'Include adequate safety factors',
      'Verify actual weights before lifting',
      'Design lift points for multiple uses',
      'Consider weather window requirements',
      'Plan for contingencies',
      'Involve crane contractor early'
    ],
    
    commonMistakes: [
      'Underestimating rigging weight',
      'Incorrect CoG assumptions',
      'Inadequate lift point design',
      'Missing dynamic factors',
      'Poor weather planning',
      'Insufficient crane capacity'
    ],
    
    qualityChecklist: [
      'Weights verified',
      'CoG confirmed',
      'Lift points adequate',
      'Crane capacity sufficient',
      'Procedures complete',
      'Risk assessment done'
    ],
    
    realWorldExamples: [
      'Module weights: 500-2000 tonnes typical',
      'Safety factor: 2.0 minimum on lift points',
      'Dynamic factor: 1.1-1.3 typical',
      'Wind limit: 10-15 m/s for heavy lifts'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 2A',
        title: 'Planning, Designing, and Constructing Fixed Offshore Platforms',
        organization: 'API',
        relevantSections: ['Lifting guidelines']
      },
      {
        code: 'DNV 2.7-3',
        title: 'Portable Offshore Units',
        organization: 'DNV',
        relevantSections: ['Lifting sets']
      }
    ],
    
    regulations: [
      'Local lifting regulations',
      'Crane certification requirements'
    ],
    
    softwareTools: [
      'SACS for lift analysis',
      'AutoCAD for lift plans',
      'Excel for calculations',
      'Specialized rigging software'
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
      'Poor correlation between boreholes',
      'Ignoring regional geology'
    ],
    
    qualityChecklist: [
      'Investigation coverage adequate',
      'Depths sufficient for loads',
      'All lab tests completed',
      'Parameters reasonable',
      'Recommendations clear',
      'Risks identified'
    ],
    
    realWorldExamples: [
      'Borehole spacing: 50-100m typical',
      'Depth: 1.5-2x foundation width minimum',
      'CPT testing: Preferred for sands',
      'Settlement: <25mm typical allowable'
    ],
    
    applicableStandards: [
      {
        code: 'ASTM D1586',
        title: 'Standard Penetration Test',
        organization: 'ASTM',
        relevantSections: ['Test procedures']
      },
      {
        code: 'ISO 22476',
        title: 'Geotechnical investigation and testing',
        organization: 'ISO',
        relevantSections: ['Field testing']
      }
    ],
    
    regulations: [
      'Local geotechnical standards',
      'Marine investigation requirements'
    ],
    
    softwareTools: [
      'gINT for boring logs',
      'PLAXIS for analysis',
      'GeoStudio suite',
      'CPT interpretation software'
    ]
  },
  
  {
    id: 'FDN',
    code: 'FDN',
    title: 'Foundation Drawings',
    fullName: 'Foundation General Arrangement and Details',
    phase: 'DD',
    discipline: 'Civil',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed drawings of all foundations including plans, sections, and reinforcement',
    purpose: 'To provide complete foundation design for construction',
    scope: 'All equipment foundations, building foundations, and pipe rack footings',
    
    detailedDescription: `Foundation Drawings provide comprehensive details for construction of all concrete foundations. They include plan views, sections, reinforcement details, anchor bolt layouts, and construction joints. These drawings ensure foundations are properly sized, reinforced, and constructed to support the intended loads.`,
    
    keyComponents: [
      'Foundation plan layouts',
      'Sections and elevations',
      'Reinforcement details',
      'Anchor bolt plans and details',
      'Construction joint locations',
      'Concrete specifications',
      'Waterproofing details',
      'Embedded items and sleeves'
    ],
    
    deliverables: [
      'Foundation GA drawings',
      'Reinforcement drawings',
      'Anchor bolt setting plans',
      'Typical detail sheets',
      'Bar bending schedules',
      'Concrete specifications'
    ],
    
    bestPractices: [
      'Coordinate anchor bolts with equipment vendors',
      'Show clear dimensions and elevations',
      'Consider construction sequence',
      'Include adequate construction tolerances',
      'Design for equipment maintenance loads',
      'Provide corrosion protection details'
    ],
    
    commonMistakes: [
      'Incorrect anchor bolt patterns',
      'Insufficient edge distances',
      'Missing embedded items',
      'Inadequate reinforcement development',
      'Poor construction joint locations',
      'Unclear dimensional references'
    ],
    
    qualityChecklist: [
      'All equipment foundations included',
      'Anchor bolts coordinated',
      'Reinforcement adequate',
      'Dimensions complete',
      'Details constructible',
      'Specifications clear'
    ],
    
    realWorldExamples: [
      'Compressor foundations: 2-4m deep typical',
      'Rebar: #5-#8 bars common',
      'Concrete: 35-40 MPa typical strength',
      'Cover: 75mm minimum typical'
    ],
    
    applicableStandards: [
      {
        code: 'ACI 318',
        title: 'Building Code Requirements for Structural Concrete',
        organization: 'ACI',
        relevantSections: ['Chapter 13 - Foundations']
      },
      {
        code: 'ACI 351.3R',
        title: 'Foundations for Dynamic Equipment',
        organization: 'ACI',
        relevantSections: ['Design guidelines']
      }
    ],
    
    regulations: [
      'Local building codes',
      'Environmental protection for concrete'
    ],
    
    softwareTools: [
      'AutoCAD/Revit for drawings',
      'SAFE for mat foundations',
      'RAM Concept',
      'Reinforcement detailing software'
    ]
  },
  
  {
    id: 'GBS-CIV',
    code: 'GBS-CIV',
    title: 'GBS Civil Design',
    fullName: 'Gravity Based Structure Civil and Concrete Design',
    phase: 'FEED',
    discipline: 'Civil',
    issuanceStatus: 'IFD',
    
    summary: 'Civil and structural concrete design for the GBS including all compartments',
    purpose: 'To design the concrete structure of the GBS for all load conditions',
    scope: 'Complete GBS concrete structure from base slab to deck level',
    
    detailedDescription: `The GBS Civil Design encompasses all concrete elements of the Gravity Based Structure including the base slab, walls, internal bulkheads, and top deck. It addresses hydrostatic loads, soil pressures, ballast loads, and topsides interface. The design must satisfy both construction phase (floating) and operational phase (on seabed) requirements.`,
    
    keyComponents: [
      'Base slab design and reinforcement',
      'External wall design for hydrostatic pressure',
      'Internal subdivision and ballast cells',
      'Shaft and riser penetrations',
      'Top deck design for topside loads',
      'Construction joint details',
      'Post-tensioning requirements',
      'Durability and waterproofing'
    ],
    
    deliverables: [
      'GBS general arrangement',
      'Structural calculations',
      'Reinforcement drawings',
      'Construction sequence',
      'Material specifications',
      'Durability assessment'
    ],
    
    bestPractices: [
      'Design for 100+ year service life',
      'Consider all construction phases',
      'Include redundancy in critical elements',
      'Plan for differential settlement',
      'Design for inspection access',
      'Use proven waterproofing systems'
    ],
    
    commonMistakes: [
      'Underestimating construction loads',
      'Poor construction joint design',
      'Inadequate durability provisions',
      'Complex reinforcement arrangements',
      'Insufficient temporary works consideration',
      'Missing penetration details'
    ],
    
    qualityChecklist: [
      'All load cases analyzed',
      'Float stability verified',
      'Reinforcement practical',
      'Durability addressed',
      'Constructability reviewed',
      'Interfaces defined'
    ],
    
    realWorldExamples: [
      'Wall thickness: 1-2m typical',
      'Base slab: 3-5m thick common',
      'Concrete grade: C50/60 typical',
      'Reinforcement: 200-400 kg/m³'
    ],
    
    applicableStandards: [
      {
        code: 'DNV-OS-C502',
        title: 'Offshore Concrete Structures',
        organization: 'DNV',
        relevantSections: ['Design principles']
      },
      {
        code: 'EN 1992-1-1',
        title: 'Eurocode 2: Design of concrete structures',
        organization: 'CEN',
        relevantSections: ['Maritime structures']
      }
    ],
    
    regulations: [
      'Classification society rules',
      'Marine concrete regulations',
      'Environmental requirements'
    ],
    
    softwareTools: [
      'ANSYS for FEA',
      'DIANA for concrete analysis',
      'SCIA Engineer',
      'In-house GBS programs'
    ]
  },
  
  {
    id: 'PAV',
    code: 'PAV',
    title: 'Paving & Drainage Plan',
    fullName: 'Site Paving and Storm Water Drainage Plan',
    phase: 'DD',
    discipline: 'Civil',
    issuanceStatus: 'IFC',
    
    summary: 'Comprehensive plan for site paving, grading, and drainage systems',
    purpose: 'To manage surface water and provide suitable surfaces for operations',
    scope: 'All paved areas, roads, drainage systems, and containment',
    
    detailedDescription: `The Paving & Drainage Plan defines all site surfacing including roads, equipment areas, and drainage systems. It ensures proper storm water management, contaminated water segregation, and provides suitable surfaces for vehicle traffic and operations. The plan includes grading to direct water flow and prevent ponding.`,
    
    keyComponents: [
      'Site grading plan',
      'Paving layout and types',
      'Storm water drainage network',
      'Oily water drainage system',
      'Containment areas and bunds',
      'Culverts and channels',
      'Outfall locations',
      'Erosion protection'
    ],
    
    deliverables: [
      'Grading and drainage plans',
      'Paving layout drawings',
      'Drainage calculations',
      'Standard detail sheets',
      'Specifications',
      'Erosion control plans'
    ],
    
    bestPractices: [
      'Separate clean and contaminated drainage',
      'Design for local rainfall intensity',
      'Provide adequate slopes (min 1%)',
      'Consider future maintenance access',
      'Include sediment control measures',
      'Design for trafficability during construction'
    ],
    
    commonMistakes: [
      'Insufficient drainage capacity',
      'Poor grading causing ponding',
      'Missing containment provisions',
      'Inadequate erosion protection',
      'Complex drainage routes',
      'Ignoring construction phase drainage'
    ],
    
    qualityChecklist: [
      'Drainage capacity verified',
      'Slopes adequate',
      'Systems segregated',
      'Containment provided',
      'Maintenance accessible',
      'Standards met'
    ],
    
    realWorldExamples: [
      'Design storm: 1:25 to 1:100 year',
      'Road width: 6-8m typical',
      'Pavement: 150-300mm thickness',
      'Minimum slope: 1% for paved areas'
    ],
    
    applicableStandards: [
      {
        code: 'AASHTO',
        title: 'Highway Drainage Guidelines',
        organization: 'AASHTO',
        relevantSections: ['Hydraulic design']
      }
    ],
    
    regulations: [
      'Environmental discharge permits',
      'Local drainage requirements',
      'Oil spill regulations'
    ],
    
    softwareTools: [
      'Civil 3D for grading',
      'HEC-RAS for drainage',
      'StormCAD',
      'AutoCAD for plans'
    ]
  },
  
  {
    id: 'UGS',
    code: 'UGS',
    title: 'Underground Services',
    fullName: 'Underground Services and Utilities Plan',
    phase: 'DD',
    discipline: 'Civil',
    issuanceStatus: 'IFC',
    
    summary: 'Layout and design of all underground utilities and services',
    purpose: 'To coordinate and document all underground services for construction',
    scope: 'All underground piping, cables, and utilities throughout the site',
    
    detailedDescription: `The Underground Services plan shows the routing and design of all utilities installed below grade including firewater, potable water, sewers, electrical duct banks, and process piping. It ensures proper coordination between services, adequate separation, and accessibility for maintenance. The plan is critical for avoiding clashes during construction.`,
    
    keyComponents: [
      'Underground piping routes',
      'Electrical duct bank layouts',
      'Fiber optic cable routes',
      'Earthing grid layout',
      'Cathodic protection systems',
      'Manholes and pull boxes',
      'Crossing details',
      'Depth and separation requirements'
    ],
    
    deliverables: [
      'Underground services plan',
      'Sections at crossings',
      'Standard trench details',
      'Manhole details',
      'Clash detection report',
      'Installation sequence'
    ],
    
    bestPractices: [
      'Maintain service corridors',
      'Provide adequate separation',
      'Plan for future services',
      'Mark services clearly',
      'Consider installation sequence',
      'Include tracer systems'
    ],
    
    commonMistakes: [
      'Insufficient separation distances',
      'Missing crossing details',
      'No future provisions',
      'Poor coordination with foundations',
      'Inadequate marking systems',
      'Complex routing'
    ],
    
    qualityChecklist: [
      'All services shown',
      'Separations adequate',
      'Crossings detailed',
      'Depths appropriate',
      'Future considered',
      'Clashes resolved'
    ],
    
    realWorldExamples: [
      'Burial depth: 0.6-1.2m typical',
      'Separation: 300mm minimum',
      'Duct banks: Multiple 100mm conduits',
      'Manholes: 3-5m spacing for cables'
    ],
    
    applicableStandards: [
      {
        code: 'NFPA 70',
        title: 'National Electrical Code',
        organization: 'NFPA',
        relevantSections: ['Underground installations']
      }
    ],
    
    regulations: [
      'Utility separation requirements',
      'Dig safe regulations',
      'Environmental protection'
    ],
    
    softwareTools: [
      'Civil 3D for 3D coordination',
      'Navisworks for clash detection',
      'AutoCAD for 2D plans',
      'GIS for as-built records'
    ]
  }
];