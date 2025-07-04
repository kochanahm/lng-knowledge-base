import { DeliverableKnowledge } from '@/types';

export const processDeliverables: DeliverableKnowledge[] = [
  // FEED Phase - Process
  {
    id: 'BFD',
    code: 'BFD',
    title: 'Block Flow Diagram',
    fullName: 'Block Flow Diagram - Overall Process Configuration',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFR',
    
    summary: 'High-level diagram showing major process units and primary flow paths',
    purpose: 'To establish the overall process configuration and major equipment blocks for the LNG facility',
    scope: 'Covers the entire process from gas receiving through to LNG storage and loading',
    
    detailedDescription: `The Block Flow Diagram (BFD) is the starting point for process design, providing a simplified overview of the entire LNG facility. It shows major process units as blocks connected by primary process streams, without detailed equipment or piping information. The BFD helps stakeholders understand the overall process concept and forms the basis for more detailed engineering.`,
    
    keyComponents: [
      'Process unit blocks (e.g., Acid Gas Removal, Dehydration, Liquefaction)',
      'Major process streams with flow directions',
      'Key utility systems blocks',
      'Battery limits and interfaces',
      'Material balance summary table'
    ],
    
    deliverables: [
      'Main process BFD drawing',
      'Utility systems BFD',
      'Refrigeration cycle BFD',
      'Overall material balance',
      'BFD basis document'
    ],
    
    bestPractices: [
      'Keep the diagram simple and uncluttered - save details for PFDs',
      'Use consistent block shapes and naming conventions',
      'Include a clear legend explaining abbreviations',
      'Show battery limits and interface points clearly',
      'Review with all stakeholders early for alignment'
    ],
    
    commonMistakes: [
      'Including too much detail that belongs in PFDs',
      'Inconsistent naming between BFD and subsequent documents',
      'Missing key utility systems or support units',
      'Unclear battery limits or scope boundaries',
      'Not updating BFD when major process changes occur'
    ],
    
    qualityChecklist: [
      'All major process units are shown',
      'Process flow is logical and easy to follow',
      'Stream numbering is consistent',
      'Material balance closes',
      'Interfaces with utilities are clear'
    ],
    
    realWorldExamples: [
      'Typical LNG plant includes: Feed Gas Reception → Acid Gas Removal → Dehydration → Mercury Removal → Liquefaction → Storage → Loading',
      'Large-scale facilities may have multiple parallel trains shown on BFD',
      'Floating LNG (FLNG) BFDs include hull utilities and marine systems'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 10628-1',
        title: 'Diagrams for the chemical and petrochemical industry',
        organization: 'ISO',
        relevantSections: ['Section 5: Block Diagrams']
      }
    ],
    
    regulations: [
      'Local environmental permits requiring process overview',
      'Safety case submissions requiring process description'
    ],
    
    softwareTools: [
      'Microsoft Visio',
      'AutoCAD',
      'SmartPlant P&ID',
      'AVEVA Diagrams'
    ]
  },
  
  {
    id: 'PFD',
    code: 'PFD',
    title: 'Process Flow Diagram',
    fullName: 'Process Flow Diagram - Detailed Process Scheme',
    phase: 'FEED',
    discipline: 'Process',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed diagram showing all process equipment, piping, and control loops with heat and material balance',
    purpose: 'To define the complete process scheme including all equipment, major piping, and control philosophy',
    scope: 'All process units, major equipment, and primary control loops',
    
    detailedDescription: `The Process Flow Diagram (PFD) is a critical engineering document that shows the complete process scheme in detail. Unlike the BFD, the PFD includes all major equipment with tag numbers, all process streams with line numbers, major control loops, and operating conditions. It serves as the primary reference for process design and forms the basis for P&ID development.`,
    
    keyComponents: [
      'All process equipment with tag numbers',
      'Process lines with line numbers and sizes',
      'Control loops and instrumentation',
      'Operating conditions (T, P, Flow)',
      'Heat and material balance table'
    ],
    
    deliverables: [
      'PFD drawings for each process unit',
      'Heat and material balance sheets',
      'Process design basis',
      'Equipment list (preliminary)',
      'Line list (preliminary)'
    ],
    
    bestPractices: [
      'Maintain consistency with BFD stream numbers',
      'Show all equipment that affects the process',
      'Include bypass lines and spare equipment',
      'Clearly indicate battery limits',
      'Use standard symbols per company/project standards'
    ],
    
    commonMistakes: [
      'Inconsistent tag numbering system',
      'Missing important bypass or recycle lines',
      'Incorrect or missing operating conditions',
      'Heat and material balance doesn\'t close',
      'Control loops shown incorrectly'
    ],
    
    qualityChecklist: [
      'All equipment from equipment list is shown',
      'Line numbers match line list',
      'Operating conditions are shown for key points',
      'Material balance error < 0.1%',
      'Heat balance is closed',
      'Control scheme is logical and complete'
    ],
    
    realWorldExamples: [
      'Acid Gas Removal unit PFD shows absorber, regenerator, reboiler, overhead system, and amine circulation',
      'Liquefaction PFD includes all heat exchangers, compressors, expanders, and phase separators',
      'Utility PFDs cover cooling water, steam, instrument air, and fuel gas systems'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 10628-2',
        title: 'Diagrams for the chemical and petrochemical industry - Part 2: Graphical symbols',
        organization: 'ISO',
        relevantSections: ['All sections']
      },
      {
        code: 'PIP PIC001',
        title: 'Piping and Instrumentation Diagram Documentation Criteria',
        organization: 'Process Industry Practices',
        relevantSections: ['Section 3: Process Flow Diagrams']
      }
    ],
    
    regulations: [
      'Environmental permit applications require PFDs',
      'Safety studies (HAZOP) are based on PFDs'
    ],
    
    softwareTools: [
      'Aspen HYSYS (with integrated PFD)',
      'AVEVA Process Simulation',
      'AutoCAD with process libraries',
      'SmartPlant P&ID'
    ]
  },
  
  {
    id: 'PID',
    code: 'P&ID',
    title: 'Piping & Instrumentation Diagram',
    fullName: 'Piping & Instrumentation Diagram - Detailed Engineering Diagram',
    phase: 'DD',
    discipline: 'Process',
    issuanceStatus: 'IFC',
    
    summary: 'Complete engineering diagram showing all piping, instruments, valves, and equipment details',
    purpose: 'To provide complete information for detailed design, construction, and operation of the facility',
    scope: 'All process and utility systems including every pipe, valve, instrument, and equipment item',
    
    detailedDescription: `The Piping & Instrumentation Diagram (P&ID) is the most detailed process engineering document, showing every component in the process. It includes all equipment, piping (including drains and vents), valves, instrumentation, and control interlocks. P&IDs are used by all disciplines for detailed design and remain the primary reference throughout the facility\'s operational life.`,
    
    keyComponents: [
      'All equipment with full details',
      'All piping with line numbers and specifications',
      'All valves with type and specifications',
      'All instruments with tag numbers',
      'Control and safety interlocks',
      'Interfaces with other systems'
    ],
    
    deliverables: [
      'P&ID drawings for all systems',
      'P&ID legend and symbols',
      'Tie-in schedule between P&IDs',
      'P&ID revision log',
      'As-built P&IDs'
    ],
    
    bestPractices: [
      'Develop from approved PFDs maintaining consistency',
      'Use consistent symbology throughout',
      'Show all connections, no matter how small',
      'Include proper valve types for service',
      'Coordinate closely with instrumentation discipline',
      'Regular reviews with operations team'
    ],
    
    commonMistakes: [
      'Missing drain and vent valves',
      'Incorrect valve types for service',
      'Inconsistent tagging between documents',
      'Missing or incorrect line specifications',
      'Interfaces between P&IDs not properly shown',
      'Safety devices not clearly identified'
    ],
    
    qualityChecklist: [
      'All equipment from PFD is included with details',
      'Every line has a unique line number',
      'All instruments have unique tag numbers',
      'Valve types are appropriate for service',
      'Safety systems are clearly identified',
      'Tie-ins to other P&IDs are clear',
      'Legend is complete and accurate'
    ],
    
    realWorldExamples: [
      'Compressor P&ID includes: suction/discharge piping, recycle lines, seal gas system, lube oil system, all associated instruments',
      'Storage tank P&ID shows: inlet/outlet lines, relief systems, gauging, blanketing system, all tank accessories',
      'Typical P&ID set for LNG plant: 200-400 drawings'
    ],
    
    applicableStandards: [
      {
        code: 'ISA-5.1',
        title: 'Instrumentation Symbols and Identification',
        organization: 'International Society of Automation',
        relevantSections: ['All sections']
      },
      {
        code: 'ISO 14617',
        title: 'Graphical symbols for diagrams',
        organization: 'ISO',
        relevantSections: ['All parts']
      }
    ],
    
    regulations: [
      'Process Safety Management (PSM) requires accurate P&IDs',
      'Management of Change (MOC) procedures reference P&IDs'
    ],
    
    softwareTools: [
      'SmartPlant P&ID',
      'AVEVA P&ID',
      'AutoCAD Plant 3D',
      'Bentley OpenPlant P&ID'
    ]
  }
];

