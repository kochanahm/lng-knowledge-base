// src/components/OilGasEngineering/common/ActivityFeed.tsx
import React from 'react';
import { FileText, Eye, Edit, GitBranch, Users, CheckCircle, LucideIcon } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Activity } from '../../../types';

export interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getIcon = (type: Activity['type']): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      document: FileText,
      review: Eye,
      update: Edit,
      interface: GitBranch,
      approval: CheckCircle,
      coordination: Users
    };
    return icons[type] || FileText;
  };

  const getIconColor = (discipline: string): string => {
    const colors: Record<string, string> = {
      process: 'bg-blue-100 text-blue-600',
      mechanical: 'bg-green-100 text-green-600',
      piping: 'bg-purple-100 text-purple-600',
      electrical: 'bg-yellow-100 text-yellow-600',
      safety: 'bg-red-100 text-red-600'
    };
    return colors[discipline] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="space-y-3">
      {activities.map((activity) => {
        const Icon = getIcon(activity.type);
        return (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className={`p-2 rounded-lg ${getIconColor(activity.discipline)}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{activity.title}</p>
                {activity.status && <StatusBadge status={activity.status} size="small" />}
              </div>
              {activity.description && (
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              )}
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <span>{activity.user}</span>
                <span className="mx-2">•</span>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityFeed;