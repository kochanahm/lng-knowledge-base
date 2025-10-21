// src/components/OilGasEngineering/common/StatCard.tsx

import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'gray';
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subValue, icon: Icon, color, trend }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    gray: 'bg-gray-100 text-gray-600'
  };

  const trendColor = trend && trend.startsWith('+') ? 'text-green-500' : 'text-red-500';
  const TrendIcon = trend && trend.startsWith('+') ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color] || colorClasses.gray}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div className={`flex items-center ${trendColor}`}>
            <TrendIcon className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {subValue && (
          <p className="text-gray-600 text-sm mt-1">{subValue}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;




