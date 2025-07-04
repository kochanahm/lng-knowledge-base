import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Tooltip,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Collapse,
  Badge,
} from '@mui/material';
import {
  Search,
  FilterList,
  Clear,
  ExpandLess,
  ExpandMore,
  Timeline,
  AccountTree,
  School,
  Explore,
} from '@mui/icons-material';
import { useKnowledgeStore } from '@/store/knowledgeStore';
import { disciplines } from '@/data/disciplines';
import { ProjectPhase, Discipline, LearningMode } from '@/types';

const phases: ProjectPhase[] = ['FEED', 'DD', 'PROC', 'CONST'];

export function DiagramControls() {
  const {
    filters,
    updateFilters,
    resetFilters,
    learningMode,
    setLearningMode,
    viewedDeliverables,
  } = useKnowledgeStore();
  
  const [expandFilters, setExpandFilters] = useState(true);
  const [searchInput, setSearchInput] = useState(filters.searchTerm);
  
  // Handle search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    // Debounce search
    const timeoutId = setTimeout(() => {
      updateFilters({ searchTerm: value });
    }, 300);
    return () => clearTimeout(timeoutId);
  };
  
  // Handle phase filter
  const handlePhaseToggle = (phase: ProjectPhase) => {
    const newPhases = filters.phases.includes(phase)
      ? filters.phases.filter(p => p !== phase)
      : [...filters.phases, phase];
    updateFilters({ phases: newPhases });
  };
  
  // Handle discipline filter
  const handleDisciplineChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const disciplines = typeof value === 'string' ? value.split(',') : value;
    updateFilters({ disciplines: disciplines as Discipline[] });
  };
  
  // Handle learning mode change
  const handleLearningModeChange = (mode: LearningMode) => {
    setLearningMode(mode);
  };
  
  // Calculate progress
  const totalDeliverables = 190; // This should come from data
  const viewedCount = viewedDeliverables.size;
  const progressPercentage = Math.round((viewedCount / totalDeliverables) * 100);
  
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: 80,
        right: 20,
        width: 320,
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <Box sx={{ p: 2, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Diagram Controls
          </Typography>
          <IconButton
            size="small"
            onClick={() => setExpandFilters(!expandFilters)}
          >
            {expandFilters ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        
        {/* Progress indicator */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Progress: {viewedCount} of {totalDeliverables} viewed ({progressPercentage}%)
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 4,
              bgcolor: 'action.hover',
              borderRadius: 2,
              mt: 0.5,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: `${progressPercentage}%`,
                height: '100%',
                bgcolor: 'primary.main',
                transition: 'width 0.3s ease',
              }}
            />
          </Box>
        </Box>
      </Box>
      
      <Divider />
      
      <Box sx={{ overflow: 'auto', flex: 1 }}>
        <Collapse in={expandFilters}>
          <Box sx={{ p: 2 }}>
            {/* Search */}
            <TextField
              fullWidth
              size="small"
              placeholder="Search deliverables..."
              value={searchInput}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'action.active' }} />,
                endAdornment: searchInput && (
                  <IconButton
                    size="small"
                    onClick={() => {
                      setSearchInput('');
                      updateFilters({ searchTerm: '' });
                    }}
                  >
                    <Clear />
                  </IconButton>
                ),
              }}
              sx={{ mb: 2 }}
            />
            
            {/* Learning Mode */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Learning Mode
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  icon={<Explore />}
                  label="Explore"
                  size="small"
                  onClick={() => handleLearningModeChange(LearningMode.EXPLORE)}
                  color={learningMode === LearningMode.EXPLORE ? 'primary' : 'default'}
                  variant={learningMode === LearningMode.EXPLORE ? 'filled' : 'outlined'}
                />
                <Chip
                  icon={<School />}
                  label="Guided"
                  size="small"
                  onClick={() => handleLearningModeChange(LearningMode.GUIDED)}
                  color={learningMode === LearningMode.GUIDED ? 'primary' : 'default'}
                  variant={learningMode === LearningMode.GUIDED ? 'filled' : 'outlined'}
                />
                <Chip
                  icon={<AccountTree />}
                  label="By Discipline"
                  size="small"
                  onClick={() => handleLearningModeChange(LearningMode.DISCIPLINE)}
                  color={learningMode === LearningMode.DISCIPLINE ? 'primary' : 'default'}
                  variant={learningMode === LearningMode.DISCIPLINE ? 'filled' : 'outlined'}
                />
                <Chip
                  icon={<Timeline />}
                  label="By Phase"
                  size="small"
                  onClick={() => handleLearningModeChange(LearningMode.PHASE)}
                  color={learningMode === LearningMode.PHASE ? 'primary' : 'default'}
                  variant={learningMode === LearningMode.PHASE ? 'filled' : 'outlined'}
                />
              </Box>
            </Box>
            
            {/* Phase Filter */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Filter by Phase
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {phases.map(phase => (
                  <Chip
                    key={phase}
                    label={phase}
                    size="small"
                    onClick={() => handlePhaseToggle(phase)}
                    color={filters.phases.includes(phase) ? 'primary' : 'default'}
                    variant={filters.phases.includes(phase) ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </Box>
            
            {/* Discipline Filter */}
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Discipline</InputLabel>
                <Select
                  multiple
                  value={filters.disciplines}
                  onChange={handleDisciplineChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.length === 0 ? (
                        <em>All disciplines</em>
                      ) : (
                        `${selected.length} selected`
                      )}
                    </Box>
                  )}
                >
                  {Object.keys(disciplines).map((disc) => (
                    <MenuItem key={disc} value={disc}>
                      <Checkbox checked={filters.disciplines.includes(disc as Discipline)} />
                      <Typography variant="body2">{disc}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            
            {/* Active Filters Summary */}
            {(filters.phases.length > 0 || 
              filters.disciplines.length > 0 || 
              filters.searchTerm) && (
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle2">
                    Active Filters
                  </Typography>
                  <Button
                    size="small"
                    onClick={resetFilters}
                    startIcon={<Clear />}
                  >
                    Clear All
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {filters.searchTerm && (
                    <Chip
                      size="small"
                      label={`Search: "${filters.searchTerm}"`}
                      onDelete={() => updateFilters({ searchTerm: '' })}
                    />
                  )}
                  {filters.phases.map(phase => (
                    <Chip
                      key={phase}
                      size="small"
                      label={`Phase: ${phase}`}
                      onDelete={() => handlePhaseToggle(phase)}
                    />
                  ))}
                  {filters.disciplines.length > 0 && (
                    <Chip
                      size="small"
                      label={`${filters.disciplines.length} disciplines`}
                      onDelete={() => updateFilters({ disciplines: [] })}
                    />
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Collapse>
        
        {/* Quick Actions */}
        <Box sx={{ p: 2, pt: 0 }}>
          <Typography variant="subtitle2" gutterBottom>
            Quick Actions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              size="small"
              startIcon={<Timeline />}
              onClick={() => {
                // Show critical path
                console.log('Show critical path');
              }}
            >
              Show Critical Path
            </Button>
            <Button
              size="small"
              startIcon={<FilterList />}
              onClick={() => {
                // Show only viewed deliverables
                console.log('Show viewed only');
              }}
            >
              Show Viewed Only
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}