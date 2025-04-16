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
  CardActions,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BuildIcon from "@mui/icons-material/Build";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FlatwareIcon from "@mui/icons-material/CarRepair";

const BikeBreakdown = () => {
  const navigate = useNavigate();

  const serviceCards = [
    {
      icon: <ElectricBoltIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Battery Jumpstart",
      description: "Instant battery boost on the spot to get you moving.",
    },
    {
      icon: <FlatwareIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Flat Tyre Fix",
      description: "Quick fix or replacement to keep you rolling safely.",
    },
    {
      icon: <LocalGasStationIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Fuel Delivery",
      description: "Up to 5 km range emergency fuel delivery.",
    },
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Towing Service",
      description: "Tow your vehicle to the nearest garage hassle-free.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "Accident Support",
      description: "Assistance with first aid and vehicle safety post-crash.",
    },
    {
      icon: <PhoneInTalkIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
      title: "24x7 Helpline",
      description: "We’re always a call away for any roadside emergency.",
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
            <BuildIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Breakdown Assistance
            </Typography>
            <Typography variant="body1" mt={1}>
              • On-Road Emergency Help &nbsp;&nbsp;• Fast Response Service
              &nbsp;&nbsp;• Expert Mechanic Dispatch
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} />{" "}
              Arrival in ~45 mins*
            </Typography>
          </Box>

          {/* Services as Cards */}
          <Grid container spacing={4}>
            {serviceCards.map((service, index) => (
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
              ₹999
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="white">
              ₹799 Only
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
              Request Help
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BikeBreakdown;