export const hseDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HAZID',
    code: 'HAZID',
    title: 'Hazard Identification Study',
    fullName: 'Hazard Identification Study Report',
    phase: 'FEED',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Systematic identification of potential hazards in the facility design',
    purpose: 'To identify all potential hazards early in the project to influence design decisions',
    scope: 'All process units, utilities, marine operations, and interfaces',
    
    detailedDescription: `HAZID (Hazard Identification) is a qualitative risk assessment technique used early in the project to identify potential hazards and operability issues. It involves a multidisciplinary team systematically reviewing the design to identify what could go wrong, what consequences might result, and what safeguards should be implemented.`,
    
    keyComponents: [
      'Hazard identification worksheets',
      'Risk ranking matrix',
      'Recommended risk reduction measures',
      'Action items for design team',
      'Hazard register'
    ],
    
    deliverables: [
      'HAZID report',
      'Hazard register',
      'Risk matrix',
      'Action tracking list',
      'Close-out report'
    ],
    
    bestPractices: [
      'Conduct HAZID early enough to influence design',
      'Include experienced operations personnel',
      'Use structured guide words and checklists',
      'Focus on major hazards and design decisions',
      'Track all actions to closure',
      'Link findings to design changes'
    ],
    
    commonMistakes: [
      'Conducting HAZID too late when design is fixed',
      'Wrong team composition - missing key expertise',
      'Getting too detailed (that\'s for HAZOP)',
      'Poor action tracking and closure',
      'Not considering all operational modes'
    ],
    
    qualityChecklist: [
      'All major hazards identified',
      'Risks are properly ranked',
      'Actions are specific and assigned',
      'Marine/GBS specific hazards covered',
      'Interfaces properly considered',
      'Report is clear and actionable'
    ],
    
    realWorldExamples: [
      'LNG tank hazards: rollover, overfill, vacuum, seismic',
      'Marine hazards: ship collision, dropped objects, weather',
      'Process hazards: overpressure, cryogenic releases, fire/explosion'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 17776',
        title: 'Petroleum and natural gas industries - Offshore production installations - Major accident hazard management',
        organization: 'ISO',
        relevantSections: ['Section 6: Hazard Identification']
      },
      {
        code: 'Energy Institute Guidelines',
        title: 'HAZID Guidelines',
        organization: 'Energy Institute',
        relevantSections: ['All sections']
      }
    ],
    
    regulations: [
      'Safety Case Regulations require hazard identification',
      'COMAH (Control of Major Accident Hazards) requirements'
    ],
    
    softwareTools: [
      'PHA-Pro',
      'BowTieXP',
      'Risk Matrix software',
      'Action tracking systems'
    ]
  },
  
  {
    id: 'HAZOP',
    code: 'HAZOP',
    title: 'Hazard and Operability Study',
    fullName: 'Hazard and Operability Study Report',
    phase: 'DD',
    discipline: 'HSE',
    issuanceStatus: 'IFD',
    
    summary: 'Detailed systematic review of P&IDs to identify process hazards and operability issues',
    purpose: 'To systematically identify all hazards and operability problems in the detailed design',
    scope: 'All P&IDs including process, utilities, and marine systems',
    
    detailedDescription: `HAZOP (Hazard and Operability Study) is a structured and systematic examination of the planned operation of a facility. Using P&IDs, a multidisciplinary team applies guide words (like 'More', 'Less', 'No') to process parameters to identify deviations, their causes, consequences, and required safeguards.`,
    
    keyComponents: [
      'Node definitions and descriptions',
      'Deviation analysis using guide words',
      'Cause and consequence evaluation',
      'Existing safeguards identification',
      'Recommendations for additional safeguards',
      'Action items list'
    ],
    
    deliverables: [
      'HAZOP report with all worksheets',
      'Action list with responsibilities',
      'SIL determination requirements',
      'P&ID markups',
      'Close-out report'
    ],
    
    bestPractices: [
      'Use experienced HAZOP leader/facilitator',
      'Ensure P&IDs are sufficiently developed',
      'Include operations and maintenance input',
      'Keep sessions focused and time-limited',
      'Document all discussions thoroughly',
      'Track actions through to close-out'
    ],
    
    commonMistakes: [
      'Starting HAZOP with incomplete P&IDs',
      'Poor node definition leading to missed hazards',
      'Inexperienced team or facilitator',
      'Not considering all operating modes',
      'Generic recommendations without specifics',
      'Poor follow-up on actions'
    ],
    
    qualityChecklist: [
      'All P&IDs have been reviewed',
      'Nodes cover entire process',
      'All credible deviations analyzed',
      'Safeguards are properly credited',
      'Actions are specific and achievable',
      'SIL requirements identified'
    ],
    
    realWorldExamples: [
      'Liquefaction train HAZOP: 40-60 nodes, 200+ actions',
      'Storage tank HAZOP focuses on overfill, vacuum, rollover',
      'Marine transfer HAZOP includes ship-shore interface'
    ],
    
    applicableStandards: [
      {
        code: 'IEC 61882',
        title: 'Hazard and operability studies (HAZOP studies) - Application guide',
        organization: 'IEC',
        relevantSections: ['All sections']
      }
    ],
    
    regulations: [
      'PSM regulations require HAZOP or equivalent',
      'Seveso Directive requirements in Europe'
    ],
    
    softwareTools: [
      'PHA-Pro',
      'HAZOP Manager',
      'Process Safety Office',
      'Custom Excel templates'
    ]
  }
];