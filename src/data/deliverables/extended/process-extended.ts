import { DeliverableKnowledge } from '@/types';

export const processExtendedDeliverables: DeliverableKnowledge[] = [
  {
    id: 'PDB',
    code: 'PDB',
    title: 'Process Design Basis',
    fullName: 'Process Design Basis and Criteria',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Fundamental process design criteria establishing all design parameters and constraints',
    purpose: 'To define comprehensive process design requirements ensuring consistent design approach',
    scope: 'All process systems including feed conditioning, liquefaction, storage, and utilities',
    
    detailedDescription: `The Process Design Basis is the cornerstone document that establishes all fundamental process parameters, design philosophies, and constraints. It includes feed gas composition ranges, product specifications, turndown requirements, design margins, and operating philosophies. This document ensures all subsequent process design work is consistent and meets project objectives.`,
    
    keyComponents: [
      'Feed gas composition envelope',
      'Product specifications (LNG, LPG, condensate)',
      'Design capacity and turndown requirements',
      'Ambient conditions and site data',
      'Utility specifications and availability',
      'Process design margins and factors',
      'Operating philosophy and modes',
      'Reliability and availability targets'
    ],
    
    deliverables: [
      'Process design basis document',
      'Feed gas composition analysis',
      'Product specification sheets',
      'Design margin philosophy',
      'Operating modes matrix',
      'Utility balance summary'
    ],
    
    bestPractices: [
      'Include full range of feed gas compositions',
      'Define clear design margins philosophy',
      'Consider all operating scenarios',
      'Align with commercial agreements',
      'Include future expansion provisions',
      'Define battery limits clearly'
    ],
    
    commonMistakes: [
      'Narrow feed gas composition range',
      'Unrealistic availability targets',
      'Missing seasonal variations',
      'Inadequate turndown consideration',
      'Unclear battery limit definitions',
      'Optimistic ambient conditions'
    ],
    
    qualityChecklist: [
      'All design parameters defined',
      'Margins clearly justified',
      'Operating modes comprehensive',
      'Future provisions included',
      'Stakeholder alignment achieved',
      'Regulatory requirements captured'
    ],
    
    realWorldExamples: [
      'Feed gas: 0.5-5% CO2 typical range',
      'LNG production: 3-5 MTPA per train',
      'Turndown: 50-70% typical requirement',
      'Availability: 92-95% typical target'
    ],
    
    applicableStandards: [
      {
        code: 'API 14J',
        title: 'Design and Hazards Analysis for Offshore Production Facilities',
        organization: 'API',
        relevantSections: ['Design basis requirements']
      }
    ],
    
    regulations: [
      'Environmental permit requirements',
      'Product quality regulations',
      'Safety design requirements'
    ],
    
    softwareTools: [
      'Process simulation software',
      'Database management systems',
      'Document control systems'
    ]
  },
  
  {
    id: 'UFD',
    code: 'UFD',
    title: 'Utility Flow Diagrams',
    fullName: 'Utility Systems Flow Diagrams',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Flow diagrams showing all utility systems including generation, distribution, and users',
    purpose: 'To define utility systems configuration and ensure adequate capacity for all users',
    scope: 'All utilities including steam, cooling water, instrument air, nitrogen, fuel gas',
    
    detailedDescription: `Utility Flow Diagrams (UFDs) show the complete utility systems from generation through distribution to end users. They include utility generation capacities, distribution headers, major users with consumption rates, and interconnections between systems. UFDs are critical for ensuring reliable utility supply and identifying optimization opportunities.`,
    
    keyComponents: [
      'Utility generation equipment and capacities',
      'Distribution header configurations',
      'Major utility consumers with demands',
      'Normal and emergency operating modes',
      'Interconnections and backup provisions',
      'Pressure levels and temperature ranges',
      'Control and regulation schemes',
      'Future expansion provisions'
    ],
    
    deliverables: [
      'Individual UFDs by utility type',
      'Utility balance summary tables',
      'Utility generation philosophy',
      'Distribution network diagrams',
      'Emergency backup schemes',
      'Utility optimization report'
    ],
    
    bestPractices: [
      'Show clear supply and demand balance',
      'Include all operating scenarios',
      'Design for N+1 redundancy on critical utilities',
      'Consider startup and shutdown demands',
      'Plan for future expansion needs',
      'Optimize headers for minimum pressure drop'
    ],
    
    commonMistakes: [
      'Underestimating peak demands',
      'Missing simultaneous user scenarios',
      'Inadequate emergency backup',
      'Poor header sizing for future',
      'Complex control schemes',
      'Missing utility interactions'
    ],
    
    qualityChecklist: [
      'All utilities covered',
      'Balances verified for all cases',
      'Redundancy requirements met',
      'Future provisions included',
      'P&ID consistency checked',
      'Optimization opportunities identified'
    ],
    
    realWorldExamples: [
      'Instrument air: 7 barg typical, 110% capacity',
      'Cooling water: 10-15°C rise typical',
      'HP steam: 40-60 barg for large turbines',
      'Nitrogen: 99.9% purity for inerting'
    ],
    
    applicableStandards: [
      {
        code: 'API 14C',
        title: 'Analysis, Design, Installation, and Testing of Basic Surface Safety Systems',
        organization: 'API',
        relevantSections: ['Utility systems']
      }
    ],
    
    regulations: [
      'Environmental emissions limits',
      'Energy efficiency requirements'
    ],
    
    softwareTools: [
      'AutoCAD P&ID',
      'Process simulation for balances',
      'Hydraulic analysis software'
    ]
  },
  
  {
    id: 'PSM',
    code: 'PSM',
    title: 'Process Safeguarding Memorandum',
    fullName: 'Process Safeguarding Philosophy and Memorandum',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive document defining all process safeguarding strategies and systems',
    purpose: 'To establish consistent safeguarding philosophy ensuring safe operation under all conditions',
    scope: 'All process systems including overpressure, overtemperature, and process upset scenarios',
    
    detailedDescription: `The Process Safeguarding Memorandum defines the overall strategy for protecting equipment and personnel from process hazards. It establishes the hierarchy of protection layers, from inherent safety through passive and active systems to emergency response. The document guides the design of relief systems, shutdown logic, and operational procedures.`,
    
    keyComponents: [
      'Safeguarding philosophy and hierarchy',
      'Overpressure protection strategy',
      'Temperature protection systems',
      'Level and flow protection schemes',
      'Emergency shutdown philosophy',
      'Relief and blowdown system design basis',
      'Safeguarding against common mode failures',
      'Human factors considerations'
    ],
    
    deliverables: [
      'Safeguarding memorandum document',
      'Protection layers diagram',
      'Relief philosophy document',
      'Shutdown hierarchy matrix',
      'Safeguarding gap analysis',
      'IPL (Independent Protection Layer) assessment'
    ],
    
    bestPractices: [
      'Apply hierarchy of controls consistently',
      'Design for common mode failures',
      'Include clear reset philosophy',
      'Consider human factors in design',
      'Align with corporate standards',
      'Review with operations team early'
    ],
    
    commonMistakes: [
      'Over-reliance on single protection layer',
      'Inadequate consideration of human error',
      'Complex reset procedures',
      'Missing utility failure scenarios',
      'Inconsistent application across units',
      'Poor integration with control system'
    ],
    
    qualityChecklist: [
      'All hazards addressed',
      'Protection layers independent',
      'Philosophy clearly documented',
      'Consistent with HAZOP findings',
      'Operations input incorporated',
      'Regulatory compliance verified'
    ],
    
    realWorldExamples: [
      'Typical layers: 4-7 for high hazard scenarios',
      'HIPPS: SIL 3 for pipeline protection',
      'Relief sizing: Fire case often governs',
      'Blowdown: 15 minutes to 50% typical'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61511',
        title: 'Functional safety - Safety instrumented systems',
        organization: 'IEC',
        relevantSections: ['Protection layer concepts']
      },
      {
        code: 'API 521',
        title: 'Pressure-relieving and Depressuring Systems',
        organization: 'API',
        relevantSections: ['Relief system design']
      }
    ],
    
    regulations: [
      'Process Safety Management (PSM)',
      'COMAH regulations',
      'Local safety requirements'
    ],
    
    softwareTools: [
      'LOPA software',
      'Relief sizing programs',
      'SIL calculation tools'
    ]
  },
  
  {
    id: 'FBS',
    code: 'FBS',
    title: 'Flare & Blowdown Study',
    fullName: 'Flare System and Emergency Blowdown Study',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive study of flare system capacity and emergency depressurization requirements',
    purpose: 'To ensure safe disposal of relief and blowdown streams under all scenarios',
    scope: 'Complete flare and blowdown system including headers, KO drums, and flare stack',
    
    detailedDescription: `The Flare & Blowdown Study analyzes all relief and emergency depressurization scenarios to size the flare system components. It includes individual relief loads, blowdown rates, simultaneous release scenarios, and radiation/dispersion analysis. The study ensures the flare system can safely handle all credible release scenarios while meeting environmental requirements.`,
    
    keyComponents: [
      'Relief load summary for all sources',
      'Blowdown rate calculations',
      'Simultaneous release scenarios',
      'Flare header hydraulic analysis',
      'KO drum sizing for liquid entrainment',
      'Flare stack height and radiation analysis',
      'Dispersion studies for toxic components',
      'Flare gas recovery provisions'
    ],
    
    deliverables: [
      'Flare study report',
      'Relief load summary tables',
      'Blowdown calculations',
      'Hydraulic analysis results',
      'Radiation contour plots',
      'Dispersion study results',
      'Flare system P&IDs'
    ],
    
    bestPractices: [
      'Consider global scenarios carefully',
      'Include adequate design margins',
      'Verify backpressure effects on PSVs',
      'Design for two-phase flow where applicable',
      'Consider noise and environmental limits',
      'Plan for future unit additions'
    ],
    
    commonMistakes: [
      'Underestimating simultaneous releases',
      'Ignoring two-phase flow effects',
      'Inadequate KO drum sizing',
      'Missing small continuous releases',
      'Poor selection of design scenarios',
      'Insufficient radiation assessment'
    ],
    
    qualityChecklist: [
      'All relief sources included',
      'Credible scenarios defined',
      'Hydraulics verified',
      'Radiation limits met',
      'Environmental compliance confirmed',
      'Future capacity allocated'
    ],
    
    realWorldExamples: [
      'Design case: Often power failure scenario',
      'Radiation limit: 1.58 kW/m² at grade',
      'KO drum: 3-5 minutes retention typical',
      'Flare tip: Sonic or HP assisted common'
    ],
    
    applicableStandards: [
      {
        code: 'API 521',
        title: 'Pressure-relieving and Depressuring Systems',
        organization: 'API',
        relevantSections: ['Section 5 - Disposal systems']
      },
      {
        code: 'API 537',
        title: 'Flare Details for General Refinery and Petrochemical Service',
        organization: 'API',
        relevantSections: ['Flare system design']
      }
    ],
    
    regulations: [
      'Environmental emission limits',
      'Noise regulations',
      'Safety distance requirements'
    ],
    
    softwareTools: [
      'Flaresim',
      'Aspen Flare System Analyzer',
      'PHAST for dispersion',
      'Pipenet for hydraulics'
    ]
  },
  
  {
    id: 'HYD',
    code: 'HYD',
    title: 'Hydraulic Analysis',
    fullName: 'Process System Hydraulic Analysis',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed hydraulic analysis of all process systems confirming line sizes and pump requirements',
    purpose: 'To verify hydraulic design and ensure stable operation under all flow conditions',
    scope: 'All process piping systems, pumps, compressors, and control valves',
    
    detailedDescription: `The Hydraulic Analysis provides detailed calculations for all process fluid systems, verifying line sizes, pump heads, control valve pressure drops, and system stability. It includes steady-state and transient analyses, surge protection requirements, and minimum flow provisions. The analysis ensures reliable operation across the full operating envelope.`,
    
    keyComponents: [
      'Line sizing calculations and criteria',
      'Pump hydraulic calculations',
      'Control valve sizing and rangeability',
      'System curve development',
      'Transient analysis (water hammer, surge)',
      'Minimum flow and spillback requirements',
      'Two-phase flow analysis where applicable',
      'Hydraulic balance for parallel trains'
    ],
    
    deliverables: [
      'Hydraulic calculation report',
      'Line list with sizes verified',
      'Pump datasheets finalized',
      'Control valve datasheets',
      'Surge analysis report',
      'System curve diagrams',
      'Isometric sketches for critical lines'
    ],
    
    bestPractices: [
      'Use appropriate friction factors',
      'Include all fittings and valves',
      'Consider full operating range',
      'Verify NPSH with margins',
      'Check for flow-induced vibration',
      'Design for future fouling'
    ],
    
    commonMistakes: [
      'Optimistic friction factors',
      'Missing elevation changes',
      'Inadequate NPSH margins',
      'Ignoring two-phase flow',
      'Poor control valve selection',
      'Underestimating pressure drops'
    ],
    
    qualityChecklist: [
      'All lines hydraulically verified',
      'Pump selections confirmed',
      'Control valves properly sized',
      'Surge protection adequate',
      'Future capacity considered',
      'Constructability verified'
    ],
    
    realWorldExamples: [
      'Velocity limits: 3 m/s liquid, 20 m/s gas typical',
      'NPSH margin: 1.5m or 10% minimum',
      'Control valve: 20-80% travel normal',
      'Pressure drop: <10% of upstream typical'
    ],
    
    applicableStandards: [
      {
        code: 'API 14E',
        title: 'Design and Installation of Offshore Production Platform Piping Systems',
        organization: 'API',
        relevantSections: ['Sizing criteria']
      }
    ],
    
    regulations: [
      'Pipeline regulations for export lines',
      'Environmental noise limits'
    ],
    
    softwareTools: [
      'PIPESIM',
      'Pipenet',
      'AFT Fathom',
      'Sunset surge analysis'
    ]
  },
  
  {
    id: 'LSC',
    code: 'LSC',
    title: 'Line Sizing Calculations',
    fullName: 'Process Line Sizing Calculations',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Preliminary line sizing for all process and utility piping systems',
    purpose: 'To establish economical pipe sizes meeting hydraulic and process requirements',
    scope: 'All process and utility lines shown on P&IDs',
    
    detailedDescription: `Line Sizing Calculations determine preliminary pipe diameters for all process and utility systems based on flow rates, fluid properties, and economic considerations. The calculations balance capital cost against operating cost (pressure drop) while ensuring velocities are within acceptable limits for the service. These calculations form the basis for piping material take-offs and detailed hydraulic analysis.`,
    
    keyComponents: [
      'Line sizing criteria by service',
      'Velocity limits for different fluids',
      'Economic pipe diameter calculations',
      'Pressure drop allocations',
      'Erosional velocity checks',
      'Two-phase flow considerations',
      'Future capacity factors',
      'Minimum sizes for maintenance'
    ],
    
    deliverables: [
      'Line sizing calculation sheets',
      'Line sizing criteria document',
      'Preliminary line list',
      'Velocity summary tables',
      'Economic analysis results',
      'Two-phase flow assessments'
    ],
    
    bestPractices: [
      'Use consistent economic criteria',
      'Consider full flow range',
      'Include corrosion allowance effects',
      'Check for noise and vibration',
      'Standardize on common sizes',
      'Allow for future capacity'
    ],
    
    commonMistakes: [
      'Ignoring minimum flow conditions',
      'Missing two-phase transitions',
      'Inconsistent velocity criteria',
      'Not checking standard pipe sizes',
      'Overlooking drain ability',
      'Excessive line size reductions'
    ],
    
    qualityChecklist: [
      'All P&ID lines sized',
      'Criteria documented',
      'Velocities within limits',
      'Economics optimized',
      'Standard sizes used',
      'Future needs considered'
    ],
    
    realWorldExamples: [
      'Liquid lines: 1-3 m/s typical velocity',
      'Gas lines: 10-20 m/s common',
      'Two-phase: Froude number checks',
      'Minimum size: 2" for maintenance'
    ],
    
    applicableStandards: [
      {
        code: 'NORSOK P-001',
        title: 'Process Design',
        organization: 'NORSOK',
        relevantSections: ['Line sizing guidelines']
      }
    ],
    
    regulations: [
      'Noise exposure regulations',
      'Pipeline codes for export lines'
    ],
    
    softwareTools: [
      'Excel-based calculations',
      'Process simulators',
      'Specialized sizing software'
    ]
  },
  
  {
    id: 'PCN',
    code: 'PCN',
    title: 'Process Control Narrative',
    fullName: 'Process Control Philosophy and Narrative',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed description of process control strategies for all systems',
    purpose: 'To define control philosophies ensuring stable, efficient, and safe operation',
    scope: 'All process control loops, sequences, and advanced control strategies',
    
    detailedDescription: `The Process Control Narrative describes how each process system will be controlled during all operating modes. It includes basic regulatory control, advanced control strategies, startup/shutdown sequences, and integration between units. The narrative bridges between process design and control system implementation, ensuring control strategies align with process objectives.`,
    
    keyComponents: [
      'Unit-by-unit control strategies',
      'Key control loop descriptions',
      'Advanced control applications',
      'Startup and shutdown sequences',
      'Load following and turndown strategies',
      'Integration between process units',
      'Operator interface philosophy',
      'Alarm and trip strategies'
    ],
    
    deliverables: [
      'Control narrative document',
      'Control strategy diagrams',
      'Sequence logic descriptions',
      'Advanced control specifications',
      'Control loop data sheets',
      'Operating mode matrices'
    ],
    
    bestPractices: [
      'Keep strategies as simple as possible',
      'Consider operator capabilities',
      'Design for wide operating range',
      'Include failure mode responses',
      'Coordinate with automation vendor',
      'Test strategies during commissioning'
    ],
    
    commonMistakes: [
      'Over-complex control schemes',
      'Poor consideration of dynamics',
      'Missing abnormal operations',
      'Inadequate operator interface design',
      'Conflicts between control loops',
      'Insufficient commissioning time'
    ],
    
    qualityChecklist: [
      'All systems covered',
      'Strategies practical',
      'Dynamics considered',
      'Operator input included',
      'Vendor review completed',
      'Testing plan defined'
    ],
    
    realWorldExamples: [
      'Cascade control: Column pressure to feed',
      'Ratio control: Fuel gas to multiple users',
      'Advanced control: MPC for fractionation',
      'Sequences: 24-48 hour startup typical'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-88',
        title: 'Batch Control',
        organization: 'ISA',
        relevantSections: ['Sequential control']
      }
    ],
    
    regulations: [
      'Safety instrumented system requirements',
      'Environmental compliance controls'
    ],
    
    softwareTools: [
      'Dynamic simulation',
      'Control system configurators',
      'HMI development tools'
    ]
  },
  
  {
    id: 'SDS',
    code: 'SDS',
    title: 'Shutdown Philosophy',
    fullName: 'Startup and Shutdown Philosophy',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFC',
    
    summary: 'Comprehensive procedures for plant startup, shutdown, and emergency scenarios',
    purpose: 'To ensure safe, efficient transitions between operating states',
    scope: 'All process units including normal and emergency procedures',
    
    detailedDescription: `The Shutdown Philosophy document defines strategies and procedures for all types of shutdowns from normal to emergency. It includes shutdown hierarchies, isolation strategies, depressurization requirements, and preservation procedures. The document also covers startup procedures from various shutdown states, ensuring safe and efficient transitions.`,
    
    keyComponents: [
      'Shutdown hierarchy and categories',
      'Normal shutdown procedures',
      'Emergency shutdown procedures',
      'Isolation and depressurization strategies',
      'Equipment preservation requirements',
      'Startup procedures from each state',
      'Utilities requirements during transitions',
      'Time estimates for each phase'
    ],
    
    deliverables: [
      'Shutdown philosophy document',
      'Shutdown sequence diagrams',
      'Startup procedures',
      'Isolation valve matrices',
      'Preservation procedures',
      'Training materials'
    ],
    
    bestPractices: [
      'Define clear shutdown categories',
      'Minimize equipment stress',
      'Plan for partial shutdowns',
      'Include preservation from day one',
      'Consider environmental conditions',
      'Train operators thoroughly'
    ],
    
    commonMistakes: [
      'Inadequate isolation strategies',
      'Missing preservation steps',
      'Unrealistic time estimates',
      'Poor coordination between units',
      'Insufficient utility planning',
      'Complex manual procedures'
    ],
    
    qualityChecklist: [
      'All shutdown types covered',
      'Sequences clearly defined',
      'Safety reviews completed',
      'Time estimates validated',
      'Training requirements identified',
      'Procedures tested'
    ],
    
    realWorldExamples: [
      'Normal shutdown: 24-48 hours typical',
      'Emergency shutdown: <5 minutes',
      'Startup from cold: 3-5 days',
      'Preservation: N2 blanket common'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 553',
        title: 'Refinery Valves and Accessories',
        organization: 'API',
        relevantSections: ['Isolation valve requirements']
      }
    ],
    
    regulations: [
      'Environmental permits for startups',
      'Safety management system requirements'
    ],
    
    softwareTools: [
      'Dynamic simulation',
      'Procedure writing software',
      'Training simulators'
    ]
  },
  
  {
    id: 'PSR',
    code: 'PSR',
    title: 'Process Simulation Report',
    fullName: 'Steady State and Dynamic Process Simulation Report',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive process simulation results including steady state and dynamic analyses',
    purpose: 'To validate process design and optimize operating conditions',
    scope: 'Complete process from feed conditioning through product storage',
    
    detailedDescription: `The Process Simulation Report documents all process modeling work including steady-state simulations for heat and material balance, equipment sizing, and optimization studies. It may also include dynamic simulations for control system design, relief system validation, and operational procedures development. The report provides the technical basis for process design decisions.`,
    
    keyComponents: [
      'Simulation basis and assumptions',
      'Thermodynamic model selection',
      'Steady-state simulation results',
      'Case study results',
      'Equipment performance curves',
      'Dynamic simulation findings',
      'Optimization study results',
      'Model validation against similar plants'
    ],
    
    deliverables: [
      'Simulation report document',
      'Case study matrices',
      'Simulation files',
      'Performance curves',
      'Optimization results',
      'Dynamic response plots'
    ],
    
    bestPractices: [
      'Validate thermodynamics carefully',
      'Document all assumptions',
      'Include sensitivity analyses',
      'Calibrate against real data',
      'Archive simulation files properly',
      'Train others on model use'
    ],
    
    commonMistakes: [
      'Poor thermodynamic model selection',
      'Over-optimistic equipment performance',
      'Missing trace components',
      'Inadequate model validation',
      'Poor documentation of assumptions',
      'Not archiving working files'
    ],
    
    qualityChecklist: [
      'Thermodynamics validated',
      'All cases documented',
      'Results reasonable',
      'Assumptions clear',
      'Files archived',
      'Peer review completed'
    ],
    
    realWorldExamples: [
      'Equation of state: PR or SRK for LNG',
      'Dynamic cases: 10-20 typical',
      'Optimization: 2-5% efficiency gain possible',
      'Validation: ±5% vs actual plants'
    ],
    
    applicableStandards: [
      {
        code: 'GPA 2145',
        title: 'Physical Properties for Hydrocarbons',
        organization: 'GPA',
        relevantSections: ['Property methods']
      }
    ],
    
    regulations: [
      'Environmental modeling requirements',
      'Product quality predictions'
    ],
    
    softwareTools: [
      'Aspen HYSYS',
      'Aspen Plus',
      'ProMax',
      'UniSim Design'
    ]
  },
  
  {
    id: 'RMP',
    code: 'RMP',
    title: 'Refrigerant Make-up Study',
    fullName: 'Refrigerant Inventory and Make-up Philosophy',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Study defining refrigerant inventory management and make-up requirements',
    purpose: 'To ensure reliable refrigerant supply and optimize inventory costs',
    scope: 'All refrigeration cycles including mixed refrigerant and nitrogen systems',
    
    detailedDescription: `The Refrigerant Make-up Study analyzes refrigerant losses, storage requirements, and make-up strategies for LNG refrigeration cycles. It includes normal leakage estimates, maintenance losses, emergency provisions, and make-up system design. The study is critical for LNG plants where refrigerant availability directly impacts production.`,
    
    keyComponents: [
      'Refrigerant composition requirements',
      'Normal leakage and loss estimates',
      'Maintenance activity losses',
      'Storage capacity requirements',
      'Make-up system design',
      'Supply logistics and sources',
      'Emergency inventory provisions',
      'Cost optimization analysis'
    ],
    
    deliverables: [
      'Refrigerant study report',
      'Inventory calculations',
      'Make-up system P&IDs',
      'Storage requirements',
      'Supply strategy document',
      'Emergency procedures'
    ],
    
    bestPractices: [
      'Use realistic leakage rates',
      'Plan for major maintenance',
      'Consider supply chain risks',
      'Optimize storage vs supply frequency',
      'Include quality specifications',
      'Design for composition adjustment'
    ],
    
    commonMistakes: [
      'Underestimating leakage rates',
      'Inadequate emergency inventory',
      'Poor make-up system design',
      'Ignoring composition control',
      'Complex logistics arrangements',
      'Missing quality specifications'
    ],
    
    qualityChecklist: [
      'All loss scenarios considered',
      'Storage capacity adequate',
      'Supply strategy robust',
      'Make-up system sized',
      'Procedures developed',
      'Costs optimized'
    ],
    
    realWorldExamples: [
      'Leakage: 1-3% per year typical',
      'Storage: 2-4 weeks inventory common',
      'Make-up: Continuous or batch',
      'Components: C1-C5, N2 typical'
    ],
    
    applicableStandards: [
      {
        code: 'GPSA Section 16',
        title: 'Hydrocarbon Recovery and Liquefaction',
        organization: 'GPSA',
        relevantSections: ['Refrigeration systems']
      }
    ],
    
    regulations: [
      'Refrigerant storage regulations',
      'Environmental release reporting'
    ],
    
    softwareTools: [
      'Process simulation for losses',
      'Supply chain modeling',
      'Economic optimization tools'
    ]
  }
];