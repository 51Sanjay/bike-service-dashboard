import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

const Payment = () => {
  const serviceDetails = {
    serviceName: "General Bike Service",
    serviceId: "SV1001",
    amount: 499,
    date: "2025-04-15",
  };

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: serviceDetails.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      name: "Bike Service Shop",
      description: serviceDetails.serviceName,
      image: "https://yourdomain.com/logo.png", // optional
      handler: function (response) {
        alert("Payment successful!");
        console.log("Razorpay Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      notes: {
        service_id: serviceDetails.serviceId,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Box
      sx={{
        mt: 12,
        px: 3,
        display: "flex",
        justifyContent: "center",
        paddingTop:"120px",
      }}
    >
      <Card sx={{ maxWidth: 500, width: "100%", p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Payment Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Service:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{serviceDetails.serviceName}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle1">Service ID:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{serviceDetails.serviceId}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle1">Scheduled Date:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{serviceDetails.date}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle1">Amount:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>₹{serviceDetails.amount}</Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handlePayment}
          >
            Proceed to Pay ₹{serviceDetails.amount}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Payment;
