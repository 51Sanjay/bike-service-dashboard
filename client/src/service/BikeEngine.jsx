import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const BikeEngine = () => {
  const navigate = useNavigate();

  const servicePoints = [
    "Cylinder Reboring",
    "Piston & Ring Replacement",
    "Crankshaft Inspection",
    "Valve Setting & Tappet Adjustment",
    "Engine Block Cleaning",
    "Oil Seal Replacement",
    "Compression Test",
    "Reboring Quality Check",
    "Final Engine Assembly",
  ];

  const plans = [
    {
      title: "Standard Reboring",
      features: [
        "Cylinder Reboring",
        "Piston & Ring Replacement",
        "Compression Test",
        "Final Assembly",
      ],
      oldPrice: 4999,
      newPrice: 4299,
      bgColor: "#cfe8fc",
    },
    {
      title: "Advanced Reboring",
      features: [
        "All Standard Services",
        "Valve & Tappet Adjustment",
        "Crankshaft Inspection",
        "Engine Block Cleaning",
      ],
      oldPrice: 6499,
      newPrice: 5599,
      bgColor: "#a6d4fa",
    },
    {
      title: "Premium Engine Overhaul",
      features: [
        "All Advanced Services",
        "Oil Seal Replacement",
        "Reboring Quality Check",
        "Full Engine Testing",
      ],
      oldPrice: 7999,
      newPrice: 6899,
      bgColor: "#90caf9",
    },
  ];

  const handleCheckout = () => {
    navigate("/booking");
  };

  return (
    <>
      {/* Top Banner Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          width: "100%",
          paddingTop: "130px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#C2B97F",
            color: "black",
            minHeight: "100vh",
            py: 5,
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center" py={3}>
              <PrecisionManufacturingIcon sx={{ fontSize: 80 }} />
              <Typography variant="h4" fontWeight="bold" mt={2}>
                Engine Reboring
              </Typography>
              <Typography variant="body1" mt={1}>
                • Engine Performance Restoration &nbsp;&nbsp;• 3 Months Warranty
                &nbsp;&nbsp;• Recommended Every 30,000+ Kms
                <br />
                <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} />{" "}
                1-2 Days (Depending on Engine Condition)
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
                ₹4999
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="white">
                ₹4299
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
      </Box>

      {/* Plan Section */}
      <Box sx={{ backgroundColor: "#fff", width: "100%", py: 5 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <PrecisionManufacturingIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Choose Your Reboring Plan
            </Typography>
            <Typography variant="body1" mt={1}>
              • Genuine Components Used &nbsp;&nbsp;• Engine Performance Boost
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} />{" "}
              Approx. 1–2 Days
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
    </>
  );
};

export default BikeEngine;
