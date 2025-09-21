import React from 'react';
import {
  Drawer,
  Box,
  Tabs,
  Tab,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Avatar,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';
import DashboardIcon from '../assets/DashboardIcon.jsx';
import EcommerceIcon from '../assets/EcommerceIcon.jsx';
import ProjectsIcon from '../assets/ProjectsIcon.jsx';
import OnlineCoursesIcon from '../assets/OnlineCoursesIcon.jsx';
import ProfileIcon from '../assets/ProfileIcon.jsx';
import AccountsIcon from '../assets/AccountsIcon.jsx';
import CoperateIcon from '../assets/CoperateIcon.jsx';
import BlogIcon from '../assets/BlogIcon.jsx';
import SocialIcon from '../assets/SocialIcon.jsx';

export default function Sidebar() {
  const [tab, setTab] = React.useState(0);
  const [open, setOpen] = React.useState({
    eCommerce: false,
    projects: false,
    onlineCourses: false,
    userProfile: false,
    account: false,
    corporate: false,
    blog: false,
    social: false,
  });

  const toggle = (name) =>
    setOpen((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          height: '100vh',
          overflowY: 'auto',
          bgcolor: "background.paper",
          color: "text.primary",
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      }}
    >
      {/* Top user avatar */}
      <Box display="flex" alignItems="center" p={2} gap={1}>
        <Avatar alt="ByeWind" src="/avatar.jpg" />
        <Typography variant="body1" fontWeight={600} fontFamily={'Inter, sans-serif'}>
          ByeWind
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={{
          minHeight: 36,
          '& .MuiTab-root': {
            minHeight: 36,
            textTransform: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: 0,
            textAlign: 'center',
            verticalAlign: 'middle',
            color: 'text.disabled',
            '&.Mui-selected': {
              color: 'text.secondary',
            },
            '&:focus': {
              outline: 'none',
            },
            '&.Mui-focusVisible': {
              outline: 'none',
            },
          },
        }}
      >
        <Tab label="Favorites" />
        <Tab label="Recently" />
      </Tabs>

      {/* Lists under each tab */}
      {tab === 0 && (
        <Box>
          <Typography
            variant="overline"
            display="block"
            sx={{ px: 2, pt: 1, color: 'text.secondary', fontFamily: 'Inter, sans-serif' }}
          >
            Favorites
          </Typography>
          <List dense>
            <ListItemButton>
              <CircleIcon style={{ width: 12, height: 12, marginRight: 12, color: "rgba(28,28,28,0.4)" }} />
              <ListItemText primary="Overview" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
            <ListItemButton>
              <CircleIcon style={{ width: 12, height: 12, marginRight: 12, color: "rgba(28,28,28,0.4)" }} />
              <ListItemText primary="Projects" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
          </List>

          <Typography
            variant="overline"
            display="block"
            sx={{ px: 2, pt: 1, color: 'text.secondary', fontFamily: 'Inter, sans-serif' }}
          >
            Dashboards
          </Typography>
          <List dense>
            <ListItemButton selected>
              <DashboardIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Default" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>

            <ListItemButton onClick={() => toggle('eCommerce')}>
              {open.eCommerce ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <EcommerceIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="eCommerce" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
            <Collapse in={open.eCommerce} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Orders" slotProps={{
                    primary: {
                      sx: { fontFamily: 'Inter, sans-serif' }
                    }
                  }} />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => toggle('projects')}>
              {open.projects ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <ProjectsIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Projects" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>

            <ListItemButton onClick={() => toggle('onlineCourses')}>
              {open.onlineCourses ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <OnlineCoursesIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Online Courses" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
          </List>

          <Typography
            variant="overline"
            display="block"
            sx={{ px: 2, pt: 1, color: 'text.secondary', fontFamily: 'Inter, sans-serif' }}
          >
            Pages
          </Typography>
          <List dense>
            <ListItemButton onClick={() => toggle('userProfile')}>
              {open.userProfile ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <ProfileIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="User Profile" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
            <Collapse in={open.userProfile} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'].map(
                  (text) => (
                    <ListItemButton key={text} sx={{ pl: 4 }}>
                      <ListItemText primary={text} slotProps={{
                        primary: {
                          sx: { fontFamily: 'Inter, sans-serif' }
                        }
                      }} />
                    </ListItemButton>
                  )
                )}
              </List>
            </Collapse>

            <ListItemButton onClick={() => toggle('account')}>
              {open.account ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <AccountsIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Account" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>

            <ListItemButton onClick={() => toggle('corporate')}>
              {open.corporate ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <CoperateIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Corporate" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>

            <ListItemButton onClick={() => toggle('blog')}>
              {open.blog ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <BlogIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Blog" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>

            <ListItemButton onClick={() => toggle('social')}>
              {open.social ? <ExpandMore style={{ color: "rgba(28,28,28,0.4)" }} /> : <ChevronRightIcon style={{ color: "rgba(28,28,28,0.4)" }} />}
              <SocialIcon style={{ width: 20, height: 20, marginRight: 12 }} />
              <ListItemText primary="Social" slotProps={{
                primary: {
                  sx: { fontFamily: 'Inter, sans-serif' }
                }
              }} />
            </ListItemButton>
          </List>
        </Box>
      )}

      {tab === 1 && (
        <Box sx={{ px: 2, pt: 2 }}>
          <Typography variant="body2" color="text.secondary" fontFamily={'Inter, sans-serif'}>
            Recently viewed items go here
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
