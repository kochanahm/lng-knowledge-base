import { Box } from '@mui/material';
import { FlowDiagram } from '@/components/DiagramView/FlowDiagram';
import { DiagramControls } from '@/components/DiagramView/DiagramControls';
import { DeliverableDetail } from '@/components/KnowledgePanel/DeliverableDetail';

export default function Explorer() {
  return (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <FlowDiagram />
      <DiagramControls />
      <DeliverableDetail />
    </Box>
  );
}