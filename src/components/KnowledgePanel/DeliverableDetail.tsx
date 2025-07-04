import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Alert,
} from '@mui/material';
import {
  Close,
  ExpandMore,
  CheckCircle,
  Info,
  Description,
  Build,
  Warning,
  School,
  Link as LinkIcon,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';
import { useKnowledgeStore } from '@/store/knowledgeStore';
import { useDeliverables, useDependencyAnalysis } from '@/hooks/useDeliverables';
import { DeliverableKnowledge, Dependency } from '@/types';
import { getDeliverableById } from '@/data/deliverables';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`deliverable-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

export function DeliverableDetail() {
  const { selectedDeliverable, togglePanel, isPanelOpen, selectDeliverable } = useKnowledgeStore();
  const { selectedDeliverable: deliverableData, selectedDependencies } = useDeliverables();
  const dependencyAnalysis = useDependencyAnalysis(selectedDeliverable);
  const [activeTab, setActiveTab] = useState(0);
  
  if (!isPanelOpen || !deliverableData) {
    return null;
  }
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const handleDependencyClick = (deliverableId: string) => {
    selectDeliverable(deliverableId);
  };
  
  return (
    <Paper
      elevation={4}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 480,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 20,
        borderLeft: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            {deliverableData.code}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {deliverableData.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
            <Chip
              label={deliverableData.phase}
              size="small"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            />
            <Chip
              label={deliverableData.discipline}
              size="small"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            />
            <Chip
              label={deliverableData.issuanceStatus}
              size="small"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            />
          </Box>
        </Box>
        <IconButton
          onClick={togglePanel}
          sx={{ color: 'primary.contrastText' }}
        >
          <Close />
        </IconButton>
      </Box>
      
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Dependencies" />
          <Tab label="Learn" />
        </Tabs>
      </Box>
      
      {/* Tab Content */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {/* Overview Tab */}
        <TabPanel value={activeTab} index={0}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <Info sx={{ mr: 1 }} /> Summary
            </Typography>
            <Typography variant="body1" paragraph>
              {deliverableData.summary}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Purpose
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {deliverableData.purpose}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Scope
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {deliverableData.scope}
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom>
              Key Deliverables
            </Typography>
            <List dense>
              {deliverableData.deliverables.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Description fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>
        
        {/* Details Tab */}
        <TabPanel value={activeTab} index={1}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Detailed Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                {deliverableData.detailedDescription}
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Key Components</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {deliverableData.keyComponents.map((component, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={component} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Best Practices</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {deliverableData.bestPractices.map((practice, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={practice} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Common Mistakes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {deliverableData.commonMistakes.map((mistake, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Warning color="error" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={mistake} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        
        {/* Dependencies Tab */}
        <TabPanel value={activeTab} index={2}>
          {dependencyAnalysis && (
            <Box sx={{ mb: 2 }}>
              <Alert severity="info">
                This deliverable has {dependencyAnalysis.upstreamCount} upstream dependencies 
                and feeds into {dependencyAnalysis.downstreamCount} downstream deliverables.
              </Alert>
            </Box>
          )}
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowUpward sx={{ mr: 1 }} /> Requires Input From
            </Typography>
            {selectedDependencies.upstream.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No upstream dependencies
              </Typography>
            ) : (
              <List>
                {selectedDependencies.upstream.map((dep) => {
                  const sourceDeliverable = getDeliverableById(dep.source);
                  return (
                    <ListItem
                      key={dep.source}
                      button
                      onClick={() => handleDependencyClick(dep.source)}
                    >
                      <ListItemIcon>
                        <LinkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={sourceDeliverable?.code || dep.source}
                        secondary={
                          <>
                            <Typography variant="caption" display="block">
                              {dep.description}
                            </Typography>
                            <Chip
                              label={dep.relationship}
                              size="small"
                              sx={{ mt: 0.5 }}
                            />
                          </>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowDownward sx={{ mr: 1 }} /> Feeds Into
            </Typography>
            {selectedDependencies.downstream.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                No downstream dependencies
              </Typography>
            ) : (
              <List>
                {selectedDependencies.downstream.map((dep) => {
                  const targetDeliverable = getDeliverableById(dep.target);
                  return (
                    <ListItem
                      key={dep.target}
                      button
                      onClick={() => handleDependencyClick(dep.target)}
                    >
                      <ListItemIcon>
                        <LinkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={targetDeliverable?.code || dep.target}
                        secondary={
                          <>
                            <Typography variant="caption" display="block">
                              {dep.description}
                            </Typography>
                            <Chip
                              label={dep.relationship}
                              size="small"
                              sx={{ mt: 0.5 }}
                            />
                          </>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Box>
        </TabPanel>
        
        {/* Learn Tab */}
        <TabPanel value={activeTab} index={3}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quality Checklist
            </Typography>
            <List dense>
              {deliverableData.qualityChecklist.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Real-World Examples
            </Typography>
            {deliverableData.realWorldExamples.map((example, index) => (
              <Alert key={index} severity="info" sx={{ mb: 1 }}>
                {example}
              </Alert>
            ))}
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Applicable Standards
            </Typography>
            <List dense>
              {deliverableData.applicableStandards.map((standard, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${standard.code} - ${standard.title}`}
                    secondary={standard.organization}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom>
              Software Tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {deliverableData.softwareTools?.map((tool, index) => (
                <Chip key={index} label={tool} variant="outlined" />
              ))}
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </Paper>
  );
}