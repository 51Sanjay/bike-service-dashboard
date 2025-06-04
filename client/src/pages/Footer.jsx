import React from "react";
import { Box, Grid, Typography, Link, IconButton, Container } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#1c1c1c",
        color: "#fff",
        py: 4,
        //mt: 1,
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" textAlign={{ xs: "center", sm: "left" }}>
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Bike Service Shop
            </Typography>
            <Typography variant="body2">
              Your one-stop solution for hassle-free bike servicing at your doorstep.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com" aria-label="YouTube">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Bike Service Shop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
