import React, { memo } from 'react';
import { EdgeProps, getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import { Tooltip, Chip } from '@mui/material';
import { DiagramEdge } from '@/types';
import { useKnowledgeStore } from '@/store/knowledgeStore';

// Dependency type colors and styles
const dependencyStyles = {
  requires: {
    stroke: '#f44336',
    strokeWidth: 3,
    strokeDasharray: '0',
    markerEnd: 'url(#arrow-requires)',
  },
  'feeds-into': {
    stroke: '#2196f3',
    strokeWidth: 2,
    strokeDasharray: '0',
    markerEnd: 'url(#arrow-feeds-into)',
  },
  validates: {
    stroke: '#4caf50',
    strokeWidth: 2,
    strokeDasharray: '5 5',
    markerEnd: 'url(#arrow-validates)',
  },
  references: {
    stroke: '#9e9e9e',
    strokeWidth: 1.5,
    strokeDasharray: '2 4',
    markerEnd: 'url(#arrow-references)',
  },
  approves: {
    stroke: '#ff9800',
    strokeWidth: 2,
    strokeDasharray: '0',
    markerEnd: 'url(#arrow-approves)',
  },
};

export const CustomDependencyEdge = memo<EdgeProps<DiagramEdge['data']>>(
  ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    data,
    selected,
  }) => {
    const selectDependency = useKnowledgeStore((state) => state.selectDependency);
    const [edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
    
    const dependency = data?.dependency;
    const style = dependency ? dependencyStyles[dependency.relationship] : dependencyStyles['feeds-into'];
    
    const handleEdgeClick = () => {
      if (dependency) {
        selectDependency(dependency);
      }
    };
    
    // Enhanced style for selected or highlighted edges
    const getEdgeStyle = () => {
      const baseStyle = {
        ...style,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      };
      
      if (selected) {
        return {
          ...baseStyle,
          strokeWidth: (style.strokeWidth || 2) + 2,
          filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))',
        };
      }
      
      return baseStyle;
    };
    
    const edgeLabel = dependency && (
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
        >
          <Tooltip
            title={
              <div>
                <strong>{dependency.relationship.replace('-', ' ')}</strong>
                <br />
                {dependency.description}
              </div>
            }
            arrow
          >
            <Chip
              label={dependency.relationship.replace('-', ' ')}
              size="small"
              onClick={handleEdgeClick}
              sx={{
                height: 18,
                fontSize: '0.65rem',
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: style.stroke,
                color: style.stroke,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: style.stroke,
                  color: 'white',
                },
              }}
            />
          </Tooltip>
        </div>
      </EdgeLabelRenderer>
    );
    
    return (
      <>
        <BaseEdge
          id={id}
          path={edgePath}
          style={getEdgeStyle()}
        />
        {selected && edgeLabel}
      </>
    );
  }
);

CustomDependencyEdge.displayName = 'CustomDependencyEdge';

// Arrow marker definitions component
export const EdgeMarkers = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <defs>
      <marker
        id="arrow-requires"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f44336" />
      </marker>
      
      <marker
        id="arrow-feeds-into"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2196f3" />
      </marker>
      
      <marker
        id="arrow-validates"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#4caf50" />
      </marker>
      
      <marker
        id="arrow-references"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="6"
        markerHeight="6"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#9e9e9e" />
      </marker>
      
      <marker
        id="arrow-approves"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff9800" />
      </marker>
    </defs>
  </svg>
);