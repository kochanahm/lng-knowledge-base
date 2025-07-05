import { DeliverableKnowledge } from '@/types';

export const navalDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HMA',
    code: 'HMA',
    title: 'Hydrodynamic Analysis',
    fullName: 'Hydrodynamic and Environmental Load Analysis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    
    summary: 'Analysis of wave, current, and wind loads on the GBS structure for all operational conditions',
    purpose: 'To determine environmental loads for GBS design and establish motion characteristics',
    scope: 'GBS hull, topsides, and mooring systems for all phases from tow-out to operation',
    
    detailedDescription: `The Hydrodynamic Analysis determines all environmental loads acting on the GBS throughout its lifecycle. This includes wave loads, current forces, wind loads, and the resulting motions and accelerations. The analysis covers transportation, installation, and operational phases. Results feed into structural design, mooring design, and equipment design for motion-sensitive systems.`,
    
    keyComponents: [
      'Wave load calculations (Morison/Diffraction)',
      'Current force calculations',
      'Wind load assessments',
      'Motion response amplitude operators (RAOs)',
      'Extreme and fatigue load cases',
      'Model test correlation if available',
      'Load combinations for design'
    ],
    
    deliverables: [
      'Hydrodynamic analysis report',
      'Load case matrices',
      'Motion RAO plots',
      'Time domain simulation results',
      'Model test report (if applicable)',
      'Design load summary'
    ],
    
    bestPractices: [
      'Use appropriate wave theories for water depth',
      'Consider wave directionality and spreading',
      'Include wind-wave correlation',
      'Validate with model tests for complex geometries',
      'Consider both operational and survival conditions',
      'Account for marine growth effects'
    ],
    
    commonMistakes: [
      'Using inappropriate wave theory',
      'Neglecting wave-current interaction',
      'Missing critical wave directions',
      'Underestimating wind loads on topsides',
      'Not considering transit conditions',
      'Ignoring second-order wave effects'
    ],
    
    qualityChecklist: [
      'Environmental data matches metocean report',
      'All relevant load cases included',
      'Appropriate analysis methods used',
      'Results validated against similar projects',
      'Conservatism appropriate to design stage',
      'Interface loads clearly defined'
    ],
    
    realWorldExamples: [
      'Typical 100-year wave heights: 15-25m depending on location',
      'Current speeds: 1-2 m/s surface currents common',
      'Motion criteria: < 0.15g acceleration for equipment',
      'Model tests often at 1:50 to 1:100 scale'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 2SK',
        title: 'Design and Analysis of Stationkeeping Systems',
        organization: 'API',
        relevantSections: ['Section 6 - Environmental Conditions']
      },
      {
        code: 'ISO 19901-1',
        title: 'Petroleum and natural gas industries - Metocean design and operating considerations',
        organization: 'ISO',
        relevantSections: ['Section 8 - Waves', 'Section 9 - Currents']
      },
      {
        code: 'DNVGL-RP-C205',
        title: 'Environmental Conditions and Environmental Loads',
        organization: 'DNV GL',
        relevantSections: ['Section 3 - Waves', 'Section 5 - Current']
      }
    ],
    
    regulations: [
      'Flag state requirements for marine operations',
      'Classification society rules',
      'Local marine authority requirements'
    ],
    
    softwareTools: [
      'WAMIT',
      'MOSES',
      'OrcaFlex',
      'ANSYS Aqwa',
      'SIMO'
    ]
  },
  
  {
    id: 'STA',
    code: 'STA',
    title: 'Stability Analysis',
    fullName: 'GBS Stability Analysis for All Phases',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive stability assessment for construction, transportation, installation, and operation',
    purpose: 'To ensure GBS stability meets requirements during all project phases',
    scope: 'GBS stability from dry dock through operational life including damaged conditions',
    
    detailedDescription: `The Stability Analysis demonstrates that the GBS meets all stability criteria throughout its lifecycle. This includes initial stability in dry dock, float-out stability, tow stability with varying drafts, installation stability during ballasting, and operational stability including damage cases. The analysis must consider all weight conditions and environmental loads.`,
    
    keyComponents: [
      'Intact stability calculations',
      'Damage stability assessments',
      'Stability during ballasting operations',
      'Free surface effects',
      'Wind heel moments',
      'Tow stability at various drafts',
      'Inclining test requirements'
    ],
    
    deliverables: [
      'Stability booklet',
      'Loading condition manual',
      'Ballast operation procedures',
      'Damage control plan',
      'Inclining test procedure',
      'Stability software model'
    ],
    
    bestPractices: [
      'Include all operational weight cases',
      'Consider construction tolerances on COG',
      'Verify damage stability requirements early',
      'Plan for stability monitoring systems',
      'Include temporary equipment weights',
      'Consider partially filled tanks'
    ],
    
    commonMistakes: [
      'Optimistic weight and COG estimates',
      'Missing free surface effects',
      'Inadequate damage cases',
      'Not considering ice accretion',
      'Ignoring construction phase stability',
      'Unrealistic ballast rates'
    ],
    
    qualityChecklist: [
      'All weight conditions analyzed',
      'Stability criteria clearly defined',
      'Damage cases meet regulations',
      'Free surface effects included',
      'Environmental loads considered',
      'Operating procedures practical'
    ],
    
    realWorldExamples: [
      'Minimum GM: typically 1-3m for GBS',
      'Damage stability: 1 or 2 compartment standard',
      'Wind heel: usually limited to 5 degrees',
      'Inclining test accuracy: ±2% displacement'
    ],
    
    applicableStandards: [
      {
        code: 'IMO MODU Code',
        title: 'Code for Construction and Equipment of Mobile Offshore Drilling Units',
        organization: 'International Maritime Organization',
        relevantSections: ['Chapter 3 - Stability and Subdivision']
      },
      {
        code: 'DNVGL-OS-C301',
        title: 'Stability and Watertight Integrity',
        organization: 'DNV GL',
        relevantSections: ['Section 2 - Intact Stability', 'Section 3 - Damage Stability']
      }
    ],
    
    regulations: [
      'Flag state stability requirements',
      'Classification society rules',
      'Marine warranty surveyor requirements'
    ],
    
    softwareTools: [
      'GHS (General HydroStatics)',
      'MOSES',
      'Maxsurf Stability',
      'NAPA'
    ]
  },
  
  {
    id: 'BCP',
    code: 'BCP',
    title: 'Ballasting Concept Plan',
    fullName: 'Ballasting System Concept and Philosophy',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFR',
    
    summary: 'Conceptual design of ballast system including tank arrangement and pumping capacity',
    purpose: 'To define ballast system requirements for all operational phases',
    scope: 'Complete ballast system from tanks through pumps, piping, and control',
    
    detailedDescription: `The Ballasting Concept Plan establishes the overall ballasting philosophy and system design for the GBS. It defines ballast tank arrangements, pumping system capacity, piping network concept, and control system requirements. The plan must address normal operations, emergency deballasting, and system redundancy requirements.`,
    
    keyComponents: [
      'Ballast tank arrangement and volumes',
      'Pump capacity requirements',
      'Piping system concept',
      'Control system philosophy',
      'Emergency deballasting provisions',
      'Ballast water treatment requirements',
      'Redundancy and reliability'
    ],
    
    deliverables: [
      'Ballasting concept report',
      'Tank arrangement drawings',
      'System schematic diagram',
      'Pump capacity calculations',
      'Control philosophy document',
      'Equipment specifications (preliminary)'
    ],
    
    bestPractices: [
      'Size pumps for reasonable operation times',
      'Provide adequate redundancy',
      'Consider ballast water treatment early',
      'Design for monitoring and control',
      'Include emergency response capability',
      'Consider maintenance access'
    ],
    
    commonMistakes: [
      'Undersized pumping capacity',
      'Inadequate tank subdivision',
      'No cross-connection flexibility',
      'Ignoring ballast water regulations',
      'Poor access for maintenance',
      'Insufficient instrumentation'
    ],
    
    qualityChecklist: [
      'Capacity meets all operational needs',
      'Redundancy requirements satisfied',
      'System can handle emergencies',
      'Ballast water treatment included',
      'Control system defined',
      'Maintenance considered'
    ],
    
    realWorldExamples: [
      'Typical pump capacity: 1000-3000 m³/hr per pump',
      'Ballast operations: 12-24 hours for major changes',
      'Tank sizes: 500-2000 m³ typical',
      'Redundancy: N+1 for critical operations'
    ],
    
    applicableStandards: [
      {
        code: 'IMO BWM Convention',
        title: 'Ballast Water Management Convention',
        organization: 'IMO',
        relevantSections: ['Regulation B-3: Ballast Water Management']
      }
    ],
    
    regulations: [
      'Ballast water treatment regulations',
      'Classification society requirements',
      'Environmental regulations'
    ],
    
    softwareTools: [
      'AutoCAD P&ID',
      'PIPENET for hydraulics',
      'Excel for capacity calculations'
    ]
  },
  
  {
    id: 'MRP',
    code: 'MRP',
    title: 'Mooring Plan',
    fullName: 'Permanent Mooring System Design',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed design of permanent mooring system for GBS station-keeping',
    purpose: 'To provide station-keeping within allowable offsets under all environmental conditions',
    scope: 'Complete mooring system including lines, anchors, fairleads, and monitoring',
    
    detailedDescription: `The Mooring Plan provides the detailed design of the permanent mooring system that keeps the GBS on location. This includes mooring line configuration, anchor design, connection details, and monitoring systems. The design must accommodate all environmental loads while maintaining the GBS position within allowable tolerances for riser and export systems.`,
    
    keyComponents: [
      'Mooring configuration and geometry',
      'Line specifications (chain/wire/synthetic)',
      'Anchor design and locations',
      'Fairlead and connection details',
      'Pretension requirements',
      'Fatigue life assessments',
      'Monitoring system requirements'
    ],
    
    deliverables: [
      'Mooring arrangement drawings',
      'Mooring analysis report',
      'Line and anchor specifications',
      'Installation procedures',
      'Inspection and monitoring plan',
      'Fatigue analysis report'
    ],
    
    bestPractices: [
      'Design for 100-year return period conditions',
      'Include fatigue analysis for line life',
      'Consider installation tolerances',
      'Plan for line inspection and replacement',
      'Verify anchor holding capacity',
      'Include redundancy in design'
    ],
    
    commonMistakes: [
      'Underestimating fatigue damage',
      'Poor anchor placement for holding capacity',
      'Inadequate consideration of line dynamics',
      'Missing long-term seabed changes',
      'Insufficient installation tolerances',
      'No provision for line replacement'
    ],
    
    qualityChecklist: [
      'Offset limits met in all conditions',
      'Line safety factors adequate',
      'Fatigue life exceeds design life',
      'Installation method feasible',
      'Inspection plan practical',
      'Redundancy verified'
    ],
    
    realWorldExamples: [
      'Typical mooring: 8-12 lines for GBS',
      'Line diameter: 100-150mm chain common',
      'Anchor types: drag, suction, or piled',
      'Design life: 25+ years typical'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 2SK',
        title: 'Design and Analysis of Stationkeeping Systems',
        organization: 'API',
        relevantSections: ['Section 4 - Design Criteria', 'Section 9 - Mooring Systems']
      },
      {
        code: 'DNVGL-OS-E301',
        title: 'Position Mooring',
        organization: 'DNV GL',
        relevantSections: ['Chapter 2 - Design Principles']
      }
    ],
    
    regulations: [
      'Classification society approval required',
      'Flag state requirements',
      'Local marine regulations'
    ],
    
    softwareTools: [
      'OrcaFlex',
      'Ariane',
      'MOSES',
      'Flexcom'
    ]
  },
  
  {
    id: 'BLP',
    code: 'BLP',
    title: 'Ballasting Plan - Final',
    fullName: 'Detailed Ballasting and De-ballasting Procedures',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFC',
    
    summary: 'Step-by-step procedures for all ballasting operations from float-out to installation',
    purpose: 'To provide safe and controlled ballasting procedures for marine operations',
    scope: 'All ballasting operations including contingencies and emergencies',
    
    detailedDescription: `The final Ballasting Plan provides detailed step-by-step procedures for all ballasting operations throughout the GBS lifecycle. This includes initial float-out, tow draft adjustments, and final installation ballasting. Each step includes tank levels, stability checks, time estimates, and contingency actions. The plan ensures safe operations within stability limits.`,
    
    keyComponents: [
      'Float-out ballasting sequence',
      'Tow condition adjustments',
      'Installation ballasting steps',
      'Stability checks at each stage',
      'Time estimates and pump schedules',
      'Emergency procedures',
      'Communication protocols'
    ],
    
    deliverables: [
      'Detailed ballasting procedures',
      'Ballast condition booklet',
      'Quick reference cards',
      'Emergency response procedures',
      'Tank sounding tables',
      'Stability calculation sheets'
    ],
    
    bestPractices: [
      'Include clear hold points for checks',
      'Provide graphical tank status displays',
      'Include weather criteria for operations',
      'Plan for pump failures',
      'Verify procedures in simulations',
      'Train operations team thoroughly'
    ],
    
    commonMistakes: [
      'Overly complex procedures',
      'Insufficient detail on critical steps',
      'No provision for equipment failure',
      'Unrealistic time estimates',
      'Poor communication procedures',
      'Missing emergency responses'
    ],
    
    qualityChecklist: [
      'Every step maintains adequate stability',
      'Time estimates are realistic',
      'Emergency procedures included',
      'Weather limits defined',
      'Communication plan clear',
      'Training requirements identified'
    ],
    
    realWorldExamples: [
      'Float-out: typically 6-12 hours',
      'Installation: 24-48 hours common',
      'Draft accuracy: ±100mm achievable',
      'Multiple pump trains for redundancy'
    ],
    
    applicableStandards: [
      {
        code: 'DNVGL-ST-N001',
        title: 'Marine Operations and Marine Warranty',
        organization: 'DNV GL',
        relevantSections: ['Chapter 6 - Float-out', 'Chapter 9 - Installation']
      }
    ],
    
    regulations: [
      'Marine warranty surveyor approval',
      'Flag state notifications',
      'Port authority requirements'
    ],
    
    softwareTools: [
      'GHS for stability checks',
      'Excel for procedures',
      'Marine operations software'
    ]
  },
  
  {
    id: 'TAP',
    code: 'TAP',
    title: 'Tow-out Analysis - Preliminary',
    fullName: 'Preliminary Tow-out Feasibility Analysis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFR',
    
    summary: 'Initial assessment of GBS towage requirements and feasibility',
    purpose: 'To confirm tow-out feasibility and establish preliminary tug requirements',
    scope: 'Tow route assessment, tug sizing, and preliminary procedures',
    
    detailedDescription: `The Preliminary Tow-out Analysis assesses the feasibility of towing the GBS from the construction site to the installation location. It includes route assessment, weather window analysis, preliminary tug sizing, tow speed predictions, and identification of contingency ports. This analysis informs construction site selection and schedule planning.`,
    
    keyComponents: [
      'Tow route options and distances',
      'Environmental conditions assessment',
      'Tow resistance calculations',
      'Preliminary tug requirements',
      'Weather window analysis',
      'Contingency port identification',
      'Duration estimates'
    ],
    
    deliverables: [
      'Tow feasibility report',
      'Route assessment maps',
      'Tug requirement calculations',
      'Weather window statistics',
      'Preliminary tow procedures',
      'Risk assessment'
    ],
    
    bestPractices: [
      'Use conservative resistance estimates',
      'Include adequate tug power margins',
      'Identify multiple route options',
      'Consider seasonal weather patterns',
      'Plan for contingency scenarios',
      'Verify water depths along route'
    ],
    
    commonMistakes: [
      'Underestimating tow resistance',
      'Ignoring seasonal weather restrictions',
      'Insufficient contingency planning',
      'Optimistic speed predictions',
      'Missing shallow water effects',
      'Inadequate tug power'
    ],
    
    qualityChecklist: [
      'Route depths verified',
      'Weather data representative',
      'Tug power adequate with margin',
      'Contingencies identified',
      'Duration estimates reasonable',
      'Risks assessed and mitigated'
    ],
    
    realWorldExamples: [
      'Tow speeds: 3-5 knots typical for GBS',
      'Tug power: 15,000-30,000 HP total common',
      'Weather windows: 3-5 day minimum',
      'Tow distances: can be 1000+ nautical miles'
    ],
    
    applicableStandards: [
      {
        code: 'DNVGL-ST-N001',
        title: 'Marine Operations and Marine Warranty',
        organization: 'DNV GL',
        relevantSections: ['Chapter 8 - Towing']
      }
    ],
    
    regulations: [
      'International towing regulations',
      'Transit country requirements',
      'Insurance requirements'
    ],
    
    softwareTools: [
      'MOSES for tow analysis',
      'Route planning software',
      'Metocean databases'
    ]
  },
  
  {
    id: 'TPR',
    code: 'TPR',
    title: 'Tow-out Procedures',
    fullName: 'Detailed Tow-out and Marine Operations Manual',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFA',
    
    summary: 'Comprehensive procedures for GBS tow-out operations',
    purpose: 'To provide detailed guidance for safe execution of tow operations',
    scope: 'Complete tow operation from disconnect at yard through hook-up at field',
    
    detailedDescription: `The Tow-out Procedures document provides comprehensive step-by-step instructions for the entire tow operation. This includes pre-tow preparations, towline connections, departure procedures, offshore towing guidelines, weather decision criteria, emergency procedures, and arrival operations. The manual serves as the primary reference for the marine crew during operations.`,
    
    keyComponents: [
      'Pre-departure checklist',
      'Towline connection procedures',
      'Navigation and communication plan',
      'Weather criteria and decision points',
      'Emergency response procedures',
      'Arrival and positioning procedures',
      'Roles and responsibilities'
    ],
    
    deliverables: [
      'Marine operations manual',
      'Tow arrangement drawings',
      'Emergency response plan',
      'Communication procedures',
      'Weather decision matrix',
      'Crew briefing package'
    ],
    
    bestPractices: [
      'Keep procedures clear and actionable',
      'Include visual aids and diagrams',
      'Define clear weather limits',
      'Address all credible emergencies',
      'Specify communication protocols',
      'Include lessons learned from similar tows'
    ],
    
    commonMistakes: [
      'Overly complex procedures',
      'Vague weather criteria',
      'Insufficient emergency planning',
      'Poor definition of responsibilities',
      'Missing critical notifications',
      'Inadequate contingency options'
    ],
    
    qualityChecklist: [
      'All operations phases covered',
      'Weather limits clearly defined',
      'Emergency procedures comprehensive',
      'Communications plan complete',
      'Responsibilities unambiguous',
      'Marine warranty surveyor approved'
    ],
    
    realWorldExamples: [
      'Weather limits: typically Hs < 3-4m for towing',
      'Tow bridle: often 3-point for redundancy',
      'Navigation: dedicated tow coordinator',
      'Communications: multiple redundant systems'
    ],
    
    applicableStandards: [
      {
        code: 'Guidelines for Safe Ocean Towing',
        title: 'Guidelines for Safe Ocean Towing',
        organization: 'International Chamber of Shipping',
        relevantSections: ['All sections']
      }
    ],
    
    regulations: [
      'Flag state towing regulations',
      'International ColRegs',
      'Port state requirements'
    ],
    
    softwareTools: [
      'MS Word for procedures',
      'AutoCAD for drawings',
      'Project planning software'
    ]
  }
];