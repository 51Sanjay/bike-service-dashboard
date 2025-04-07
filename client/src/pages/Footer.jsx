import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",  // Full width
        position: "relative",  // Fixed at bottom
        
        left: 0,
        backgroundColor: "#222",
        color: "#fff",
        py: 2,
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",  // Light shadow on top
        zIndex: 1000,  // Ensures it stays above other elements
      }}
    >
      <Grid container spacing={4} justifyContent="center" textAlign="center">
        {/* Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Bike Service Shop
          </Typography>
          <Typography variant="body2">
            Your one-stop solution for hassle-free bike servicing at your doorstep.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="#" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Services
            </Link>
            <Link href="#" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="#" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="#" aria-label="YouTube">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Bike Service Shop. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
