import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";

const WaterService = () => {
  const navigate = useNavigate();

  const servicePoints = [
    "High-Pressure Body Wash",
    "Underbody Cleaning",
    "Engine Surface Cleaning",
    "Wheel & Rim Detailing",
    "Seat & Handle Cleaning",
    "Chain Degreasing & Cleaning",
    "Mud Guard Wash",
    "Shampoo & Foam Wash",
    "Water Drying with Air Pressure",
    "Silencer Cleaning & Polishing",
    "Mirror and Indicator Cleaning",
    "Number Plate Cleaning & Polish",
    "Tire Dressing for Shine",
    "Final Body Polishing (Wax/Gloss Coat)",
    "Brake Drum Cleaning",
  ];

  const plans = [
    {
      title: "Basic Wash",
      features: [
        "High-Pressure Body Wash",
        "Underbody Cleaning",
        "Engine Surface Cleaning",
        "Wheel & Rim Detailing",
      ],
      oldPrice: 499,
      newPrice: 399,
      bgColor: "#E3F2FD",
    },
    {
      title: "Standard Wash",
      features: [
        "All Basic Services",
        "Shampoo & Foam Wash",
        "Seat & Handle Cleaning",
        "Mud Guard Wash",
      ],
      oldPrice: 699,
      newPrice: 599,
      bgColor: "#BBDEFB",
    },
    {
      title: "Premium Detailing",
      features: [
        "All Standard Services",
        "Chain Degreasing & Cleaning",
        "Water Drying with Air Pressure",
        "Final Body Polishing (Wax/Gloss Coat)",
      ],
      oldPrice: 899,
      newPrice: 749,
      bgColor: "#90caf9",
    },
  ];
  

  const handleCheckout = () => {
    navigate("/booking");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100%",
        width: "100%",
        py: 3,
        paddingTop: "130px",
      }}
    >
      {/* Banner Section */}
      <Box
        sx={{
          pt: 5,
          backgroundColor: "#C2B97F",
          color: "black",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center" py={3}>
            <MotorcycleIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Bike Water Service
            </Typography>
            <Typography variant="body1" mt={1}>
              • At Your Doorstep &nbsp;&nbsp;• Quality Cleaning Products
              &nbsp;&nbsp;• Recommended Every 2 Weeks
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} /> 1.5
              Hrs taken
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {servicePoints.map((point, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box display="flex" alignItems="center">
                  <CheckCircleIcon sx={{ color: "#FFFDD0", mr: 1 }} />
                  <Typography>{point}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box mt={5} textAlign="center">
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: 0.7 }}
            >
              ₹799
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="white">
              ₹599
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
              Checkout
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Pricing Plans Section */}
      <Box sx={{ backgroundColor: "#fff", width: "100%", py: 5 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <MotorcycleIcon sx={{ fontSize: 70 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Choose Your Wash Plan
            </Typography>
            <Typography variant="body1" mt={1}>
              • Professional Equipment &nbsp;&nbsp;• Eco-friendly Cleaning
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} /> 1.5
              Hrs Per Bike
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {plans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: plan.bgColor,
                    borderRadius: 4,
                    p: 3,
                    color: "#000",
                    boxShadow: 4,
                    textAlign: "center",
                    "&:hover": {
                      transform: "scale(1.03)",
                      transition: "0.3s ease-in-out",
                    },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    {plan.title}
                  </Typography>
                  {plan.features.map((feature, i) => (
                    <Box key={i} display="flex" alignItems="center" mb={1}>
                      <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                      <Typography>{feature}</Typography>
                    </Box>
                  ))}
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      opacity: 0.6,
                      mt: 2,
                    }}
                  >
                    ₹{plan.oldPrice}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    ₹{plan.newPrice}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleCheckout}
                    sx={{
                      mt: 2,
                      backgroundColor: "#383896",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#B4C5E4",
                        color: "#000",
                      },
                      px: 4,
                      py: 1.2,
                      fontWeight: "bold",
                      borderRadius: 3,
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WaterService;
