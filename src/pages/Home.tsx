import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import {
  ExploreOutlined,
  SchoolOutlined,
  MenuBookOutlined,
  TimelineOutlined,
  AccountTreeOutlined,
  GroupsOutlined,
  ArrowForward,
} from '@mui/icons-material';
import { useKnowledgeStore } from '@/store/knowledgeStore';
import { LearningMode } from '@/types';

interface LearningPathCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  mode?: LearningMode;
  color: string;
  topics: string[];
}

const learningPaths: LearningPathCard[] = [
  {
    title: 'Start with Basics',
    description: 'New to LNG projects? Begin your journey here with fundamental concepts and terminology.',
    icon: <SchoolOutlined fontSize="large" />,
    path: '/learn/basics',
    mode: LearningMode.GUIDED,
    color: '#4CAF50',
    topics: ['Project Phases', 'Key Deliverables', 'Basic Dependencies'],
  },
  {
    title: 'Explore by Discipline',
    description: 'Deep dive into specific engineering disciplines and their deliverables.',
    icon: <AccountTreeOutlined fontSize="large" />,
    path: '/explore?mode=discipline',
    mode: LearningMode.DISCIPLINE,
    color: '#2196F3',
    topics: ['Process', 'Structural', 'Instrumentation', '+ 11 more'],
  },
  {
    title: 'Follow Project Timeline',
    description: 'Understand how deliverables flow through project phases from FEED to Construction.',
    icon: <TimelineOutlined fontSize="large" />,
    path: '/explore?mode=phase',
    mode: LearningMode.PHASE,
    color: '#FF9800',
    topics: ['FEED', 'Detailed Design', 'Procurement', 'Construction'],
  },
  {
    title: 'Interactive Explorer',
    description: 'Free exploration of the complete dependency network with detailed information.',
    icon: <ExploreOutlined fontSize="large" />,
    path: '/explore',
    mode: LearningMode.EXPLORE,
    color: '#9C27B0',
    topics: ['190+ Deliverables', '370+ Dependencies', 'Real-time Filtering'],
  },
];

const statistics = [
  { label: 'Total Deliverables', value: '190+', icon: <MenuBookOutlined /> },
  { label: 'Dependencies', value: '370+', icon: <AccountTreeOutlined /> },
  { label: 'Engineering Disciplines', value: '14', icon: <GroupsOutlined /> },
  { label: 'Project Phases', value: '4', icon: <TimelineOutlined /> },
];

export default function Home() {
  const navigate = useNavigate();
  const setLearningMode = useKnowledgeStore((state) => state.setLearningMode);

  const handlePathClick = (path: string, mode?: LearningMode) => {
    if (mode) {
      setLearningMode(mode);
    }
    navigate(path);
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, color: 'primary.main' }}
        >
          LNG Project Knowledge Base
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Master engineering deliverables and their dependencies through interactive learning
        </Typography>
        
        {/* Quick Stats */}
        <Grid container spacing={2} sx={{ mt: 4, mb: 6 }}>
          {statistics.map((stat) => (
            <Grid item xs={6} sm={3} key={stat.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Learning Paths */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
          Choose Your Learning Path
        </Typography>
        <Grid container spacing={3}>
          {learningPaths.map((path) => (
            <Grid item xs={12} md={6} key={path.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      color: path.color,
                    }}
                  >
                    {path.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 2 }}>
                      {path.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {path.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {path.topics.map((topic) => (
                      <Chip
                        key={topic}
                        label={topic}
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => handlePathClick(path.path, path.mode)}
                    sx={{ ml: 1 }}
                  >
                    Start Learning
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
          What You'll Learn
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Comprehensive Coverage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore all major engineering deliverables across 14 disciplines,
                from Process and HSE to Naval and Architecture.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Real Dependencies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Understand how deliverables connect and depend on each other
                throughout the project lifecycle.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Industry Best Practices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn from real-world examples, common pitfalls, and quality
                checklists for each deliverable.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => handlePathClick('/explore', LearningMode.EXPLORE)}
          endIcon={<ArrowForward />}
        >
          Start Exploring Now
        </Button>
      </Box>
    </Container>
  );
}