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
  CardHeader,
  Divider,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { useDispatch } from "react-redux";
import { setBikeEngineService } from "../redux/bikeEngineSlice";

const BikeEngine = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const plans = [
    {
      title: "General Reboring",
      features: [
        "Cylinder Reboring",
        "Piston Replacement",
        "Ring Replacement",
        "Compression Test",
      ],
      oldPrice: 4999,
      newPrice: 4299,
      bgColor: "#cfe8fc",
    },
    {
      title: "Standard Reboring",
      features: [
        "General Reboring",
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

  const handleCheckout = (plan) => {
     dispatch(setBikeEngineService(plan));
     navigate("/booking");
   };

  return (
    <>
      {/* Top Banner Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          width: "100%",
          py: 3,
          paddingTop: "130px",
        }}
      >
        <Box sx={{ backgroundColor: "#f5f5f5", width: "100%", py: 5 }}>
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
                <Grid item xs={12} sm={6} md={3} display="flex" key={index}>
                  <Card
                    elevation={4}
                    sx={{
                      borderRadius: 4,
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.03)" },
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography variant="h6" fontWeight="bold">
                          {plan.title} Service
                        </Typography>
                      }
                    />
                    <Divider />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {plan.features.map((feature, i) => (
                        <Box display="flex" alignItems="center" mb={1} key={i}>
                          <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                      <Box mt={2}>
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: "line-through", color: "gray" }}
                        >
                          ₹{plan.oldPrice}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          ₹{plan.newPrice}
                        </Typography>
                        <Chip
                          label={`Save ₹${plan.oldPrice - plan.newPrice}`}
                          color="success"
                          size="small"
                          sx={{ mt: 1 }}
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button
                        variant="contained"
                        size="medium"
                        sx={{
                          backgroundColor: "#1976d2",
                          textTransform: "none",
                          borderRadius: 3,
                          px: 4,
                          py: 1.2,
                          fontWeight: "bold",
                          "&:hover": { backgroundColor: "#1565c0" },
                        }}
                        onClick={() => handleCheckout(plan)}
                      >
                        Book Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default BikeEngine;
