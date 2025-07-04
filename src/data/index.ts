// Export all data modules
export * from './disciplines';
export * from './deliverables';
export * from './dependencies';

// Re-export commonly used functions
export { 
  getDeliverableById, 
  getDeliverablesByPhase, 
  getDeliverablesByDiscipline,
  searchDeliverables 
} from './deliverables';

// Learning content and guided tours (to be implemented)
export const learningPaths = {
  basics: {
    id: 'basics',
    title: 'LNG Project Basics',
    description: 'Introduction to LNG projects and key concepts',
    steps: [
      {
        id: 'overview',
        title: 'Project Overview',
        content: 'Understanding the scope of an LNG project',
        deliverables: ['BFD', 'PFD']
      },
      {
        id: 'phases',
        title: 'Project Phases',
        content: 'FEED, Detailed Design, Procurement, and Construction',
        deliverables: []
      },
      {
        id: 'disciplines',
        title: 'Engineering Disciplines',
        content: 'Overview of all disciplines involved',
        deliverables: []
      }
    ]
  },
  
  processFlow: {
    id: 'process-flow',
    title: 'Process Design Flow',
    description: 'How process design develops from concept to detail',
    steps: [
      {
        id: 'bfd',
        title: 'Block Flow Diagram',
        content: 'Starting with the big picture',
        deliverables: ['BFD']
      },
      {
        id: 'pfd',
        title: 'Process Flow Diagram',
        content: 'Adding detail and equipment',
        deliverables: ['PFD', 'HMB']
      },
      {
        id: 'pid',
        title: 'P&ID Development',
        content: 'Complete engineering details',
        deliverables: ['PID']
      }
    ]
  }
};

// Quiz questions (sample)
export const quizQuestions = {
  basics: [
    {
      id: 'q1',
      text: 'What does FEED stand for in LNG projects?',
      type: 'multiple-choice' as const,
      options: [
        'Front End Engineering Development',
        'Front End Engineering Design',
        'Final Engineering and Design',
        'Facility Engineering and Development'
      ],
      correctAnswer: 'Front End Engineering Design',
      explanation: 'FEED (Front End Engineering Design) is the phase where the project is defined in sufficient detail to get accurate cost estimates and make the final investment decision.'
    },
    {
      id: 'q2',
      text: 'Which document shows the overall process configuration without detailed equipment?',
      type: 'multiple-choice' as const,
      options: [
        'P&ID',
        'PFD',
        'BFD',
        'ISO'
      ],
      correctAnswer: 'BFD',
      explanation: 'The Block Flow Diagram (BFD) shows the overall process configuration with major process units as blocks, without detailed equipment or piping information.'
    }
  ]
};

// Glossary terms
export const glossaryTerms = {
  'FEED': {
    term: 'FEED',
    definition: 'Front End Engineering Design - The project phase where process and engineering are developed to ~30% to define the project scope and cost.',
    relatedTerms: ['Basic Engineering', 'Pre-FEED']
  },
  'P&ID': {
    term: 'P&ID',
    definition: 'Piping and Instrumentation Diagram - Detailed diagram showing all piping, equipment, instruments, and control systems.',
    relatedTerms: ['PFD', 'Isometric']
  },
  'GBS': {
    term: 'GBS',
    definition: 'Gravity Based Structure - A concrete structure that sits on the seabed and supports the LNG facility topsides.',
    relatedTerms: ['Topsides', 'Marine Operations']
  },
  'HAZOP': {
    term: 'HAZOP',
    definition: 'Hazard and Operability Study - A systematic review of P&IDs to identify potential hazards and operability issues.',
    relatedTerms: ['HAZID', 'Risk Assessment']
  },
  'ISO': {
    term: 'Isometric',
    definition: 'Piping Isometric Drawing - A 3D representation of piping shown in isometric projection for fabrication.',
    relatedTerms: ['Spool', 'P&ID']
  }
};