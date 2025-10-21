// src/components/OilGasEngineering/common/CoordinationMatrix.tsx
import React from 'react';
import { ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { CoordinationItem } from '../../../types';

export interface CoordinationMatrixProps {
  items: CoordinationItem[];
}

const CoordinationMatrix: React.FC<CoordinationMatrixProps> = ({ items }) => {
  const getStatusIcon = (status: CoordinationItem['status']) => {
    switch(status) {
      case 'complete':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: CoordinationItem['status']): string => {
    switch(status) {
      case 'complete':
        return 'bg-green-50 border-green-200';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200';
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className={`p-3 border rounded-lg ${getStatusColor(item.status)}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm">{item.from}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-sm">{item.to}</span>
            </div>
            {getStatusIcon(item.status)}
          </div>
          <p className="text-sm text-gray-600 mb-1">{item.item}</p>
          {item.dueDate && (
            <p className="text-xs text-gray-500">
              Due: {new Date(item.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoordinationMatrix;