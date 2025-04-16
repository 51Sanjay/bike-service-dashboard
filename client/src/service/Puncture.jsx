import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";
import TireRepairIcon from "@mui/icons-material/BuildCircle";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CompressIcon from "@mui/icons-material/Compress";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TuneIcon from "@mui/icons-material/Tune";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Puncture = () => {
  const navigate = useNavigate();

  const punctureServices = [
    {
      icon: <TireRepairIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Tyre Inspection",
      description: "Thorough check for punctures, nails, or external damage.",
    },
    {
      icon: <PlumbingIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Tube Removal & Repair",
      description: "Safe tube removal and repair using industrial-grade patches.",
    },
    {
      icon: <CompressIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Tyre Pressure Check",
      description: "Accurate air pressure refilling and balance check.",
    },
    {
      icon: <AddCircleIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Valve Replacement",
      description: "Valve core checked & replaced if damaged or leaking.",
    },
    {
      icon: <TuneIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Tubeless Tyre Plugging",
      description: "Premium plugging for tubeless tyres using mushroom plugs.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Final Safety Check",
      description: "Bead seating, wheel spin & alignment test before delivery.",
    },
  ];

  const handleCheckout = () => {
    navigate("/booking");
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        py: 3,
        paddingTop: "130px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#C2B97F",
          color: "black",
          py: 6,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box textAlign="center" mb={5}>
            <MotorcycleIcon sx={{ fontSize: 80 }} />
            <Typography
              variant="h4"
              fontWeight="bold"
              mt={2}
              sx={{ textDecoration: "underline" }}
            >
              Bike Puncture Repair
            </Typography>
            <Typography variant="body1" mt={1}>
              • On-Site Service &nbsp;&nbsp;• Tube & Tubeless Tyres
              &nbsp;&nbsp;• Reliable & Fast
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} /> 30
              Minutes Approx.
            </Typography>
          </Box>

          {/* Services as Cards */}
          <Grid container spacing={4}>
            {punctureServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: 4,
                    transition: "0.3s",
                    backgroundColor:"#FFFDD0",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" align="center">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" align="center" mt={1}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Divider + Pricing */}
          <Divider sx={{ my: 6, backgroundColor: "#fff", opacity: 0.2 }} />

          <Box textAlign="center">
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: 0.7 }}
            >
              ₹299
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="white">
              ₹199 Only
            </Typography>

            <Button
              variant="contained"
              onClick={handleCheckout}
              sx={{
                mt: 2,
                backgroundColor: "#383896",
                "&:hover": { backgroundColor: "#B4C5E4", color: "#000" },
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Puncture;
