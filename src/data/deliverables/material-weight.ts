import { DeliverableKnowledge } from '@/types';

export const materialDeliverables: DeliverableKnowledge[] = [
  {
    id: 'IDS',
    code: 'IDS',
    title: 'Insulation Datasheets',
    fullName: 'Thermal and Acoustic Insulation Datasheets',
    phase: 'DD',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive specifications for all insulation materials and applications across the facility',
    purpose: 'To define insulation requirements ensuring thermal efficiency, personnel protection, and acoustic control',
    scope: 'All insulated equipment, piping, vessels, and acoustic treatments',
    
    detailedDescription: `Insulation Datasheets provide detailed specifications for all insulation applications in the LNG facility. These include cryogenic insulation for LNG service, hot insulation for process equipment, personnel protection, acoustic insulation, and fire protection. The datasheets specify material types, thicknesses, installation methods, and performance requirements for each application.`,
    
    keyComponents: [
      'Material specifications by temperature range',
      'Thickness tables for different services',
      'Cryogenic insulation systems',
      'Hot insulation specifications',
      'Personnel protection requirements',
      'Acoustic insulation details',
      'Vapor barrier specifications',
      'Cladding and jacketing requirements'
    ],
    
    deliverables: [
      'Insulation material datasheets',
      'Thickness calculation tables',
      'Standard installation details',
      'Cryogenic system specifications',
      'Testing requirements',
      'QA/QC procedures'
    ],
    
    bestPractices: [
      'Consider corrosion under insulation (CUI) prevention',
      'Design for thermal cycling in cryogenic service',
      'Include proper vapor barriers for cold service',
      'Specify removable insulation for valves/instruments',
      'Consider maintenance access requirements',
      'Account for thermal expansion/contraction'
    ],
    
    commonMistakes: [
      'Wrong material selection for temperature extremes',
      'Inadequate vapor barrier design',
      'Missing acoustic requirements',
      'Poor detail at termination points',
      'Ignoring CUI risk factors',
      'Insufficient thickness for personnel protection'
    ],
    
    qualityChecklist: [
      'All temperature ranges covered',
      'Materials suitable for environment',
      'CUI prevention addressed',
      'Installation details complete',
      'Testing requirements defined',
      'Maintenance provisions included'
    ],
    
    realWorldExamples: [
      'LNG pipes: Polyurethane foam with vapor barrier',
      'Hot services: Mineral wool with aluminum cladding',
      'Cryogenic tanks: Cellular glass or aerogel',
      'Personnel protection: 60°C maximum surface temperature'
    ],
    
    applicableStandards: [
      {
        code: 'ASTM C585',
        title: 'Practice for Inner and Outer Diameters of Thermal Insulation',
        organization: 'ASTM International',
        relevantSections: ['Dimensional standards']
      },
      {
        code: 'CINI',
        title: 'Insulation Manual',
        organization: 'CINI Foundation',
        relevantSections: ['Industrial insulation guidelines']
      },
      {
        code: 'ISO 12241',
        title: 'Thermal insulation for building equipment and industrial installations',
        organization: 'ISO',
        relevantSections: ['Calculation methods']
      }
    ],
    
    regulations: [
      'Energy efficiency requirements',
      'Personnel safety regulations',
      'Environmental emission standards'
    ],
    
    softwareTools: [
      'Navisworks for 3D visualization',
      'Insulcalc for thickness calculations',
      'PIPENET for heat loss calculations'
    ]
  },
  
  {
    id: 'IMS',
    code: 'IMS',
    title: 'Insulation Material Specification',
    fullName: 'Insulation Material and Installation Specification',
    phase: 'DD',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed material specifications and installation requirements for all insulation systems',
    purpose: 'To standardize insulation materials and ensure quality installation practices',
    scope: 'All insulation materials, accessories, and installation methods',
    
    detailedDescription: `The Insulation Material Specification provides comprehensive requirements for insulation materials, accessories, and installation methods. It covers material properties, quality requirements, installation procedures, inspection criteria, and acceptance standards. This specification ensures consistency and quality across all insulation work.`,
    
    keyComponents: [
      'Material property requirements',
      'Approved manufacturers list',
      'Installation procedures',
      'Surface preparation requirements',
      'Weather protection methods',
      'Quality control procedures',
      'Inspection and testing methods',
      'Repair procedures'
    ],
    
    deliverables: [
      'Material specification document',
      'Approved vendor list',
      'Installation procedures',
      'Inspection checklists',
      'Test procedures',
      'Standard details library'
    ],
    
    bestPractices: [
      'Specify materials with proven track records',
      'Include clear acceptance criteria',
      'Define storage and handling requirements',
      'Address contractor qualifications',
      'Include detailed inspection procedures',
      'Consider local availability of materials'
    ],
    
    commonMistakes: [
      'Generic specifications not suited to project',
      'Missing environmental exposure requirements',
      'Inadequate quality control procedures',
      'No provisions for repairs',
      'Conflicting requirements between documents',
      'Missing special application procedures'
    ],
    
    qualityChecklist: [
      'All materials fully specified',
      'Installation procedures comprehensive',
      'QC requirements clear',
      'Testing methods defined',
      'Acceptance criteria established',
      'Special applications addressed'
    ],
    
    realWorldExamples: [
      'Cellular glass: -260°C to +430°C service',
      'Aerogel: Superior performance for tight spaces',
      'PIR/PUR: Cost-effective for cryogenic pipes',
      'Bio-soluble fiber: Replacing ceramic fiber'
    ],
    
    applicableStandards: [
      {
        code: 'ASTM C1696',
        title: 'Guide for Industrial Thermal Insulation Systems',
        organization: 'ASTM International',
        relevantSections: ['System design guide']
      },
      {
        code: 'EN 14303-14308',
        title: 'Thermal insulation products for building equipment',
        organization: 'CEN',
        relevantSections: ['Product standards']
      }
    ],
    
    regulations: [
      'Fire safety regulations',
      'Environmental regulations (asbestos-free)',
      'Worker safety requirements'
    ],
    
    softwareTools: [
      'SpecRight for specification management',
      'AutoCAD for detail drawings',
      'Material databases'
    ]
  },
  
  {
    id: 'FPR',
    code: 'FPR',
    title: 'Fireproofing Specification',
    fullName: 'Passive Fire Protection Specification',
    phase: 'DD',
    discipline: 'Material',
    issuanceStatus: 'IFD',
    
    summary: 'Requirements for passive fire protection of structures and equipment',
    purpose: 'To protect critical structures and equipment from fire damage',
    scope: 'All structural steel, vessels, and equipment requiring fire protection',
    
    detailedDescription: `The Fireproofing Specification defines requirements for passive fire protection (PFP) systems throughout the facility. This includes fireproofing materials for structural steel, vessels, pipe racks, and critical equipment. The specification covers material selection based on fire scenarios, required fire ratings, installation methods, and inspection procedures.`,
    
    keyComponents: [
      'Fire scenario definitions',
      'Fire rating requirements by area',
      'Material specifications (concrete, intumescent, etc.)',
      'Application methods',
      'Thickness requirements',
      'Environmental durability requirements',
      'Inspection and testing procedures',
      'Repair and maintenance requirements'
    ],
    
    deliverables: [
      'Fireproofing specification',
      'Fire zone drawings',
      'Material datasheets',
      'Application procedures',
      'Inspection procedures',
      'Maintenance manual'
    ],
    
    bestPractices: [
      'Base requirements on credible fire scenarios',
      'Consider jet fire protection where needed',
      'Design for environmental durability',
      'Include provisions for penetrations',
      'Consider maintenance and repair',
      'Coordinate with drainage design'
    ],
    
    commonMistakes: [
      'Underestimating fire duration requirements',
      'Poor detailing at connections',
      'Ignoring environmental degradation',
      'Missing critical equipment',
      'Inadequate thickness verification',
      'No consideration of thermal shock'
    ],
    
    qualityChecklist: [
      'Fire scenarios properly defined',
      'All critical items identified',
      'Materials suit environment',
      'Application methods practical',
      'Inspection methods defined',
      'Maintenance considered'
    ],
    
    realWorldExamples: [
      'Structural steel: 2-hour hydrocarbon fire rating',
      'LPG vessels: 90 minutes jet fire protection',
      'Pipe racks: 1-hour rating typical',
      'ESD valves: Intumescent coatings'
    ],
    
    applicableStandards: [
      {
        code: 'API 2218',
        title: 'Fireproofing Practices in Petroleum and Petrochemical Processing Plants',
        organization: 'API',
        relevantSections: ['Section 4 - Design considerations']
      },
      {
        code: 'UL 1709',
        title: 'Rapid Rise Fire Tests of Protection Materials',
        organization: 'UL',
        relevantSections: ['Test methods']
      }
    ],
    
    regulations: [
      'Local fire codes',
      'Insurance requirements',
      'Industry guidelines (NFPA)'
    ],
    
    softwareTools: [
      'FDS (Fire Dynamics Simulator)',
      'AutoCAD for zone drawings',
      'Specification software'
    ]
  }
];

