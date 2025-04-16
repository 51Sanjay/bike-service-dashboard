import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";

const GeneralService = () => {
  const navigate = useNavigate();

  const servicePoints = [
    "Air Filter Cleaning",
    "Cables & Levers Adjustment",
    "Dry Wash",
    "Battery Voltage Check",
    "Chain Tension Check",
    "Electrical Check-up",
    "Brakes Service",
    "Clutch Greasing",
    "Engine Oil Check",
  ];

  const services = [
    {
      title: "Silver Service",
      features: [
        "Air Filter Cleaning",
        "Dry Wash",
        "Battery Voltage Check",
        "Chain Lubrication",
        "Brake Inspection",
      ],
      oldPrice: 799,
      newPrice: 599,
      bgColor: "#cfe8fc",
    },
    {
      title: "Gold Service",
      features: [
        "All Silver Services",
        "Cables & Levers Adjustment",
        "Clutch Greasing",
        "Engine Oil Top-up",
        "Electrical Check-up",
      ],
      oldPrice: 1399,
      newPrice: 1099,
      bgColor: "#a6d4fa",
    },
    {
      title: "Platinum Service",
      features: [
        "All Gold Services",
        "Full Synthetic Oil Change",
        "Complete Brake Service",
        "Chain Sprocket Cleaning",
        "Detail Polishing",
      ],
      oldPrice: 1999,
      newPrice: 1699,
      bgColor: "#90caf9",
    },
  ];

  const handleCheckout = () => {
    navigate("/booking");
  };

  return (
    <>
      {/* General Service Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
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
            minHeight: "100vh",
            py: 5,
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center" py={3}>
              <MotorcycleIcon sx={{ fontSize: 80 }} aria-label="Bike Icon" />
              <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
                sx={{ textDecoration: "underline" }}
              >
                General Service
              </Typography>
              <Typography variant="body1" mt={1}>
                • Available at Doorstep &nbsp;&nbsp;• 500 Kms or 1 Month
                Warranty &nbsp;&nbsp;• Every 3000 Kms or 3 Months (Recommended)
                <br />
                <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} /> 2
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
                ₹1399
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="white">
                ₹1199
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

      {/* Service Plans Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          py: 5,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <MotorcycleIcon sx={{ fontSize: 80 }} aria-label="Bike Icon" />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Choose Your Bike Service Plan
            </Typography>
            <Typography variant="body1" mt={1}>
              • Doorstep Service Available &nbsp;&nbsp;• Up to 1 Month Warranty
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} />{" "}
              Approx. 2–3 Hrs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: service.bgColor,
                    borderRadius: 4,
                    p: 3,
                    color: "#000",
                    boxShadow: 4,
                    textAlign: "center",
                    mb: { xs: 4, md: 0 },
                    "&:hover": {
                      transform: "scale(1.03)",
                      transition: "0.3s ease-in-out",
                    },
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    {service.title}
                  </Typography>
                  {service.features.map((point, i) => (
                    <Box key={i} display="flex" alignItems="center" mb={1}>
                      <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                      <Typography>{point}</Typography>
                    </Box>
                  ))}
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through", opacity: 0.6, mt: 2 }}
                  >
                    ₹{service.oldPrice}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    ₹{service.newPrice}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleCheckout}
                    sx={{
                      mt: 2,
                      backgroundColor: "#383896",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#B4C5E4", color: "#000" },
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

export default GeneralService;
