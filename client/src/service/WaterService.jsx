import React from "react";
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
import CheckIcon from "@mui/icons-material/Check";
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWaterService } from "../redux/waterSlice";

const WaterService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plans = [
    {
      title: "Basic Wash",
      features: [
        "High-Pressure Body Wash",
        "Underbody Cleaning",
        "Engine Surface Cleaning",
        "Wheel & Rim Detailing",
        "Silencer Cleaning & Polishing",
        "Tire Dressing for Shine",
      ],
      oldPrice: 499,
      newPrice: 399,
    },
    {
      title: "Standard Wash",
      features: [
        "All Basic Services",
        "Shampoo & Foam Wash",
        "Seat & Handle Cleaning",
        "Mud Guard Wash",
        "Brake Drum Cleaning",
      ],
      oldPrice: 699,
      newPrice: 599,
    },
    {
      title: "Premium Detailing",
      features: [
        "All Standard Services",
        "Chain Degreasing & Cleaning",
        "Water Drying with Air Pressure",
        "Final Body Polishing (Wax/Gloss Coat)",
        "Number Plate Cleaning & Polish",
        "Mirror and Indicator Cleaning",
      ],
      oldPrice: 899,
      newPrice: 749,
    },
  ];

  const handleCheckout = (plan) => {
    dispatch(setWaterService(plan));
    navigate("/booking");
  };

  return (
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
            <MotorcycleIcon sx={{ fontSize: 70 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Water Wash Plans
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              mb={5}
            >
              Select the best plan for your bike. All services include doorstep
              pickup and drop.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {plans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} display="flex" key={index}>
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
                        <CheckIcon sx={{ color: "green", mr: 1 }} />
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
  );
};

export default WaterService;
