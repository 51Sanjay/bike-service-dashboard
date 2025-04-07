import * as React from "react";
import { useNavigate } from "react-router-dom";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import BuildIcon from "@mui/icons-material/Build";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PaymentIcon from "@mui/icons-material/Payment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../assets/Bike-Logo.png"; // Ensure the correct path
//import { green } from '@mui/material/colors';

export default function Navbar({ onProfileClick }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [selectedSection, setSelectedSection] = React.useState("Bike Details");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);

    // Perform any logout logic (clear tokens, session, etc.)
    localStorage.removeItem("authToken"); // Example: Removing a stored auth token

    // Redirect to login page
    navigate("/");
  };
  const handleProfileClick = () => {
    setAnchorEl(null);
    if (onProfileClick) {
      // ✅ Check if onProfileClick is provided
      onProfileClick();
    }
    navigate("/profile");
  };

  const menuId = "primary-search-account-menu";
  {
    /* Mobile Menu (Profile & Logout) */
  }
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* Profile Menu Item */}
      <MenuItem onClick={handleProfileClick}>
        <IconButton size="small" color="inherit">
          <AccountCircleRoundedIcon />
        </IconButton>
        <Typography variant="body1">Profile</Typography> {/* ✅ Fixed */}
      </MenuItem>

      {/* Logout Menu Item */}
      <MenuItem onClick={handleLogout}>
        <IconButton size="small" color="inherit">
          <ExitToAppIcon /> {/* ✅ Changed icon to ExitToAppIcon */}
        </IconButton>
        <Typography variant="body1">Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfileClick}>
        <IconButton size="small" color="inherit">
          <AccountCircleRoundedIcon />
        </IconButton>
        <Typography variant="body1">Profile</Typography> {/* ✅ Fixed */}
      </MenuItem>

      {/* Logout Menu Item */}
      <MenuItem onClick={handleLogout}>
        <IconButton size="small" color="inherit">
          <ExitToAppIcon /> {/* ✅ Changed icon to ExitToAppIcon */}
        </IconButton>
        <Typography variant="body1">Logout</Typography>
      </MenuItem>
    </Menu>
  );
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Bike Details", icon: <TwoWheelerIcon />, path: "/add-bike" },
    { text: "Service", icon: <BuildIcon />, path: "/service" },
    { text: "Booking", icon: <ConfirmationNumberIcon />, path: "/booking" },
    {text: "Live Service Tracking",icon: <TrackChangesIcon />,path: "/live-service",},
    { text: "Payment", icon: <PaymentIcon />, path: "/payment" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#079992" }}>
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Bike Service Logo"
            sx={{ height: 50, width: "auto", marginRight: 5 }}
          />

          {/* Title */}
          <Typography
            variant="h4"
            fontFamily={"serif"}
            noWrap
            sx={{
              flexGrow: 1,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
            }}
          >
            Bike Service Shop
          </Typography>

          {/* Desktop Profile Icon */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="500px"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Another Navbar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" }, // Keep row layout
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "black",
            padding: "10px 0",
            width: "100%", // Ensure full width
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={index}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
                setSelectedSection(item.text);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px 15px",
                margin: { xs: "2px", md: "0 10px" },
                cursor: "pointer",
                color: "white",
                width: { xs: "auto", sm: "auto" },
                justifyContent: "center",
              }}
            >
              {item.icon}
              <Typography
                sx={{
                  marginLeft: "5px",
                  display: { xs: "none", md: "block" }, // Hide text on mobile, show on larger screens
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
