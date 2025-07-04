import { Box, Typography, Paper } from '@mui/material';

export default function Reference() {
  return (
    <Box>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">Deliverables Reference</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Searchable reference documentation will be implemented here...
        </Typography>
      </Paper>
    </Box>
  );
}