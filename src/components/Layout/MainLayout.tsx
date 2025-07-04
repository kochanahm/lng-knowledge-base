import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Explore as ExploreIcon,
  School as SchoolIcon,
  MenuBook as ReferenceIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const navigationItems = [
  { 
    title: 'Home', 
    path: '/', 
    icon: <HomeIcon />,
    description: 'Welcome & Overview'
  },
  { 
    title: 'Explorer', 
    path: '/explore', 
    icon: <ExploreIcon />,
    description: 'Interactive Dependency Diagram'
  },
  { 
    title: 'Learn', 
    path: '/learn/basics', 
    icon: <SchoolIcon />,
    description: 'Guided Learning Paths'
  },
  { 
    title: 'Reference', 
    path: '/reference', 
    icon: <ReferenceIcon />,
    description: 'Deliverables Reference'
  },
];

export default function MainLayout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            {drawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            LNG Project Knowledge Base
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Engineering Deliverables & Dependencies
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerOpen ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path || 
                           (item.path.includes('learn') && location.pathname.includes('learn'))}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.main + '20',
                      borderRight: `3px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title} 
                    secondary={item.description}
                    secondaryTypographyProps={{ fontSize: '0.75rem' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Quick Stats
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              190+ Deliverables
            </Typography>
            <Typography variant="body2">
              370+ Dependencies
            </Typography>
            <Typography variant="body2">
              14 Disciplines
            </Typography>
          </Box>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: drawerOpen && !isMobile ? `${drawerWidth}px` : 0,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          mt: 8, // Space for AppBar
          height: 'calc(100vh - 64px)', // Full height minus AppBar
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}