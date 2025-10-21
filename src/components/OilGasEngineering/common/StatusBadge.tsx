// src/components/OilGasEngineering/common/StatusBadge.tsx
import React from 'react';

export interface StatusBadgeProps {
  status: string;
  size?: 'small' | 'normal' | 'large';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'normal' }) => {
  const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
    IFR: { bg: 'bg-amber-100', text: 'text-amber-800', label: 'IFR' },
    IFD: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'IFD' },
    IFC: { bg: 'bg-green-100', text: 'text-green-800', label: 'IFC' },
    Complete: { bg: 'bg-green-100', text: 'text-green-800', label: 'Complete' },
    Pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' },
    'in-progress': { bg: 'bg-blue-100', text: 'text-blue-800', label: 'In Progress' }
  };

  const config = statusConfig[status] || { 
    bg: 'bg-gray-100', 
    text: 'text-gray-800', 
    label: status 
  };

  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    normal: 'px-2.5 py-1 text-xs',
    large: 'px-3 py-1.5 text-sm'
  };

  return (
    <span className={`
      ${config.bg} ${config.text} 
      ${sizeClasses[size]}
      font-medium rounded-full
    `}>
      {config.label}
    </span>
  );
};

export default StatusBadge;