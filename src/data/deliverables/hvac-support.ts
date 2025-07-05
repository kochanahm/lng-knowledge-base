import { DeliverableKnowledge } from '@/types';

export const hvacDeliverables: DeliverableKnowledge[] = [
  {
    id: 'HDS',
    code: 'HDS',
    title: 'HVAC Design Specification',
    fullName: 'HVAC System Design Specification and Criteria',
    phase: 'FEED',
    discipline: 'HVAC',
    issuanceStatus: 'IFD',
    
    summary: 'Design criteria and specifications for all HVAC systems in buildings and enclosures',
    purpose: 'To establish HVAC requirements ensuring comfort, safety, and equipment protection',
    scope: 'All occupied buildings, control rooms, substations, and equipment enclosures',
    
    detailedDescription: `The HVAC Design Specification establishes criteria for heating, ventilation, and air conditioning systems throughout the facility. It covers design conditions, equipment selection criteria, control strategies, and energy efficiency requirements. Special attention is given to control rooms, electrical rooms, and analyzer shelters with specific environmental requirements.`,
    
    keyComponents: [
      'Indoor and outdoor design conditions',
      'Ventilation rates and air quality requirements',
      'Temperature and humidity control ranges',
      'Pressurization requirements',
      'Equipment sizing criteria',
      'Redundancy requirements',
      'Energy efficiency targets',
      'Acoustic criteria'
    ],
    
    deliverables: [
      'Design criteria document',
      'Load calculation summaries',
      'Equipment specifications',
      'Control philosophy',
      'Energy analysis',
      'Acoustic report'
    ],
    
    bestPractices: [
      'Use accurate weather data for location',
      'Consider future climate trends',
      'Design for part-load efficiency',
      'Include adequate redundancy for critical areas',
      'Consider maintenance access in design',
      'Integrate with building management system'
    ],
    
    commonMistakes: [
      'Undersizing for extreme conditions',
      'Ignoring humidity control requirements',
      'Poor coordination with electrical heat loads',
      'Inadequate fresh air provisions',
      'Missing pressurization requirements',
      'No consideration of standby operation'
    ],
    
    qualityChecklist: [
      'All spaces have defined requirements',
      'Load calculations verified',
      'Redundancy meets criticality',
      'Controls philosophy clear',
      'Energy efficiency addressed',
      'Acoustic requirements met'
    ],
    
    realWorldExamples: [
      'Control room: 22±2°C, 50±10% RH, N+1 redundancy',
      'Electrical rooms: Max 40°C, adequate ventilation',
      'Analyzer shelters: 25°C, clean air supply',
      'General offices: 24±2°C, minimum fresh air'
    ],
    
    applicableStandards: [
      {
        code: 'ASHRAE 62.1',
        title: 'Ventilation for Acceptable Indoor Air Quality',
        organization: 'ASHRAE',
        relevantSections: ['Ventilation rates', 'Air quality']
      },
      {
        code: 'ASHRAE 55',
        title: 'Thermal Environmental Conditions for Human Occupancy',
        organization: 'ASHRAE',
        relevantSections: ['Comfort criteria']
      },
      {
        code: 'ISO 7547',
        title: 'Ships and marine technology - Air conditioning and ventilation',
        organization: 'ISO',
        relevantSections: ['Marine HVAC requirements']
      }
    ],
    
    regulations: [
      'Local building codes',
      'Energy efficiency regulations',
      'Workplace comfort regulations'
    ],
    
    softwareTools: [
      'Carrier HAP',
      'Trane TRACE',
      'IES Virtual Environment',
      'CFD for special areas'
    ]
  },
  
  {
    id: 'HVL',
    code: 'HVL',
    title: 'HVAC Equipment Layout',
    fullName: 'HVAC Equipment Layout and Distribution',
    phase: 'DD',
    discipline: 'HVAC',
    issuanceStatus: 'IFC',
    
    summary: 'Detailed layouts showing HVAC equipment locations and ductwork distribution',
    purpose: 'To coordinate HVAC systems with structure and other services',
    scope: 'All HVAC equipment, ductwork, and refrigerant piping',
    
    detailedDescription: `HVAC Equipment Layouts show the physical arrangement of all HVAC equipment including air handling units, condensing units, ductwork routing, and refrigerant piping. These drawings ensure proper coordination with structural elements and other building services while maintaining required clearances for operation and maintenance.`,
    
    keyComponents: [
      'Equipment location plans',
      'Ductwork routing layouts',
      'Refrigerant piping routes',
      'Equipment schedules with capacities',
      'Clearance requirements',
      'Structural support details',
      'Access and maintenance provisions',
      'Coordination with other services'
    ],
    
    deliverables: [
      'Equipment layout drawings',
      'Ductwork plans and sections',
      'Equipment schedules',
      'Support detail drawings',
      'Coordination drawings',
      'Installation details'
    ],
    
    bestPractices: [
      'Coordinate early with structural design',
      'Maintain code-required clearances',
      'Consider equipment replacement routes',
      'Minimize duct run lengths',
      'Avoid conflicts with cable trays',
      'Plan for thermal expansion'
    ],
    
    commonMistakes: [
      'Insufficient space for ductwork',
      'Poor equipment access',
      'Conflicts with structure',
      'Inadequate condensate drainage',
      'Missing expansion loops',
      'Poor coordination with other trades'
    ],
    
    qualityChecklist: [
      'All equipment properly sized and located',
      'Clearances maintained',
      'No conflicts with structure/services',
      'Maintenance access provided',
      'Drainage properly routed',
      'Supports adequately designed'
    ],
    
    realWorldExamples: [
      'AHU rooms: 1m minimum clearance all around',
      'Ductwork: Maximum 25 Pa/m pressure drop',
      'Condensers: Located considering prevailing winds',
      'Louvers: Sized for 2.5 m/s face velocity'
    ],
    
    applicableStandards: [
      {
        code: 'SMACNA',
        title: 'HVAC Duct Construction Standards',
        organization: 'SMACNA',
        relevantSections: ['Duct construction', 'Support spacing']
      },
      {
        code: 'ASHRAE 90.1',
        title: 'Energy Standard for Buildings',
        organization: 'ASHRAE',
        relevantSections: ['Duct insulation', 'System efficiency']
      }
    ],
    
    regulations: [
      'Fire damper requirements',
      'Seismic restraint codes',
      'Energy codes'
    ],
    
    softwareTools: [
      'Revit MEP',
      'AutoCAD MEP',
      'Navisworks for coordination',
      'MagiCAD'
    ]
  }
];

