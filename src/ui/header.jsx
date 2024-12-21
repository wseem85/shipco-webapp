import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
const drawerWidth = 240;
const navItems = [
  { key: 1, path: "/", text: "الرئسية" },
  { key: 2, path: "/services", text: "الخدمات" },
  { key: 3, path: "/branches", text: "الفروع" },
  { key: 4, path: "/fees", text: "التعرفة" },
  { key: 5, path: "/contacts", text: "اتصل بنا" },
];
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useDark } from "../contexts/modeContext";
export default function Header(props) {
  const theme = useTheme();
  const location = useLocation();
  const { dark, setDark } = useDark();
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activePath, setActivePath] = React.useState(location.pathname);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavLinkClick = (path) => {
    setActivePath(path);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", overflow: "auto" }}
    >
      <Box
        component="img"
        src="shipco-logo.png"
        alt="Company Logo"
        sx={{
          width: 40,
          height: 40,
        }}
      ></Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Stack direction="column" key={item.key}>
            <ListItem
              component={NavLink}
              to={item.path}
              disablePadding
              sx={{
                color:
                  item.path === activePath
                    ? `${theme.palette.secondary.dark}`
                    : "inherit",
              }}
              onClick={() => handleNavLinkClick(item.path)}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Stack>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            paddingLeft: { xs: "8px", sm: "24px" },
            paddingRight: { xs: "8px", sm: "24px" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={NavLink}
                to={item.path}
                key={item.text}
                sx={{
                  color:
                    item.path === activePath
                      ? `${theme.palette.secondary.light}`
                      : "#fff",
                }}
                onClick={() => handleNavLinkClick(item.path)}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton onClick={() => setDark((dark) => !dark)}>
              {dark ? (
                <LightModeIcon sx={{ color: "#fff" }} />
              ) : (
                <ModeNightIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>
            <img
              src="logo.png"
              alt="Company Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          hideBackdrop={mobileOpen ? false : true}
          sx={{
            display: { xs: mobileOpen ? "flex" : "none", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "& .MuiDrawer-modal": {
              display: mobileOpen ? "flex" : "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};
