import * as React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  useTheme,
} from "@mui/material";
import BugIcon from "../assets/BugIcon";
import NewUserIcon from "../assets/NewUserIcon";
import SubscribeIcon from "../assets/SubscribeIcon";

export default function NotificationsPanel({ mode }) {
  const theme = useTheme();
  const notifications = [
    { icon: <BugIcon style={{ width: 28, height: 28 }} />, text: "You have a bug that needs attention", time: "Just now" },
    { icon: <NewUserIcon style={{ width: 28, height: 28 }} />, text: "New user registered", time: "59 minutes ago" },
    { icon: <BugIcon style={{ width: 28, height: 28 }} />, text: "You have a bug that needs attention", time: "12 hours ago" },
    { icon: <SubscribeIcon style={{ width: 28, height: 28 }} />, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

  const activities = [
    { name: "You have a bug that needs attention", time: "Just now", avatar: "/avatars/1.png" },
    { name: "Released a new version", time: "59 minutes ago", avatar: "/avatars/2.png" },
    { name: "Submitted a bug", time: "12 hours ago", avatar: "/avatars/3.png" },
    { name: "Modified A data in Page X", time: "Today, 11:59 AM", avatar: "/avatars/4.png" },
    { name: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "/avatars/5.png" },
  ];

  const contacts = [
    { name: "Natali Craig", avatar: "/avatars/6.png" },
    { name: "Drew Cano", avatar: "/avatars/7.png" },
    { name: "Orlando Diggs", avatar: "/avatars/8.png" },
    { name: "Andi Lane", avatar: "/avatars/9.png" },
    { name: "Kate Morrison", avatar: "/avatars/10.png" },
    { name: "Koray Okumus", avatar: "/avatars/11.png" },
  ];

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        borderLeft: "1px solid rgba(0,0,0,0.12)",
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Notifications */}
      {(mode === "notifications" || mode === "sidebar") && (
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>Notifications</Typography>
          <List sx={{ mt: 1, p: 0 }}>
            {notifications.map((n, i) => (
              <ListItem key={i} disableGutters alignItems="flex-start">
                <ListItemAvatar>
                  {n.icon}
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="body2">{n.text}</Typography>}
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {n.time}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}


      {/* Activities */}
      {(mode === "activities" || mode === "sidebar") && (
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>Activities</Typography>
          <List disablePadding
            sx={{
              position: "relative",
              pl: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                left: 16,
                top: 10,
                bottom: 20,
                width: "1px",
                backgroundColor: theme.palette.divider,
              },
            }}
          >
            {activities.map((a, i) => (
              <ListItem key={i} sx={{
                px: 0,
                py: 1,
                alignItems: "flex-start",
              }}>
                <ListItemAvatar sx={{ minWidth: 48 }}>
                  <Avatar src={a.avatar} alt={a.name} sx={{ width: 32, height: 32, zIndex: 1 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="body2">{a.name}</Typography>}
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {a.time}
                    </Typography>
                  }
                  sx={{ my: 0 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}


      {/* Contacts */}
      {(mode !== "notifications" && mode !== "activities") && (
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>Contacts</Typography>
          <List sx={{ mt: 1, p: 0 }}>
            {contacts.map((c, i) => (
              <ListItem key={i} disableGutters>
                <ListItemAvatar>
                  <Avatar src={c.avatar} alt={c.name} sx={{ width: 32, height: 32 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="body2">{c.name}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}
