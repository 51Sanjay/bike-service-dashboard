import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import axios from "axios";

const VehicleTracking = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrackService = async () => {
    if (!vehicleNumber.trim()) {
      setError("Please enter a valid vehicle number.");
      return;
    }

    setLoading(true);
    setError("");
    setTrackingData(null);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/track/${vehicleNumber}`,
      );
      setTrackingData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("No booking found for this vehicle number.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  const trackingSteps = [
    {
      number: "01",
      title: "Booking Confirmed",
      description:
        "Your bike service booking has been confirmed and assigned to a nearby mechanic for pickup.",
    },
    {
      number: "02",
      title: "Bike Picked Up",
      description:
        "Our professional mechanic has picked up your bike and it's now on the way to the service center.",
    },
    {
      number: "03",
      title: "Service In Progress",
      description:
        "Your bike is currently being serviced. You can track the live status and expected completion time here.",
    },
    {
      number: "04",
      title: "Quality Check",
      description:
        "Post-service inspection and testing are done to ensure all requested work is properly completed.",
    },
    {
      number: "05",
      title: "Bike On The Way",
      description:
        "Your bike is now on its way back to you. You’ll receive a delivery notification shortly.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 5, paddingTop: "130px" }}>
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#f39c12" }}
          >
            LIVE SERVICE TRACKING
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Track your bike service in real-time—from pickup to doorstep
            delivery. Stay updated every step of the way.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {trackingSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    position: "relative",
                    p: 3,
                    textAlign: "center",
                    transform:
                      index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                    borderRadius: 3,
                    backgroundColor: "#F4F7FE",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "#f39c12",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "18px",
                      position: "absolute",
                      top: -25,
                      left: "calc(50% - 25px)",
                      boxShadow: 3,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box mt={4}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#f39c12" }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ paddingX: 2 ,}}>
        <Paper elevation={4} sx={{ p: 4,bgcolor:"#f5f5f5" }}>
          <Typography variant="h3" align="center" gutterBottom>
            Track Your Service
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            sx={{ mb: 3 }}
          >
            Enter your vehicle number to view your bike service status in
            real-time.
          </Typography>

          <TextField
            fullWidth
            label="Enter Vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleTrackService}
            disabled={loading}
            sx={{ mb: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Track Service"
            )}
          </Button>

          {error && (
            <Typography color="error" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          {trackingData && (
            <Card sx={{ mt: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Booking Details
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Typography variant="body1">
                  <strong>Vehicle Number:</strong> {trackingData.vehicleNumber}
                </Typography>
                <Typography variant="body1">
                  <strong>Status:</strong>{" "}
                  {trackingData.status || "In Progress"}
                </Typography>
                <Typography variant="body1">
                  <strong>Services:</strong>{" "}
                  {trackingData.serviceDetails.join(", ")}
                </Typography>
                <Typography variant="body1">
                  <strong>Pickup/Drop:</strong> {trackingData.pickupDrop}
                </Typography>
                <Typography variant="body1">
                  <strong>Date:</strong> {trackingData.date}
                </Typography>
                <Typography variant="body1">
                  <strong>Time Slot:</strong> {trackingData.timeSlot}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default VehicleTracking;