export const weightDeliverables: DeliverableKnowledge[] = [
  {
    id: 'WER',
    code: 'WER',
    title: 'Weight Estimate Report',
    fullName: 'Weight Estimate and Growth Allowance Report',
    phase: 'FEED',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    
    summary: 'Initial weight estimate with growth factors for all topsides and GBS structures',
    purpose: 'To establish weight budget and growth allowances for design and marine operations',
    scope: 'Complete facility including topsides, GBS, and temporary structures',
    
    detailedDescription: `The Weight Estimate Report provides the initial weight assessment for the entire facility, including detailed breakdowns by discipline and area. It establishes growth factors based on design maturity and historical data. This report is critical for GBS design, marine operations planning, and cost estimation. Weight control is essential for floating facilities.`,
    
    keyComponents: [
      'Weight breakdown by discipline',
      'Weight breakdown by area/module',
      'Growth factors by category',
      'Weight uncertainty analysis',
      'Center of gravity estimates',
      'Comparison with similar projects',
      'Weight reduction opportunities',
      'Critical weight items identification'
    ],
    
    deliverables: [
      'Weight estimate report',
      'Weight breakdown structure',
      'Growth allowance matrix',
      'Weight database setup',
      'COG calculations',
      'Benchmarking analysis'
    ],
    
    bestPractices: [
      'Use realistic growth factors (15-25% typical)',
      'Include all disciplines in estimate',
      'Consider full operational weight',
      'Account for marine growth',
      'Include construction aids',
      'Benchmark against similar projects'
    ],
    
    commonMistakes: [
      'Underestimating piping and cable weights',
      'Missing small bore piping and tubing',
      'Inadequate growth allowances',
      'Forgetting temporary structures',
      'Optimistic equipment weights',
      'Missing operational supplies'
    ],
    
    qualityChecklist: [
      'All equipment from EL included',
      'Bulk materials estimated',
      'Growth factors justified',
      'COG location reasonable',
      'Contingency adequate',
      'Benchmarking completed'
    ],
    
    realWorldExamples: [
      'Typical growth: 20% at FEED, 10% at DD',
      'Piping: 100-150 kg/m for large bore',
      'Structural steel: 150-200 kg/m²',
      'E&I bulks: 10-15% of equipment weight'
    ],
    
    applicableStandards: [
      {
        code: 'SAWE RP A-3',
        title: 'Mass Properties Control for Space Systems',
        organization: 'SAWE',
        relevantSections: ['Weight control principles']
      }
    ],
    
    regulations: [
      'Classification society rules',
      'Marine warranty requirements'
    ],
    
    softwareTools: [
      'AVEVA Weight Control',
      'Excel-based trackers',
      'SAP for integration',
      'Navisworks for visualization'
    ]
  },
  
  {
    id: 'COG',
    code: 'COG',
    title: 'COG Tracking Report',
    fullName: 'Center of Gravity Tracking and Control Report',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    
    summary: 'Continuous tracking of center of gravity location throughout design development',
    purpose: 'To ensure COG remains within allowable envelope for stability and marine operations',
    scope: 'Complete facility COG in all operational conditions',
    
    detailedDescription: `The COG Tracking Report monitors the center of gravity location as design progresses and weights are refined. For GBS facilities, maintaining COG within tight tolerances is critical for float-out, tow, installation, and operational stability. The report tracks both vertical and horizontal COG positions and identifies corrective actions when needed.`,
    
    keyComponents: [
      'Current COG coordinates (X, Y, Z)',
      'COG envelope requirements',
      'COG movement tracking',
      'Weight distribution maps',
      'Ballast adjustment calculations',
      'Sensitivity analyses',
      'Corrective action plans',
      'Historical trend charts'
    ],
    
    deliverables: [
      'Monthly COG reports',
      'COG envelope drawings',
      'Weight distribution plots',
      'Trend analysis charts',
      'Corrective action plans',
      'Risk assessments'
    ],
    
    bestPractices: [
      'Update COG with every major change',
      'Maintain contingency in envelope',
      'Consider all loading conditions',
      'Track trends not just snapshots',
      'Plan ballast to optimize COG',
      'Coordinate with naval architect'
    ],
    
    commonMistakes: [
      'Focusing only on dry weight',
      'Ignoring operational variations',
      'Late discovery of COG issues',
      'Poor coordination between disciplines',
      'Missing temporary conditions',
      'Inadequate documentation'
    ],
    
    qualityChecklist: [
      'All weight changes captured',
      'COG within envelope',
      'All conditions checked',
      'Trends analyzed',
      'Risks identified',
      'Actions defined'
    ],
    
    realWorldExamples: [
      'Typical COG envelope: ±0.5m horizontal',
      'VCG critical for stability',
      'TCG affects permanent list',
      'LCG impacts trim and mooring'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 19901-5',
        title: 'Weight control during engineering and construction',
        organization: 'ISO',
        relevantSections: ['COG management']
      }
    ],
    
    regulations: [
      'Classification society stability rules',
      'Marine warranty requirements'
    ],
    
    softwareTools: [
      'GHS for stability checks',
      'Weight control databases',
      '3D model for visualization',
      'Excel for tracking'
    ]
  },
  
  {
    id: 'WRG',
    code: 'WRG',
    title: 'Weight Register',
    fullName: 'Detailed Weight Control Register',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFA',
    
    summary: 'Comprehensive database tracking actual weights of all components and materials',
    purpose: 'To maintain accurate weight accounting for procurement and installation',
    scope: 'Every component, material, and system in the facility',
    
    detailedDescription: `The Weight Register is the definitive weight tracking database used throughout procurement, fabrication, and installation. It captures predicted weights, vendor-supplied weights, and actual measured weights. This living document is essential for final weight reporting, float-out calculations, and operational documentation.`,
    
    keyComponents: [
      'Equipment actual weights',
      'Bulk material quantities',
      'Structural steel weights by member',
      'Piping weights by line',
      'Cable weights by system',
      'Architectural and outfit weights',
      'Weight measurement records',
      'Reconciliation reports'
    ],
    
    deliverables: [
      'Weight register database',
      'Weekly/monthly reports',
      'Weighing procedures',
      'Reconciliation reports',
      'Final weight report',
      'As-built COG report'
    ],
    
    bestPractices: [
      'Establish clear data ownership',
      'Regular updates from vendors',
      'Systematic weighing program',
      'Track changes rigorously',
      'Reconcile predicted vs actual',
      'Maintain audit trail'
    ],
    
    commonMistakes: [
      'Poor data quality control',
      'Missing small items',
      'Late vendor data',
      'No weighing program',
      'Inadequate change control',
      'Lost data accountability'
    ],
    
    qualityChecklist: [
      'All items in database',
      'Vendor data collected',
      'Weighing program active',
      'Regular reconciliation',
      'Changes tracked',
      'Reports current'
    ],
    
    realWorldExamples: [
      'Typical accuracy: ±5% at completion',
      'Major equipment: Direct weighing',
      'Bulk materials: Calculated from quantities',
      'Final weighing: Load cells during load-out'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 19901-5',
        title: 'Petroleum and natural gas industries - Specific requirements for offshore structures',
        organization: 'ISO',
        relevantSections: ['Part 5: Weight control']
      }
    ],
    
    regulations: [
      'Marine warranty requirements',
      'Classification requirements'
    ],
    
    softwareTools: [
      'AVEVA Weight Control',
      'Specialized databases',
      'Integration with 3D model',
      'SAP integration'
    ]
  }
];