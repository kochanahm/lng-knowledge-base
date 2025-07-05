import { DeliverableKnowledge } from '@/types';

export const constructionDeliverables: DeliverableKnowledge[] = [
  {
    id: 'COMM',
    code: 'COMM',
    title: 'Commissioning Procedures',
    fullName: 'System Commissioning and Startup Procedures',
    phase: 'CONST',
    discipline: 'Process',
    issuanceStatus: 'IFA',
    
    summary: 'Step-by-step procedures for commissioning all systems from construction to operation',
    purpose: 'To ensure safe and systematic transition from construction to operational status',
    scope: 'All process, utility, and safety systems requiring commissioning',
    
    detailedDescription: `Commissioning Procedures provide detailed step-by-step instructions for bringing systems from construction completion to operational readiness. They cover pre-commissioning activities (cleaning, testing), commissioning (functional testing, loop checks), and startup procedures. For LNG facilities, commissioning includes critical activities like dryout, cooldown, and performance testing of cryogenic systems.`,
    
    keyComponents: [
      'Pre-commissioning procedures (cleaning, flushing)',
      'System boundary definitions and isolation',
      'Loop check and functional test procedures',
      'Dry commissioning and wet commissioning',
      'Chemical cleaning procedures',
      'Dryout and inerting procedures',
      'Cooldown procedures for cryogenic systems',
      'Performance test procedures'
    ],
    
    deliverables: [
      'System commissioning packages',
      'Pre-commissioning procedures',
      'Commissioning test records',
      'Punch list tracking',
      'System handover dossiers',
      'Performance test reports'
    ],
    
    bestPractices: [
      'Define clear system boundaries',
      'Sequence activities logically',
      'Include detailed safety precautions',
      'Provide acceptance criteria',
      'Plan for contingencies',
      'Coordinate with operations team early'
    ],
    
    commonMistakes: [
      'Poorly defined system boundaries',
      'Missing prerequisite checks',
      'Inadequate temporary facilities',
      'No preservation between activities',
      'Insufficient spare parts',
      'Poor punch list management'
    ],
    
    qualityChecklist: [
      'All systems have procedures',
      'Prerequisites clearly defined',
      'Test criteria specified',
      'Resources identified',
      'Schedule integrated',
      'Training completed'
    ],
    
    realWorldExamples: [
      'LNG tank cooldown: 5-7 days typical',
      'Pipeline drying: Dewpoint <-40°C',
      'Loop checks: 5000-10000 loops typical',
      'First LNG: 2-3 months after mechanical completion'
    ],
    
    applicableStandards: [
      {
        code: 'NFPA 59A',
        title: 'Standard for the Production, Storage, and Handling of LNG',
        organization: 'NFPA',
        relevantSections: ['Chapter 11 - Commissioning']
      },
      {
        code: 'API RP 1FSC',
        title: 'Recommended Practice for Commissioning and Start-up',
        organization: 'API',
        relevantSections: ['Commissioning procedures']
      }
    ],
    
    regulations: [
      'Environmental permits for commissioning',
      'Safety regulatory notifications',
      'Operating license requirements'
    ],
    
    softwareTools: [
      'Completions management systems',
      'WinPCS or similar',
      'P&ID markup tools',
      'LIMS for fluid analysis'
    ]
  },
  
  {
    id: 'LOT',
    code: 'LOT',
    title: 'Load-out Procedures',
    fullName: 'GBS Load-out and Float-off Procedures',
    phase: 'CONST',
    discipline: 'Naval',
    issuanceStatus: 'IFA',
    
    summary: 'Detailed procedures for transferring GBS from construction dock to sea',
    purpose: 'To ensure safe transfer of completed GBS from construction to tow-ready condition',
    scope: 'Complete load-out operation including preparations, execution, and float-off',
    
    detailedDescription: `Load-out Procedures detail the complex operation of transferring the completed GBS from its construction location (dry dock or quayside) to floating condition ready for tow-out. This includes final weight verification, ballast system commissioning, dock flooding or skidding operations, initial stability checks, and transition to floating draft. The procedure must account for tidal conditions, weather windows, and multiple contingencies.`,
    
    keyComponents: [
      'Pre-loadout checklist and preparations',
      'Final weight and COG verification',
      'Ballast system operational readiness',
      'Dock flooding or skidding sequence',
      'Initial floating stability checks',
      'Mooring arrangements during load-out',
      'Weather criteria and hold points',
      'Emergency response procedures'
    ],
    
    deliverables: [
      'Load-out procedure manual',
      'Weight control reports',
      'Ballast system test results',
      'Stability calculations',
      'Marine warranty surveyor approvals',
      'Emergency response plan'
    ],
    
    bestPractices: [
      'Complete dry rehearsal of procedures',
      'Verify all systems before flooding',
      'Multiple independent stability checks',
      'Clear communication protocols',
      'Adequate contingency planning',
      'Real-time monitoring systems'
    ],
    
    commonMistakes: [
      'Inaccurate weight/COG data',
      'Untested ballast systems',
      'Poor weather planning',
      'Inadequate mooring arrangements',
      'No backup power systems',
      'Insufficient crew training'
    ],
    
    qualityChecklist: [
      'All systems tested',
      'Weight data verified',
      'Procedures approved by MWS',
      'Crew training completed',
      'Weather window identified',
      'Contingencies planned'
    ],
    
    realWorldExamples: [
      'Load-out duration: 12-24 hours typical',
      'Weather limits: Hs <0.5m, wind <10m/s',
      'Draft accuracy required: ±100mm',
      'Typical GBS weight: 100,000-300,000 tonnes'
    ],
    
    applicableStandards: [
      {
        code: 'DNVGL-ST-N001',
        title: 'Marine operations and marine warranty',
        organization: 'DNV GL',
        relevantSections: ['Chapter 6 - Load-out']
      },
      {
        code: 'GL Noble Denton 0030/ND',
        title: 'Guidelines for Marine Operations',
        organization: 'GL Noble Denton',
        relevantSections: ['Load-out operations']
      }
    ],
    
    regulations: [
      'Port authority requirements',
      'Marine warranty requirements',
      'Insurance conditions'
    ],
    
    softwareTools: [
      'MOSES or similar',
      'Real-time monitoring systems',
      'Ballast control systems',
      'Weather forecasting systems'
    ]
  },
  
  {
    id: 'HUC',
    code: 'HUC',
    title: 'Hook-up & Commissioning Plan',
    fullName: 'Offshore Hook-up and Commissioning Execution Plan',
    phase: 'CONST',
    discipline: 'Integration',
    issuanceStatus: 'IFA',
    
    summary: 'Integrated plan for connecting and commissioning all systems after GBS installation',
    purpose: 'To coordinate complex offshore hook-up activities and system commissioning',
    scope: 'All offshore installation, connection, and commissioning activities',
    
    detailedDescription: `The Hook-up & Commissioning Plan coordinates all activities required after GBS installation to achieve ready-for-startup status. This includes mooring connections, riser pull-ins, topsides interconnections, utility connections, and progressive system commissioning. The plan must optimize offshore work to minimize cost while ensuring safety and quality.`,
    
    keyComponents: [
      'Hook-up work breakdown structure',
      'Offshore execution schedule',
      'Resource requirements (vessels, crews)',
      'System completion priorities',
      'Interface management plan',
      'Simultaneous operations (SIMOPS) procedures',
      'Progressive commissioning strategy',
      'Transition to operations plan'
    ],
    
    deliverables: [
      'Integrated hook-up schedule',
      'Work pack organization',
      'SIMOPS procedures',
      'Resource histograms',
      'Progress tracking system',
      'Handover documentation'
    ],
    
    bestPractices: [
      'Maximize onshore pre-commissioning',
      'Clear work pack boundaries',
      'Detailed SIMOPS planning',
      'Weather downtime allowances',
      'Early engagement with operations',
      'Flexible sequencing options'
    ],
    
    commonMistakes: [
      'Underestimating offshore durations',
      'Poor interface management',
      'Inadequate SIMOPS planning',
      'Missing specialty tools/equipment',
      'Insufficient commissioning spares',
      'Poor documentation control'
    ],
    
    qualityChecklist: [
      'All interfaces identified',
      'Work packs complete',
      'Resources confirmed',
      'SIMOPS analyzed',
      'Schedule realistic',
      'Handover defined'
    ],
    
    realWorldExamples: [
      'Typical hook-up: 3-6 months offshore',
      'Riser installation: 1-2 days per riser',
      'Commissioning: 2-3 months after hook-up',
      'Crew size: 200-400 persons offshore'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 20815',
        title: 'Petroleum, petrochemical and natural gas industries - Production assurance and reliability management',
        organization: 'ISO',
        relevantSections: ['Commissioning requirements']
      }
    ],
    
    regulations: [
      'Offshore installation regulations',
      'Work permit requirements',
      'Environmental compliance'
    ],
    
    softwareTools: [
      'Primavera P6',
      'Completions databases',
      'Work pack management systems',
      'Document control systems'
    ]
  },
  
  {
    id: 'PTR',
    code: 'PTR',
    title: 'Performance Test Reports',
    fullName: 'Plant Performance Test Reports and Acceptance',
    phase: 'CONST',
    discipline: 'Process',
    issuanceStatus: 'IFA',
    
    summary: 'Results of performance testing demonstrating plant meets design specifications',
    purpose: 'To verify and document that the facility meets all performance guarantees',
    scope: 'All systems and overall plant performance metrics',
    
    detailedDescription: `Performance Test Reports document the results of comprehensive testing to verify the plant meets all contractual performance guarantees. This includes production capacity, product quality, utility consumption, emissions, and reliability demonstrations. These tests are typically witnessed by owners, contractors, and independent parties. Results form the basis for final acceptance and warranty provisions.`,
    
    keyComponents: [
      'Test procedures and methodologies',
      'Baseline operating conditions',
      'Production rate verification',
      'Product quality analysis',
      'Utility consumption measurements',
      'Environmental compliance testing',
      'Reliability run demonstrations',
      'Guarantee reconciliation calculations'
    ],
    
    deliverables: [
      'Performance test procedures',
      'Test run data logs',
      'Laboratory analysis reports',
      'Performance calculations',
      'Guarantee compliance matrix',
      'Punch list for deficiencies'
    ],
    
    bestPractices: [
      'Define test conditions clearly upfront',
      'Use certified instrumentation',
      'Include independent witnesses',
      'Allow for repeat tests',
      'Document all deviations',
      'Agree on calculation methods early'
    ],
    
    commonMistakes: [
      'Unclear test boundaries',
      'Non-representative operating conditions',
      'Inadequate instrumentation',
      'Poor data collection procedures',
      'Disputed calculation methods',
      'Insufficient test duration'
    ],
    
    qualityChecklist: [
      'Test procedures approved',
      'Instrumentation calibrated',
      'Baseline conditions met',
      'Data quality verified',
      'Calculations transparent',
      'Results witnessed'
    ],
    
    realWorldExamples: [
      'Capacity test: 72-hour continuous run',
      'LNG quality: <1 ppm H2S, <50 ppm CO2',
      'Availability: 95% typical guarantee',
      'Fuel efficiency: Within 5% of guarantee'
    ],
    
    applicableStandards: [
      {
        code: 'ASME PTC 1',
        title: 'General Instructions for Performance Test Codes',
        organization: 'ASME',
        relevantSections: ['Test planning and execution']
      },
      {
        code: 'ISO 2314',
        title: 'Gas turbines - Acceptance tests',
        organization: 'ISO',
        relevantSections: ['Performance testing']
      }
    ],
    
    regulations: [
      'Environmental permit compliance',
      'Product quality regulations',
      'Fiscal metering requirements'
    ],
    
    softwareTools: [
      'PI System or similar historian',
      'Statistical analysis software',
      'Performance test calculation tools',
      'LIMS for quality data'
    ]
  },
  
  {
    id: 'AAR',
    code: 'AAR',
    title: 'As-Built Records',
    fullName: 'As-Built Documentation and Records',
    phase: 'CONST',
    discipline: 'Integration',
    issuanceStatus: 'As-Built',
    
    summary: 'Complete set of drawings and documents reflecting actual installed conditions',
    purpose: 'To provide accurate documentation of the facility as actually constructed',
    scope: 'All drawings, procedures, and technical documents requiring as-built updates',
    
    detailedDescription: `As-Built Records capture the final installed configuration of the entire facility, incorporating all field changes, design clarifications, and non-conformance resolutions. This comprehensive documentation set is essential for operations, maintenance, future modifications, and regulatory compliance. The as-built process requires systematic tracking of changes throughout construction and commissioning.`,
    
    keyComponents: [
      'As-built drawings (all disciplines)',
      'Final equipment documentation',
      'Weld maps and NDE records',
      'Instrument loop folders',
      'Vendor documentation updates',
      'Change register reconciliation',
      'Non-conformance resolutions',
      'Final operating procedures'
    ],
    
    deliverables: [
      'As-built drawing sets',
      'Updated 3D model',
      'Final documentation register',
      'Electronic document repository',
      'Redline incorporation records',
      'Handover dossiers by system'
    ],
    
    bestPractices: [
      'Track changes systematically during construction',
      'Regular redline incorporation cycles',
      'Verify critical dimensions in field',
      'Update 3D model continuously',
      'Structured handover by system',
      'Electronic delivery for searchability'
    ],
    
    commonMistakes: [
      'Delayed redline incorporation',
      'Missing minor field changes',
      'Inconsistent as-built standards',
      'Poor quality control',
      'Incomplete vendor updates',
      'No verification process'
    ],
    
    qualityChecklist: [
      'All changes incorporated',
      'Field verification completed',
      'Documents internally consistent',
      'Electronic files organized',
      'Handover packages complete',
      'Operations acceptance obtained'
    ],
    
    realWorldExamples: [
      'Typical changes: 10-20% of lines relocated',
      'As-built timeline: 6-12 months after startup',
      'Documentation volume: 10,000+ drawings',
      'Electronic format: Searchable PDF standard'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 15926',
        title: 'Industrial automation systems - Data integration',
        organization: 'ISO',
        relevantSections: ['Information handover']
      },
      {
        code: 'PAS 1192-2',
        title: 'Specification for information management using BIM',
        organization: 'BSI',
        relevantSections: ['As-built information']
      }
    ],
    
    regulations: [
      'Regulatory dossier requirements',
      'Operating license conditions',
      'Insurance documentation requirements'
    ],
    
    softwareTools: [
      'Document management systems',
      'CAD/3D modeling software',
      'Redline tracking systems',
      'Handover management platforms'
    ]
  }
];