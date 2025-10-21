// src/components/OilGasEngineering/Dashboard.tsx

import React from 'react';
import { 
  Activity, 
  FileText, 
  CheckCircle, 
  TrendingUp,
  Clock,
  AlertCircle,
  Users,
  Package
} from 'lucide-react';
import { useEngineering } from '../../contexts/EngineeringContext';
import StatCard from './common/StatCard';
import ActivityFeed from './common/ActivityFeed';
import ProjectTimeline from './common/ProjectTimeline';
import CoordinationMatrix from './common/CoordinationMatrix';

interface Activity {
  id: number;
  type: 'document' | 'review' | 'update' | 'interface';
  title: string;
  description: string;
  time: string;
  status: string;
  user: string;
  discipline: string;
}

interface CoordinationItem {
  from: string;
  to: string;
  item: string;
  status: 'pending' | 'in-progress' | 'complete';
  dueDate: string;
}

const Dashboard: React.FC = () => {
  const { 
    getStatistics, 
    currentPhase, 
    projectInfo,
    pendingActions,
    actionItems,
    PROJECT_PHASES 
  } = useEngineering();

  const stats = getStatistics();

  // Recent activities
  const recentActivities: Activity[] = [
    {
      id: 1,
      type: 'document',
      title: 'P&ID Rev.3 Approved',
      description: 'Unit 100 P&ID approved for construction',
      time: '2 hours ago',
      status: 'IFC',
      user: 'Mike Johnson',
      discipline: 'process'
    },
    {
      id: 2,
      type: 'review',
      title: 'HAZOP Meeting Completed',
      description: 'Node 5 review completed with 3 action items',
      time: '4 hours ago',
      status: 'Complete',
      user: 'Safety Team',
      discipline: 'safety'
    },
    {
      id: 3,
      type: 'update',
      title: 'Equipment List Updated',
      description: 'Added 5 new pumps to equipment list',
      time: '6 hours ago',
      status: 'IFD',
      user: 'Bob Wilson',
      discipline: 'mechanical'
    },
    {
      id: 4,
      type: 'interface',
      title: 'Data Exchange Complete',
      description: 'Nozzle orientations sent from Mechanical to Piping',
      time: '8 hours ago',
      status: 'Complete',
      user: 'Interface Coordinator',
      discipline: 'mechanical'
    }
  ];

  // Coordination items
  const coordinationItems: CoordinationItem[] = [
    {
      from: 'Process',
      to: 'Mechanical',
      item: 'Equipment sizing data',
      status: 'pending',
      dueDate: '2024-11-22'
    },
    {
      from: 'Piping',
      to: 'Civil',
      item: 'Pipe support loads',
      status: 'complete',
      dueDate: '2024-11-20'
    },
    {
      from: 'Electrical',
      to: 'Instrumentation',
      item: 'Cable routing coordination',
      status: 'in-progress',
      dueDate: '2024-11-25'
    },
    {
      from: 'Layout',
      to: 'All Disciplines',
      item: 'Plot Plan Rev.3 issued',
      status: 'complete',
      dueDate: '2024-11-18'
    }
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Project Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{projectInfo.name}</h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-blue-200 text-sm">Client</p>
                <p className="font-semibold">{projectInfo.client}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Location</p>
                <p className="font-semibold">{projectInfo.location}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Contract Type</p>
                <p className="font-semibold">{projectInfo.contractType}</p>
              </div>
              <div>
                <p className="text-blue-200 text-sm">Contract Value</p>
                <p className="font-semibold">{projectInfo.value}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-blue-200 text-sm">Current Phase</p>
            <p className="text-2xl font-bold">
              {PROJECT_PHASES[currentPhase.toUpperCase()].name.split(' ')[0]}
            </p>
            <p className="text-blue-200 mt-2">
              Cost Accuracy: {PROJECT_PHASES[currentPhase.toUpperCase()].accuracy}
            </p>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Documents"
          value={stats.totalDocuments.toString()}
          subValue={`${stats.documentsByStatus.IFC || 0} approved`}
          icon={FileText}
          color="blue"
          trend="+12%"
        />
        <StatCard
          title="Active Tasks"
          value={stats.pendingActionsCount.toString()}
          subValue={`${stats.openActionItems} action items`}
          icon={CheckCircle}
          color="orange"
          trend="-5%"
        />
        <StatCard
          title="Schedule Progress"
          value={`${stats.scheduleProgress}%`}
          subValue="On track"
          icon={TrendingUp}
          color="green"
          trend="+3%"
        />
        <StatCard
          title="Interfaces"
          value={coordinationItems.length.toString()}
          subValue="Active exchanges"
          icon={Users}
          color="purple"
        />
      </div>

      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
          <ActivityFeed activities={recentActivities} />
        </div>

        {/* Discipline Coordination */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Discipline Coordination</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Matrix
            </button>
          </div>
          <CoordinationMatrix items={coordinationItems} />
        </div>
      </div>

      {/* Critical Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
            Critical Actions Required
          </h3>
          <span className="text-sm text-gray-500">
            {actionItems.filter(a => a.status === 'open').length} open items
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actionItems
            .filter(a => a.status === 'open' && a.priority === 'high')
            .slice(0, 4)
            .map(item => (
              <div key={item.id} className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-medium text-sm">{item.description}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {item.assignedTo}
                  </span>
                  <span className="text-xs text-red-600 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Due: {item.dueDate}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Phase Progress */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Phase Deliverables Progress</h3>
        <div className="space-y-3">
          {PROJECT_PHASES[currentPhase.toUpperCase()].deliverables.slice(0, 5).map((deliverable, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3
                  ${index < 2 ? 'bg-green-100 text-green-600' : 
                    index < 4 ? 'bg-blue-100 text-blue-600' : 
                    'bg-gray-100 text-gray-600'}`}>
                  {index < 2 ? <CheckCircle className="w-4 h-4" /> : 
                   index < 4 ? <Clock className="w-4 h-4" /> : 
                   <Package className="w-4 h-4" />}
                </div>
                <span className="text-sm font-medium">{deliverable}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index < 2 ? 'bg-green-500' : 
                      index < 4 ? 'bg-blue-500' : 
                      'bg-gray-400'
                    }`}
                    style={{ width: `${index < 2 ? 100 : index < 4 ? 60 : 20}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 w-10 text-right">
                  {index < 2 ? '100%' : index < 4 ? '60%' : '20%'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export type { Activity, CoordinationItem };