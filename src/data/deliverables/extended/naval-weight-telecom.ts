import { DeliverableKnowledge } from '@/types';

export const navalDeliverables: DeliverableKnowledge[] = [
  {
    id: 'GBS-DBS',
    code: 'GBS-DBS',
    title: 'GBS Design Basis',
    fullName: 'Gravity Based Structure Design Basis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive design basis for the GBS including marine requirements',
    purpose: 'To establish design criteria for GBS marine engineering aspects',
    scope: 'GBS hull, stability, marine systems, and installation requirements',
    
    detailedDescription: `The GBS Design Basis establishes all marine engineering requirements for the Gravity Based Structure including environmental criteria, stability requirements, ballast system design, marine system specifications, and installation parameters. It interfaces with civil/structural disciplines for the concrete design while focusing on hydrodynamic and marine aspects.`,
    
    keyComponents: [
      'Environmental design criteria',
      'Stability requirements',
      'Ballast system philosophy',
      'Marine systems requirements',
      'Tow-out design conditions',
      'Installation parameters',
      'Mooring and positioning',
      'Regulatory compliance'
    ],
    
    deliverables: [
      'GBS design basis document',
      'Environmental criteria report',
      'Marine systems philosophy',
      'Regulatory compliance matrix',
      'Interface documents',
      'Design verification plan'
    ],
    
    bestPractices: [
      'Use site-specific metocean data',
      'Consider all installation phases',
      'Include adequate stability margins',
      'Plan ballast system redundancy',
      'Consider long-term settlement',
      'Interface closely with civil'
    ],
    
    commonMistakes: [
      'Underestimating installation loads',
      'Inadequate stability margins',
      'Poor ballast system design',
      'Missing temporary conditions',
      'Insufficient mooring analysis',
      'Weak interface management'
    ],
    
    qualityChecklist: [
      'All load cases defined',
      'Stability criteria met',
      'Installation feasible',
      'Regulations addressed',
      'Interfaces clear',
      'Risks identified'
    ],
    
    realWorldExamples: [
      'Draft: 15-25m typical for tow',
      'Stability: GM >1.0m minimum',
      'Environmental: 100-year return',
      'Settlement: 0.5-1.0m allowance'
    ],
    
    applicableStandards: [
      {
        code: 'DNV-RP-C202',
        title: 'Buckling Strength of Shells',
        organization: 'DNV',
        relevantSections: ['Stability criteria']
      },
      {
        code: 'IMO MODU Code',
        title: 'Mobile Offshore Drilling Units Code',
        organization: 'IMO',
        relevantSections: ['Stability requirements']
      }
    ],
    
    regulations: [
      'Marine warranty requirements',
      'Flag state regulations',
      'Classification society rules'
    ],
    
    softwareTools: [
      'MOSES',
      'GHS',
      'WAMIT',
      'ANSYS AQWA'
    ]
  },
  
  {
    id: 'HYD-STA',
    code: 'HYD-STA',
    title: 'Hydrodynamic & Stability Analysis',
    fullName: 'GBS Hydrodynamic and Stability Analysis',
    phase: 'FEED',
    discipline: 'Naval',
    issuanceStatus: 'IFD',
    
    summary: 'Comprehensive analysis of GBS behavior in marine environment',
    purpose: 'To verify GBS stability and motions during all phases',
    scope: 'Construction, tow-out, installation, and operational phases',
    
    detailedDescription: `The Hydrodynamic & Stability Analysis evaluates GBS behavior under various environmental conditions throughout its lifecycle. It includes intact and damage stability assessments, motion response analysis, and loads on the structure during tow-out and installation. The analysis ensures safe marine operations and validates design assumptions.`,
    
    keyComponents: [
      'Intact stability analysis',
      'Damage stability assessment',
      'Motion response (RAOs)',
      'Tow resistance and requirements',
      'Installation sequence analysis',
      'Operational motion limits',
      'Mooring and positioning loads',
      'Air gap and wave clearance'
    ],
    
    deliverables: [
      'Stability analysis report',
      'Hydrodynamic study results',
      'RAO curves and data',
      'Tow analysis report',
      'Installation analysis',
      'Operating limits documentation'
    ],
    
    bestPractices: [
      'Use validated software',
      'Consider all ballast conditions',
      'Include model test validation',
      'Apply appropriate safety factors',
      'Document all assumptions',
      'Verify with marine warranty surveyor'
    ],
    
    commonMistakes: [
      'Oversimplified geometry',
      'Missing critical load cases',
      'Inadequate damage cases',
      'Optimistic tow conditions',
      'Ignoring dynamic effects',
      'Poor documentation'
    ],
    
    qualityChecklist: [
      'All phases analyzed',
      'Stability margins adequate',
      'Motions acceptable',
      'Loads within limits',
      'Third party verified',
      'Operations feasible'
    ],
    
    realWorldExamples: [
      'Metacentric height: 2-5m typical',
      'Roll period: 15-25 seconds',
      'Tow speed: 3-5 knots common',
      'Motion limits: <0.5m for hookup'
    ],
    
    applicableStandards: [
      {
        code: 'DNV-ST-N001',
        title: 'Marine operations and marine warranty',
        organization: 'DNV',
        relevantSections: ['Marine operations']
      }
    ],
    
    regulations: [
      'IMO stability requirements',
      'Class society rules',
      'Marine warranty standards'
    ],
    
    softwareTools: [
      'MOSES',
      'WAMIT',
      'OrcaFlex',
      'ANSYS AQWA'
    ]
  },
  
  {
    id: 'BDS',
    code: 'BDS',
    title: 'Ballast System Design',
    fullName: 'GBS Ballast and Deballast System Design',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed design of ballast system for GBS installation and operations',
    purpose: 'To enable controlled ballasting during installation and maintenance',
    scope: 'Complete ballast system including pumps, piping, and controls',
    
    detailedDescription: `The Ballast System Design provides complete engineering for the GBS ballasting and deballasting system used during installation and potential refloating. It includes pump sizing, piping arrangements, control logic, and interfaces with GBS compartments. The system must handle the critical installation phase where precise weight and trim control is essential.`,
    
    keyComponents: [
      'Ballast pump sizing and selection',
      'Piping system design',
      'Valve arrangements',
      'Control system logic',
      'Monitoring instrumentation',
      'Emergency systems',
      'Interfaces with GBS cells',
      'Installation procedures'
    ],
    
    deliverables: [
      'Ballast system P&IDs',
      'Equipment specifications',
      'Control logic diagrams',
      'Installation procedures',
      'Operating manuals',
      'Hydraulic calculations'
    ],
    
    bestPractices: [
      'Design for redundancy',
      'Include position monitoring',
      'Plan for contingencies',
      'Consider maintenance access',
      'Provide adequate capacity',
      'Test system thoroughly'
    ],
    
    commonMistakes: [
      'Undersized pumps',
      'Inadequate redundancy',
      'Poor valve arrangements',
      'Complex control logic',
      'Missing instrumentation',
      'No contingency plans'
    ],
    
    qualityChecklist: [
      'Capacity verified',
      'Redundancy adequate',
      'Controls tested',
      'Procedures complete',
      'Training provided',
      'Commissioning planned'
    ],
    
    realWorldExamples: [
      'Pump capacity: 500-2000 m³/hr',
      'Installation time: 12-24 hours',
      'Accuracy: ±100mm level control',
      'Redundancy: 2x100% typical'
    ],
    
    applicableStandards: [
      {
        code: 'API 676',
        title: 'Positive Displacement Pumps—Rotary',
        organization: 'API',
        relevantSections: ['Pump requirements']
      }
    ],
    
    regulations: [
      'Marine system regulations',
      'Environmental discharge rules'
    ],
    
    softwareTools: [
      'Hydraulic analysis software',
      'Control system simulators',
      'P&ID development tools'
    ]
  },
  
  {
    id: 'TOW',
    code: 'TOW',
    title: 'Tow-out Procedures',
    fullName: 'GBS Tow-out and Installation Procedures',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFA',
    
    summary: 'Detailed procedures for GBS tow-out from construction to installation site',
    purpose: 'To ensure safe and controlled marine operations',
    scope: 'Complete tow-out including preparations, towing, and positioning',
    
    detailedDescription: `The Tow-out Procedures document provides step-by-step instructions for safely towing the GBS from the construction site to its permanent offshore location. It includes pre-tow preparations, weather criteria, towing arrangements, contingency procedures, and positioning at the installation site. These procedures are critical for the success of the marine operations.`,
    
    keyComponents: [
      'Pre-tow inspections and preparations',
      'Towing arrangement details',
      'Weather window criteria',
      'Tow route planning',
      'Navigation requirements',
      'Emergency procedures',
      'Positioning methodology',
      'Communication protocols'
    ],
    
    deliverables: [
      'Tow-out procedure manual',
      'Towing arrangement drawings',
      'Route survey reports',
      'Weather criteria document',
      'Emergency response plan',
      'Marine operation gantt chart'
    ],
    
    bestPractices: [
      'Involve marine warranty surveyor early',
      'Plan multiple weather windows',
      'Include detailed contingencies',
      'Conduct table-top exercises',
      'Ensure clear communications',
      'Have backup equipment ready'
    ],
    
    commonMistakes: [
      'Optimistic weather assumptions',
      'Inadequate contingency planning',
      'Poor communication protocols',
      'Insufficient backup systems',
      'Rushed preparations',
      'Unclear responsibilities'
    ],
    
    qualityChecklist: [
      'All procedures detailed',
      'Risks assessed',
      'Equipment verified',
      'Personnel trained',
      'Approvals obtained',
      'Contingencies ready'
    ],
    
    realWorldExamples: [
      'Tow distance: 50-500 nautical miles',
      'Weather window: 3-5 days typical',
      'Tug power: 150-300 tonnes bollard pull',
      'Positioning: ±5m typical accuracy'
    ],
    
    applicableStandards: [
      {
        code: 'DNVGL-ST-N001',
        title: 'Marine operations and marine warranty',
        organization: 'DNV GL',
        relevantSections: ['Towing operations']
      }
    ],
    
    regulations: [
      'Marine operation regulations',
      'Navigation safety requirements',
      'Environmental restrictions'
    ],
    
    softwareTools: [
      'Route planning software',
      'Weather forecasting systems',
      'Project scheduling tools'
    ]
  },
  
  {
    id: 'MRS',
    code: 'MRS',
    title: 'Mooring System Design',
    fullName: 'Permanent Mooring and Positioning System',
    phase: 'DD',
    discipline: 'Naval',
    issuanceStatus: 'IFC',
    
    summary: 'Design of systems to maintain GBS position during installation',
    purpose: 'To ensure GBS remains in position during ballasting and settlement',
    scope: 'Temporary mooring for installation and permanent position monitoring',
    
    detailedDescription: `The Mooring System Design covers temporary mooring arrangements required during GBS installation and ballasting operations. It includes anchor patterns, mooring line specifications, tensioning requirements, and monitoring systems. While the GBS is permanently fixed by gravity, temporary mooring is critical during the installation phase.`,
    
    keyComponents: [
      'Mooring pattern layout',
      'Anchor specifications',
      'Mooring line design',
      'Tensioning requirements',
      'Load monitoring systems',
      'Quick release mechanisms',
      'Position monitoring',
      'Removal procedures'
    ],
    
    deliverables: [
      'Mooring arrangement drawings',
      'Anchor design calculations',
      'Mooring line specifications',
      'Installation procedures',
      'Monitoring system specs',
      'Removal procedures'
    ],
    
    bestPractices: [
      'Design for extreme conditions',
      'Include redundancy',
      'Plan for quick release',
      'Monitor loads continuously',
      'Consider seabed conditions',
      'Coordinate with installation'
    ],
    
    commonMistakes: [
      'Underestimating loads',
      'Poor anchor design',
      'Inadequate monitoring',
      'Complex removal methods',
      'Ignoring soil conditions',
      'Insufficient redundancy'
    ],
    
    qualityChecklist: [
      'Loads calculated',
      'Anchors designed',
      'Lines specified',
      'Monitoring planned',
      'Removal feasible',
      'Testing completed'
    ],
    
    realWorldExamples: [
      'Mooring lines: 8-12 typical',
      'Anchor capacity: 200-500 tonnes',
      'Pretension: 50-100 tonnes',
      'Monitoring: Real-time load cells'
    ],
    
    applicableStandards: [
      {
        code: 'API RP 2SK',
        title: 'Design and Analysis of Stationkeeping Systems',
        organization: 'API',
        relevantSections: ['Mooring design']
      }
    ],
    
    regulations: [
      'Marine installation regulations',
      'Temporary works requirements'
    ],
    
    softwareTools: [
      'OrcaFlex',
      'Ariane',
      'ANSYS AQWA',
      'Position monitoring systems'
    ]
  }
];

