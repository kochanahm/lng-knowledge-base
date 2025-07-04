import { Discipline } from '@/types';

export interface DisciplineInfo {
  id: Discipline;
  name: string;
  description: string;
  color: string;
  icon: string;
  keyDeliverables: string[];
  overview: string;
  responsibilities: string[];
  interfaces: string[];
}

export const disciplines: Record<Discipline, DisciplineInfo> = {
  Process: {
    id: 'Process',
    name: 'Process Engineering',
    description: 'Develops the process design basis, flow schemes, and operating philosophy',
    color: '#1976D2',
    icon: 'ProcessIcon',
    keyDeliverables: ['BFD', 'PFD', 'P&ID', 'HAZOP'],
    overview: 'Process engineering forms the backbone of the LNG facility design, defining how natural gas is processed, liquefied, and stored.',
    responsibilities: [
      'Develop process flow diagrams and heat & material balances',
      'Define operating conditions and process control philosophy',
      'Conduct process safety studies (HAZID, HAZOP)',
      'Size and specify process equipment',
      'Optimize energy efficiency and product recovery'
    ],
    interfaces: [
      'Equipment: Provides process data for mechanical design',
      'Instrumentation: Defines control requirements',
      'HSE: Collaborates on safety studies',
      'Piping: Provides line sizing and specifications'
    ]
  },
  
  HSE: {
    id: 'HSE',
    name: 'Health, Safety & Environment',
    description: 'Ensures safe design and operation through risk assessment and mitigation',
    color: '#E65100',
    icon: 'HSEIcon',
    keyDeliverables: ['HAZID', 'HAZOP', 'QRA', 'F&G Mapping'],
    overview: 'HSE discipline ensures the facility is designed and operated safely, protecting personnel, assets, and the environment.',
    responsibilities: [
      'Conduct hazard identification and risk assessments',
      'Develop safety philosophies and emergency response plans',
      'Design fire and gas detection systems',
      'Ensure regulatory compliance',
      'Define escape routes and safety systems'
    ],
    interfaces: [
      'Process: Joint safety studies and reviews',
      'Layout: Safety distances and escape routes',
      'Instrumentation: Safety instrumented systems',
      'All disciplines: Safety in design reviews'
    ]
  },
  
  Equipment: {
    id: 'Equipment',
    name: 'Mechanical Equipment',
    description: 'Specifies and procures major mechanical equipment',
    color: '#388E3C',
    icon: 'EquipmentIcon',
    keyDeliverables: ['Equipment List', 'Datasheets', 'Vendor Packages'],
    overview: 'Mechanical equipment discipline handles the specification, procurement, and integration of all rotating and static equipment.',
    responsibilities: [
      'Develop equipment specifications and datasheets',
      'Evaluate vendor bids and manage procurement',
      'Review vendor drawings and documentation',
      'Coordinate equipment layout and access',
      'Define spare parts and maintenance requirements'
    ],
    interfaces: [
      'Process: Equipment sizing and performance',
      'Piping: Nozzle loads and connections',
      'Structural: Equipment loads and support',
      'Electrical: Motor requirements'
    ]
  },
  
  Piping: {
    id: 'Piping',
    name: 'Piping & Layout',
    description: 'Designs piping systems and overall facility layout',
    color: '#388E3C',
    icon: 'PipingIcon',
    keyDeliverables: ['Plot Plan', 'Piping ISO', 'GAD', 'MTO'],
    overview: 'Piping discipline develops the physical layout of the facility and designs all piping systems connecting equipment.',
    responsibilities: [
      'Develop plot plans and equipment arrangements',
      'Design piping routes and supports',
      'Create isometric drawings for fabrication',
      'Specify piping materials and components',
      'Conduct stress analysis for critical lines'
    ],
    interfaces: [
      'Process: Line sizing and specifications',
      'Equipment: Nozzle orientations and loads',
      'Structural: Pipe rack and support design',
      'Instrumentation: Instrument connections'
    ]
  },
  
  Material: {
    id: 'Material',
    name: 'Material & Insulation',
    description: 'Defines material selection, corrosion protection, and insulation',
    color: '#FF9800',
    icon: 'MaterialIcon',
    keyDeliverables: ['Material Selection', 'Insulation Specs', 'Painting Specs'],
    overview: 'Material discipline ensures proper material selection for the service conditions and defines preservation requirements.',
    responsibilities: [
      'Conduct material selection studies',
      'Define corrosion allowances and protection',
      'Specify insulation requirements',
      'Develop painting and coating specifications',
      'Address corrosion under insulation (CUI) risks'
    ],
    interfaces: [
      'Process: Service conditions and fluid properties',
      'Piping: Material specifications',
      'Equipment: Material requirements',
      'Civil: Concrete protection requirements'
    ]
  },
  
  Structural: {
    id: 'Structural',
    name: 'Structural Engineering',
    description: 'Designs steel structures, platforms, and equipment supports',
    color: '#7B1FA2',
    icon: 'StructuralIcon',
    keyDeliverables: ['Structural Drawings', 'Analysis Reports', 'Lifting Plans'],
    overview: 'Structural discipline designs all steel structures including pipe racks, equipment supports, and access platforms.',
    responsibilities: [
      'Design structural steel frameworks',
      'Analyze loads and structural integrity',
      'Design equipment and pipe supports',
      'Develop lifting and rigging plans',
      'Coordinate modularization strategy'
    ],
    interfaces: [
      'Equipment: Equipment loads and supports',
      'Piping: Pipe rack design and loads',
      'Civil: Foundation interfaces',
      'Naval: GBS structural integration'
    ]
  },
  
  Civil: {
    id: 'Civil',
    name: 'Civil & Geotechnical',
    description: 'Designs foundations, concrete structures, and site development',
    color: '#7B1FA2',
    icon: 'CivilIcon',
    keyDeliverables: ['Foundation Drawings', 'GBS Design', 'Site Plan'],
    overview: 'Civil discipline handles all concrete structures, foundations, and site development for the LNG facility.',
    responsibilities: [
      'Conduct geotechnical investigations',
      'Design equipment and structure foundations',
      'Design GBS concrete structure',
      'Develop site grading and drainage',
      'Specify concrete mix designs'
    ],
    interfaces: [
      'Structural: Foundation loads and connections',
      'Naval: GBS marine design',
      'Equipment: Equipment foundation requirements',
      'Process: Containment and bunding'
    ]
  },
  
  Naval: {
    id: 'Naval',
    name: 'Naval & Marine',
    description: 'Handles marine aspects of GBS including stability and installation',
    color: '#00695C',
    icon: 'NavalIcon',
    keyDeliverables: ['Stability Analysis', 'Mooring Design', 'Installation Procedures'],
    overview: 'Naval discipline manages all marine engineering aspects of the GBS from design through installation.',
    responsibilities: [
      'Perform hydrodynamic and stability analyses',
      'Design ballasting and deballasting systems',
      'Develop tow-out and installation procedures',
      'Design mooring and marine systems',
      'Analyze environmental loads'
    ],
    interfaces: [
      'Civil: GBS structural design',
      'Structural: Topside integration',
      'Weight: Weight and COG control',
      'HSE: Marine safety procedures'
    ]
  },
  
  Weight: {
    id: 'Weight',
    name: 'Weight Control',
    description: 'Monitors and controls weight and center of gravity',
    color: '#33691E',
    icon: 'WeightIcon',
    keyDeliverables: ['Weight Reports', 'COG Analysis', 'Weight Register'],
    overview: 'Weight control discipline tracks all weights and maintains center of gravity within design limits.',
    responsibilities: [
      'Maintain weight tracking database',
      'Monitor weight growth and contingency',
      'Calculate and track center of gravity',
      'Support lift and transportation planning',
      'Verify GBS stability requirements'
    ],
    interfaces: [
      'All disciplines: Weight data collection',
      'Naval: Stability calculations',
      'Structural: Lifting analyses',
      'Transport: Load-out planning'
    ]
  },
  
  Instrumentation: {
    id: 'Instrumentation',
    name: 'Instrumentation & Control',
    description: 'Designs control systems, instrumentation, and safety systems',
    color: '#D32F2F',
    icon: 'InstrumentationIcon',
    keyDeliverables: ['I&C Philosophy', 'Loop Diagrams', 'Cause & Effect'],
    overview: 'Instrumentation discipline designs all control systems, field instruments, and safety instrumented systems.',
    responsibilities: [
      'Develop control system architecture',
      'Design control loops and logic',
      'Specify field instrumentation',
      'Design safety instrumented systems',
      'Develop operator interfaces'
    ],
    interfaces: [
      'Process: Control requirements and strategies',
      'HSE: Safety system design',
      'Electrical: Power and signal requirements',
      'Telecom: Network integration'
    ]
  },
  
  Electrical: {
    id: 'Electrical',
    name: 'Electrical Engineering',
    description: 'Designs power generation, distribution, and electrical systems',
    color: '#F57C00',
    icon: 'ElectricalIcon',
    keyDeliverables: ['Single Line Diagrams', 'Load List', 'Cable Schedule'],
    overview: 'Electrical discipline designs the complete power system from generation through distribution to end users.',
    responsibilities: [
      'Design power generation and distribution',
      'Develop electrical single line diagrams',
      'Specify switchgear and transformers',
      'Design grounding and lightning protection',
      'Calculate cable sizes and routes'
    ],
    interfaces: [
      'Equipment: Motor and heater requirements',
      'Instrumentation: Power for instruments',
      'HSE: Hazardous area classification',
      'HVAC: HVAC equipment power'
    ]
  },
  
  Telecom: {
    id: 'Telecom',
    name: 'Telecommunications & Security',
    description: 'Designs communication, security, and IT infrastructure',
    color: '#5D4037',
    icon: 'TelecomIcon',
    keyDeliverables: ['Network Architecture', 'CCTV Layout', 'PA/GA System'],
    overview: 'Telecom discipline provides all communication systems, security systems, and IT infrastructure.',
    responsibilities: [
      'Design telecommunication networks',
      'Implement cybersecurity measures',
      'Design CCTV and access control',
      'Develop PA/GA systems',
      'Integrate with control systems'
    ],
    interfaces: [
      'Instrumentation: Control system networks',
      'HSE: Emergency communication',
      'Electrical: Power requirements',
      'All disciplines: Communication needs'
    ]
  },
  
  Architecture: {
    id: 'Architecture',
    name: 'Architecture & Building',
    description: 'Designs buildings, living quarters, and architectural features',
    color: '#1565C0',
    icon: 'ArchitectureIcon',
    keyDeliverables: ['Building Layouts', 'Room Arrangements', 'Fire Escape Plans'],
    overview: 'Architecture discipline designs all buildings, accommodations, and human-centered spaces.',
    responsibilities: [
      'Design building layouts and room arrangements',
      'Specify architectural finishes',
      'Ensure code compliance for buildings',
      'Design emergency egress routes',
      'Coordinate with MEP disciplines'
    ],
    interfaces: [
      'HVAC: Space conditioning requirements',
      'HSE: Life safety and escape routes',
      'Electrical: Lighting and power',
      'Structural: Building structure'
    ]
  },
  
  HVAC: {
    id: 'HVAC',
    name: 'Heating, Ventilation & Air Conditioning',
    description: 'Designs climate control and ventilation systems',
    color: '#1565C0',
    icon: 'HVACIcon',
    keyDeliverables: ['HVAC Layouts', 'Duct Routing', 'Equipment Schedules'],
    overview: 'HVAC discipline provides climate control and ventilation for all occupied and equipment spaces.',
    responsibilities: [
      'Calculate heating and cooling loads',
      'Design air handling and distribution',
      'Specify HVAC equipment',
      'Design ventilation for hazardous areas',
      'Optimize energy efficiency'
    ],
    interfaces: [
      'Architecture: Space requirements',
      'Process: Heat loads and ventilation',
      'Electrical: Power requirements',
      'HSE: Hazardous area ventilation'
    ]
  },
  
  Support: {
    id: 'Support',
    name: 'Support Systems',
    description: 'Designs utilities and support systems',
    color: '#BF360C',
    icon: 'SupportIcon',
    keyDeliverables: ['Utility P&IDs', 'Water Treatment', 'Compressed Air'],
    overview: 'Support systems discipline designs all utility systems required for facility operation.',
    responsibilities: [
      'Design utility systems (water, air, nitrogen)',
      'Specify utility generation equipment',
      'Design distribution networks',
      'Integrate with main process systems',
      'Ensure reliability and redundancy'
    ],
    interfaces: [
      'Process: Utility requirements',
      'Equipment: Utility equipment specs',
      'Piping: Distribution routing',
      'All disciplines: Utility needs'
    ]
  },
  
  Integration: {
    id: 'Integration',
    name: 'Systems Integration',
    description: 'Coordinates interfaces between disciplines and systems',
    color: '#3E2723',
    icon: 'IntegrationIcon',
    keyDeliverables: ['Interface Diagrams', 'Clash Reports', 'Integration Plans'],
    overview: 'Integration discipline ensures all systems and modules work together seamlessly.',
    responsibilities: [
      'Manage interdisciplinary interfaces',
      'Coordinate 3D model reviews',
      'Resolve clashes and conflicts',
      'Manage module boundaries',
      'Ensure system integration'
    ],
    interfaces: [
      'All disciplines: Interface coordination',
      'Construction: Module boundaries',
      'Commissioning: System handover',
      'Operations: Integrated procedures'
    ]
  }
};