import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Box, Typography, Chip, Tooltip } from '@mui/material';
import {
  CheckCircleOutline,
  RadioButtonUnchecked,
  Build,
  Description,
  Engineering,
  LocalShipping,
} from '@mui/icons-material';
import { DiagramNode } from '@/types';
import { useKnowledgeStore } from '@/store/knowledgeStore';

// Phase icons
const phaseIcons = {
  FEED: <Description fontSize="small" />,
  DD: <Engineering fontSize="small" />,
  PROC: <Build fontSize="small" />,
  CONST: <LocalShipping fontSize="small" />,
};

// Custom node component
export const CustomDeliverableNode = memo<NodeProps<DiagramNode['data']>>(
  ({ data, selected, id }) => {
    const { deliverable, isHighlighted } = data;
    const viewedDeliverables = useKnowledgeStore((state) => state.viewedDeliverables);
    const selectDeliverable = useKnowledgeStore((state) => state.selectDeliverable);
    
    const isViewed = viewedDeliverables.has(id);
    
    const handleClick = () => {
      selectDeliverable(id);
    };
    
    // Determine node styling based on state
    const getNodeStyle = () => {
      const baseStyle = {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: '#ddd',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        minWidth: '180px',
        maxWidth: '220px',
      };
      
      if (selected) {
        return {
          ...baseStyle,
          borderColor: '#1976d2',
          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
          transform: 'scale(1.05)',
        };
      }
      
      if (isHighlighted) {
        return {
          ...baseStyle,
          backgroundColor: '#fff3cd',
          borderColor: '#ffc107',
        };
      }
      
      return baseStyle;
    };
    
    return (
      <>
        <Handle
          type="target"
          position={Position.Top}
          style={{
            background: '#555',
            width: 8,
            height: 8,
          }}
        />
        
        <Tooltip
          title={
            <Box>
              <Typography variant="body2">{deliverable.summary}</Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Click for detailed information
              </Typography>
            </Box>
          }
          arrow
          placement="top"
        >
          <Box
            onClick={handleClick}
            sx={getNodeStyle()}
            className={`phase-${deliverable.phase.toLowerCase()} discipline-${deliverable.discipline.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {/* Header with phase and status */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Chip
                icon={phaseIcons[deliverable.phase]}
                label={deliverable.phase}
                size="small"
                sx={{ 
                  height: 20,
                  fontSize: '0.7rem',
                  '& .MuiChip-icon': { fontSize: '0.9rem' }
                }}
              />
              {isViewed ? (
                <CheckCircleOutline sx={{ fontSize: 16, color: 'success.main' }} />
              ) : (
                <RadioButtonUnchecked sx={{ fontSize: 16, color: 'text.disabled' }} />
              )}
            </Box>
            
            {/* Deliverable code and title */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                fontSize: '0.95rem',
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              {deliverable.code}
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                color: 'text.secondary',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {deliverable.title}
            </Typography>
            
            {/* Bottom info */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.65rem',
                  color: 'text.disabled',
                  fontWeight: 500,
                }}
              >
                {deliverable.discipline}
              </Typography>
              <Chip
                label={deliverable.issuanceStatus}
                size="small"
                sx={{
                  height: 16,
                  fontSize: '0.65rem',
                  backgroundColor: 'action.selected',
                }}
              />
            </Box>
          </Box>
        </Tooltip>
        
        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            background: '#555',
            width: 8,
            height: 8,
          }}
        />
      </>
    );
  }
);

CustomDeliverableNode.displayName = 'CustomDeliverableNode';