export const weightDeliverables: DeliverableKnowledge[] = [
  {
    id: 'WCP',
    code: 'WCP',
    title: 'Weight Control Philosophy',
    fullName: 'Weight Control Philosophy and Procedures',
    phase: 'FEED',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    
    summary: 'Framework for managing and controlling weight throughout project lifecycle',
    purpose: 'To ensure weight and center of gravity remain within design limits',
    scope: 'All facilities including topsides and GBS',
    
    detailedDescription: `The Weight Control Philosophy establishes the framework for managing weight throughout the project lifecycle. It defines weight estimation methods, control procedures, reporting requirements, and contingency allowances. For GBS projects, maintaining accurate weight and center of gravity (CoG) is critical for marine operations and structural design.`,
    
    keyComponents: [
      'Weight categorization system',
      'Estimation methodologies',
      'Contingency philosophy',
      'Control procedures',
      'Reporting requirements',
      'CoG management',
      'Weight reduction targets',
      'Verification methods'
    ],
    
    deliverables: [
      'Weight control philosophy document',
      'Procedure manual',
      'Weight breakdown structure',
      'Reporting templates',
      'Database structure',
      'Training materials'
    ],
    
    bestPractices: [
      'Start weight control early',
      'Use proven estimation methods',
      'Include adequate contingencies',
      'Regular monitoring and reporting',
      'Integrate with 3D model',
      'Involve all disciplines'
    ],
    
    commonMistakes: [
      'Late implementation',
      'Optimistic estimates',
      'Poor data management',
      'Inadequate contingencies',
      'Missing small items',
      'Weak enforcement'
    ],
    
    qualityChecklist: [
      'Methods clearly defined',
      'Responsibilities assigned',
      'Database established',
      'Procedures practical',
      'Training completed',
      'Management support'
    ],
    
    realWorldExamples: [
      'Contingency: 5-10% detail design',
      'Accuracy: ±5% at FEED end',
      'Reporting: Monthly typical',
      'Growth: 3-7% typical through project'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 19901-5',
        title: 'Petroleum and natural gas industries — Weight control',
        organization: 'ISO',
        relevantSections: ['Weight management']
      }
    ],
    
    regulations: [
      'Classification society requirements',
      'Marine warranty requirements'
    ],
    
    softwareTools: [
      'Weight control databases',
      'Integration with 3D models',
      'Reporting dashboards',
      'CoG calculation tools'
    ]
  },
  
  {
    id: 'WER',
    code: 'WER',
    title: 'Weight Estimate Report',
    fullName: 'Weight and Center of Gravity Estimate Report',
    phase: 'FEED',
    discipline: 'Weight',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed weight estimates for all facilities with CoG calculations',
    purpose: 'To provide weight data for design and verify within allowables',
    scope: 'Complete facility weight including growth and contingencies',
    
    detailedDescription: `The Weight Estimate Report provides comprehensive weight data for all project components including detailed breakdowns by discipline and area. It includes center of gravity calculations, weight growth assessments, and contingency allowances. The report is crucial for structural design, marine operations, and cost estimation.`,
    
    keyComponents: [
      'Weight breakdown by discipline',
      'Area-based summaries',
      'Equipment weights',
      'Bulk material estimates',
      'CoG calculations',
      'Growth allowances',
      'Contingency analysis',
      'Comparison with targets'
    ],
    
    deliverables: [
      'Weight estimate report',
      'Detailed weight tables',
      'CoG calculation sheets',
      'Weight distribution plots',
      'Growth curves',
      'Discipline summaries'
    ],
    
    bestPractices: [
      'Use multiple estimation methods',
      'Validate against similar projects',
      'Include all components',
      'Document assumptions clearly',
      'Regular updates',
      'Track changes rigorously'
    ],
    
    commonMistakes: [
      'Missing components',
      'Optimistic bulk estimates',
      'Poor CoG accuracy',
      'Inadequate documentation',
      'Inconsistent methods',
      'Late updates'
    ],
    
    qualityChecklist: [
      'All items included',
      'Methods documented',
      'CoG verified',
      'Growth reasonable',
      'Contingency adequate',
      'Targets compared'
    ],
    
    realWorldExamples: [
      'Topsides: 15,000-30,000 tonnes',
      'GBS: 100,000-300,000 tonnes',
      'CoG accuracy: ±0.5m target',
      'Bulk materials: 15-25% of total'
    ],
    
    applicableStandards: [
      {
        code: 'NORSOK Z-014',
        title: 'Standard cost coding system',
        organization: 'NORSOK',
        relevantSections: ['Weight categorization']
      }
    ],
    
    regulations: [
      'Regulatory weight reporting',
      'Insurance requirements'
    ],
    
    softwareTools: [
      'Weight estimating software',
      'Database systems',
      'CoG calculation programs',
      '3D model integration'
    ]
  },
  
  {
    id: 'MTO-W',
    code: 'MTO-W',
    title: 'Material Take-off Weights',
    fullName: 'Weight-based Material Take-off Reports',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed material quantities converted to weights for all disciplines',
    purpose: 'To provide accurate weight data from detailed design quantities',
    scope: 'All materials and components from detailed MTOs',
    
    detailedDescription: `Material Take-off Weights convert detailed design quantities into weights for weight control and verification. This includes piping, structural steel, electrical cables, and all other materials. The MTO weights provide actual data to replace estimates and validate the weight control process.`,
    
    keyComponents: [
      'Piping weight by size/schedule',
      'Structural steel by member',
      'Cable weights by type',
      'Equipment dry/operating weights',
      'Insulation and coating weights',
      'Instrument and valve weights',
      'Bulk material summaries',
      'Small bore allowances'
    ],
    
    deliverables: [
      'MTO weight reports',
      'Discipline weight summaries',
      'Comparison with estimates',
      'Weight tracking curves',
      'Variance reports',
      'Final weight registers'
    ],
    
    bestPractices: [
      'Automate from 3D model',
      'Include all components',
      'Regular extraction cycles',
      'Validate unusual items',
      'Track estimate variance',
      'Update weight database'
    ],
    
    commonMistakes: [
      'Missing small components',
      'Incorrect material densities',
      'Poor model quality',
      'Manual calculation errors',
      'Delayed updates',
      'No variance analysis'
    ],
    
    qualityChecklist: [
      'Model complete',
      'Densities verified',
      'All items captured',
      'Calculations checked',
      'Variances analyzed',
      'Database updated'
    ],
    
    realWorldExamples: [
      'Piping: 30-40% of topsides',
      'Steel: 25-35% typical',
      'Equipment: 20-30%',
      'Model accuracy: 95%+ target'
    ],
    
    applicableStandards: [
      {
        code: 'PIP VESM001',
        title: 'Material Take-Off Methods',
        organization: 'PIP',
        relevantSections: ['Weight calculations']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      '3D model MTO extraction',
      'Weight calculation programs',
      'Database integration',
      'Reporting tools'
    ]
  },
  
  {
    id: 'WMR',
    code: 'WMR',
    title: 'Weight Management Reports',
    fullName: 'Monthly Weight Management Reports',
    phase: 'DD',
    discipline: 'Weight',
    issuanceStatus: 'IFC',
    
    summary: 'Regular weight status reports tracking progress against targets',
    purpose: 'To monitor weight trends and implement control measures',
    scope: 'All project weights with focus on changes and risks',
    
    detailedDescription: `Weight Management Reports provide regular updates on weight status including current estimates, changes from previous reports, risks and opportunities, and mitigation measures. These reports track weight growth, monitor contingency usage, and ensure the project remains within weight allowances.`,
    
    keyComponents: [
      'Current weight summary',
      'Changes from last report',
      'Contingency status',
      'Risk assessment',
      'Mitigation measures',
      'Weight reduction initiatives',
      'CoG status',
      'Forecast to completion'
    ],
    
    deliverables: [
      'Monthly weight reports',
      'Executive dashboards',
      'Trend analysis charts',
      'Risk registers',
      'Action tracking lists',
      'Discipline reports'
    ],
    
    bestPractices: [
      'Consistent report format',
      'Focus on changes and risks',
      'Include mitigation actions',
      'Track initiatives closely',
      'Communicate clearly',
      'Drive accountability'
    ],
    
    commonMistakes: [
      'Information overload',
      'Missing key changes',
      'No action follow-up',
      'Poor risk assessment',
      'Delayed reporting',
      'Unclear messages'
    ],
    
    qualityChecklist: [
      'Data current',
      'Changes highlighted',
      'Risks assessed',
      'Actions tracked',
      'Trends analyzed',
      'Messages clear'
    ],
    
    realWorldExamples: [
      'Reporting cycle: Monthly',
      'Growth tracking: 0.5-1% per month',
      'Actions: 10-20 open typical',
      'Savings: 2-5% achievable'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 19901-5',
        title: 'Weight control during engineering',
        organization: 'ISO',
        relevantSections: ['Reporting requirements']
      }
    ],
    
    regulations: [],
    
    softwareTools: [
      'Weight databases',
      'Dashboard tools',
      'Trending software',
      'Action tracking systems'
    ]
  }
];