export const supportDeliverables: DeliverableKnowledge[] = [
  {
    id: 'VDR',
    code: 'VDR',
    title: 'Vendor Document Register',
    fullName: 'Vendor Document Register and Tracking System',
    phase: 'DD',
    discipline: 'Support',
    issuanceStatus: 'IFA',
    
    summary: 'Master register tracking all vendor documentation requirements and status',
    purpose: 'To manage vendor document submissions and ensure timely receipt of critical information',
    scope: 'All vendor-supplied equipment and packages',
    
    detailedDescription: `The Vendor Document Register (VDR) is a comprehensive tracking system for all documentation required from equipment vendors and package suppliers. It defines documentation requirements, submission schedules, review workflows, and approval status. The VDR is critical for ensuring all necessary vendor information is received in time for design, construction, and commissioning activities.`,
    
    keyComponents: [
      'Document requirements by equipment type',
      'Submission schedule requirements',
      'Document coding system',
      'Review and approval workflow',
      'Status tracking mechanisms',
      'Critical document identification',
      'Distribution matrices',
      'Archive requirements'
    ],
    
    deliverables: [
      'Master VDR database',
      'Document requirement lists',
      'Submission schedules',
      'Status reports',
      'Overdue notifications',
      'Close-out reports'
    ],
    
    bestPractices: [
      'Define requirements in purchase orders',
      'Set realistic review durations',
      'Prioritize critical documents',
      'Automate status tracking',
      'Regular vendor follow-up',
      'Clear acceptance criteria'
    ],
    
    commonMistakes: [
      'Generic requirements not equipment-specific',
      'Unrealistic submission schedules',
      'Poor tracking of revisions',
      'No escalation procedures',
      'Missing final documentation',
      'Inadequate review time'
    ],
    
    qualityChecklist: [
      'All vendors registered',
      'Requirements clearly defined',
      'Schedule aligned with project',
      'Review workflow established',
      'Critical documents identified',
      'Close-out criteria defined'
    ],
    
    realWorldExamples: [
      'Typical documents: Drawings, datasheets, O&M manuals',
      'Critical timing: P&IDs before piping design',
      'Review cycle: 2-3 weeks typical',
      'Final dossier: 100+ documents per major equipment'
    ],
    
    applicableStandards: [
      {
        code: 'ISO 15926',
        title: 'Industrial automation systems and integration',
        organization: 'ISO',
        relevantSections: ['Data exchange standards']
      }
    ],
    
    regulations: [
      'Quality system requirements',
      'Regulatory dossier requirements'
    ],
    
    softwareTools: [
      'Aconex',
      'Procore',
      'SharePoint',
      'Specialized EDMS systems'
    ]
  },
  
  {
    id: 'PER',
    code: 'PER',
    title: 'Project Execution Report',
    fullName: 'Project Execution Lessons Learned Report',
    phase: 'CONST',
    discipline: 'Support',
    issuanceStatus: 'IFA',
    
    summary: 'Comprehensive review of project execution capturing lessons learned',
    purpose: 'To document project experience for continuous improvement',
    scope: 'All aspects of project execution from FEED through commissioning',
    
    detailedDescription: `The Project Execution Report provides a comprehensive review of the entire project lifecycle, capturing successes, challenges, and lessons learned. It analyzes project performance against original objectives, documents best practices discovered, and provides recommendations for future projects. This knowledge capture is invaluable for organizational learning.`,
    
    keyComponents: [
      'Project objectives vs achievements',
      'Schedule performance analysis',
      'Cost performance review',
      'Technical challenges and solutions',
      'Vendor performance assessment',
      'Safety performance review',
      'Quality metrics analysis',
      'Recommendations for improvement'
    ],
    
    deliverables: [
      'Executive summary report',
      'Detailed lessons learned',
      'Best practices documentation',
      'Vendor performance reports',
      'Recommendations database',
      'Knowledge sharing presentations'
    ],
    
    bestPractices: [
      'Conduct regular lesson learned sessions',
      'Include all stakeholders perspectives',
      'Focus on actionable improvements',
      'Quantify impacts where possible',
      'Share across organization',
      'Create searchable database'
    ],
    
    commonMistakes: [
      'Waiting until project end',
      'Focusing only on problems',
      'No action items or follow-up',
      'Limited distribution',
      'Too generic to be useful',
      'Missing positive lessons'
    ],
    
    qualityChecklist: [
      'All disciplines covered',
      'Quantitative metrics included',
      'Recommendations actionable',
      'Successes documented',
      'Distribution plan defined',
      'Database updated'
    ],
    
    realWorldExamples: [
      'Modularization: 20% schedule savings documented',
      'Early vendor engagement: Reduced change orders 30%',
      'AWP implementation: Improved construction productivity',
      'Digital twins: Reduced commissioning time'
    ],
    
    applicableStandards: [
      {
        code: 'PMI PMBOK',
        title: 'Project Management Body of Knowledge',
        organization: 'PMI',
        relevantSections: ['Lessons learned processes']
      }
    ],
    
    regulations: [
      'Corporate governance requirements',
      'Regulatory close-out requirements'
    ],
    
    softwareTools: [
      'SharePoint for documentation',
      'Power BI for analytics',
      'Confluence for knowledge base',
      'MS Project for schedule analysis'
    ]
  }
];