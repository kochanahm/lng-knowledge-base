import { Box, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Learn() {
  const { topic } = useParams();
  
  return (
    <Box>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Learning Path: {topic || 'Basics'}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Guided learning content will be implemented here...
        </Typography>
      </Paper>
    </Box>
  );
}