export const telecomDeliverables: DeliverableKnowledge[] = [
  {
    id: 'TCP',
    code: 'TCP',
    title: 'Telecom Philosophy',
    fullName: 'Telecommunications System Philosophy',
    phase: 'FEED',
    discipline: 'Telecom',
    issuanceStatus: 'IFD',
    
    summary: 'Overall philosophy for telecommunications and IT systems',
    purpose: 'To define integrated communication and data system architecture',
    scope: 'All telecommunication, network, and integrated control systems',
    
    detailedDescription: `The Telecom Philosophy establishes the framework for all telecommunications and IT systems including voice, data, video, and control system networks. It defines system architecture, technology selections, redundancy requirements, and cybersecurity approach. This document ensures integrated, secure, and reliable communications throughout the facility.`,
    
    keyComponents: [
      'System architecture overview',
      'Technology platform selection',
      'Network topology design',
      'Voice communication systems',
      'Data network requirements',
      'Wireless systems strategy',
      'Cybersecurity framework',
      'Integration requirements'
    ],
    
    deliverables: [
      'Telecom philosophy document',
      'Network architecture diagrams',
      'Technology roadmap',
      'Interface definitions',
      'Cybersecurity framework',
      'Standards listing'
    ],
    
    bestPractices: [
      'Design for convergence',
      'Build in cybersecurity',
      'Plan for technology evolution',
      'Ensure adequate redundancy',
      'Consider remote support',
      'Standardize equipment'
    ],
    
    commonMistakes: [
      'Separate system silos',
      'Inadequate bandwidth planning',
      'Weak cybersecurity design',
      'Complex architectures',
      'Poor technology choices',
      'No upgrade path'
    ],
    
    qualityChecklist: [
      'Architecture scalable',
      'Security addressed',
      'Redundancy adequate',
      'Standards current',
      'Integration planned',
      'Future-proofed'
    ],
    
    realWorldExamples: [
      'Backbone: 10Gb Ethernet typical',
      'Redundancy: Dual path minimum',
      'Wireless: WiFi6 + LTE backup',
      'Cybersecurity: IEC 62443 compliance'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 62443',
        title: 'Industrial communication networks - Network and system security',
        organization: 'IEC',
        relevantSections: ['Security requirements']
      },
      {
        code: 'ISO/IEC 11801',
        title: 'Information technology — Generic cabling for customer premises',
        organization: 'ISO/IEC',
        relevantSections: ['Cabling standards']
      }
    ],
    
    regulations: [
      'Radio spectrum regulations',
      'Cybersecurity requirements',
      'Data protection laws'
    ],
    
    softwareTools: [
      'Network design tools',
      'RF planning software',
      'Cybersecurity assessment tools',
      'Cable management systems'
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
    
    summary: 'Detailed network architecture for IT and OT systems',
    purpose: 'To define secure and reliable network infrastructure',
    scope: 'Complete network infrastructure including IT/OT segregation',
    
    detailedDescription: `The Network System Architecture provides detailed design of the converged IT/OT network infrastructure. It addresses network segmentation, security zones, routing protocols, quality of service, and management systems. The architecture ensures secure data flow while maintaining strict segregation between IT and OT domains as required by cybersecurity standards.`,
    
    keyComponents: [
      'Network topology diagrams',
      'VLAN and segmentation design',
      'Security zone definitions',
      'Routing and switching design',
      'QoS implementation',
      'Network management systems',
      'DMZ architecture',
      'Remote access design'
    ],
    
    deliverables: [
      'Network architecture document',
      'Detailed topology diagrams',
      'Security zone drawings',
      'IP addressing plan',
      'Network equipment specs',
      'Management system design'
    ],
    
    bestPractices: [
      'Implement defense in depth',
      'Segregate IT/OT properly',
      'Design for monitoring',
      'Include adequate bandwidth',
      'Plan maintenance windows',
      'Document thoroughly'
    ],
    
    commonMistakes: [
      'Flat network design',
      'Inadequate segmentation',
      'Poor capacity planning',
      'Complex routing',
      'Missing redundancy',
      'Weak monitoring'
    ],
    
    qualityChecklist: [
      'Segmentation complete',
      'Security zones defined',
      'Redundancy verified',
      'Capacity adequate',
      'Management planned',
      'Documentation clear'
    ],
    
    realWorldExamples: [
      'Core switches: Dual redundant',
      'Segmentation: 5-7 zones typical',
      'Bandwidth: 1-10Gb to core',
      'Availability: 99.95% target'
    ],
    
    applicableStandards: [
      {
        code: 'ANSI/ISA-95',
        title: 'Enterprise-Control System Integration',
        organization: 'ISA',
        relevantSections: ['Network levels']
      }
    ],
    
    regulations: [
      'Critical infrastructure protection',
      'Data sovereignty requirements'
    ],
    
    softwareTools: [
      'Visio/AutoCAD',
      'Network simulators',
      'IP address management',
      'Security assessment tools'
    ]
  },
  
  {
    id: 'PAS',
    code: 'PAS',
    title: 'PA System Design',
    fullName: 'Public Address and General Alarm System Design',
    phase: 'DD',
    discipline: 'Telecom',
    issuanceStatus: 'IFC',
    
    summary: 'Design of facility-wide PA/GA system for communications and alarms',
    purpose: 'To ensure effective emergency and operational communications',
    scope: 'Complete PA/GA system including integration with fire and gas',
    
    detailedDescription: `The PA System Design provides comprehensive coverage for public address and general alarm throughout the facility. It includes speaker layouts, amplifier specifications, zone configurations, and integration with emergency systems. The design ensures intelligible communication in all areas including high-noise process areas.`,
    
    keyComponents: [
      'Coverage area analysis',
      'Speaker location plans',
      'Amplifier and rack layouts',
      'Zone configuration',
      'Integration with F&G',
      'Power and backup systems',
      'Control interfaces',
      'Testing requirements'
    ],
    
    deliverables: [
      'PA/GA system design document',
      'Speaker layout drawings',
      'Cable block diagrams',
      'Equipment specifications',
      'Integration drawings',
      'Acoustic analysis reports'
    ],
    
    bestPractices: [
      'Design for high noise areas',
      'Include visual alarms',
      'Ensure full coverage',
      'Plan zone flexibility',
      'Test intelligibility',
      'Provide adequate backup'
    ],
    
    commonMistakes: [
      'Poor coverage planning',
      'Inadequate power design',
      'Missing integration details',
      'No acoustic analysis',
      'Complex zoning',
      'Insufficient testing'
    ],
    
    qualityChecklist: [
      'Coverage complete',
      'Intelligibility analyzed',
      'Integration defined',
      'Backup power sized',
      'Testing planned',
      'Standards met'
    ],
    
    realWorldExamples: [
      'SPL target: 10dB above ambient',
      'Coverage: 100% of facility',
      'Zones: 20-50 typical',
      'Backup: 24-hour battery minimum'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 60849',
        title: 'Sound systems for emergency purposes',
        organization: 'IEC',
        relevantSections: ['System requirements']
      },
      {
        code: 'NFPA 72',
        title: 'National Fire Alarm and Signaling Code',
        organization: 'NFPA',
        relevantSections: ['Emergency communications']
      }
    ],
    
    regulations: [
      'Emergency communication requirements',
      'Workplace noise regulations'
    ],
    
    softwareTools: [
      'Acoustic modeling software',
      'EASE for speaker placement',
      'AutoCAD for layouts',
      'Cable calculation tools'
    ]
  }
];