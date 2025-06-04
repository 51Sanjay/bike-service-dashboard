// frontend/src/pages/Payment.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from "@mui/material";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Assuming your booking details are stored in Redux under 'booking'
  const paymentDetails = useSelector((state) => state.booking);

  const handlePayment = async () => {
    if (!paymentDetails) return;

    try {
      setLoading(true);

      // Create Razorpay order on backend
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payment/orders",
        {
          amount: paymentDetails.totalAmount,
        }
      );

      const options = {
        key: "rzp_test_X8woQka3qMWJpR", // Your Razorpay Key ID
        amount: paymentDetails.totalAmount * 100, // in paise
        currency: "INR",
        name: "Bike Service Shop",
        description: "Bike service payment",
        order_id: order.id,
        handler: async function (response) {
          // Verify payment on backend
          try {
            await axios.post("http://localhost:5000/api/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            alert("✅ Booking successful!");
            setLoading(false);
            navigate("/payment");
            
          } catch {
            alert("❌ Payment verification failed.");
            setLoading(false);
          }
        },
        prefill: {
          name: paymentDetails.name,
          email: paymentDetails.email,
          contact: paymentDetails.phone,
        },
        notes: {
          address: paymentDetails.location,
        },
        theme: {
          color: "#1976d2",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Payment initiation failed");
      setLoading(false);
    }
  };

  if (loading)
    return <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />;

  if (!paymentDetails || Object.keys(paymentDetails).length === 0)
    return <Typography>No payment details available.</Typography>;

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100%", py: 3, pt: "130px" }}>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Booking Summary & Payment
        </Typography>

        <Card sx={{ mt: 4, borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Customer Info
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography><strong>Name:</strong> {paymentDetails.name}</Typography>
                <Typography><strong>Email:</strong> {paymentDetails.email}</Typography>
                <Typography><strong>Phone:</strong> {paymentDetails.phone}</Typography>
                <Typography><strong>Location:</strong> {paymentDetails.location}</Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Vehicle Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography><strong>Vehicle Number:</strong> {paymentDetails.vehicleNumber}</Typography>
                <Typography><strong>Type:</strong> {paymentDetails.vehicleType}</Typography>
                <Typography><strong>Brand:</strong> {paymentDetails.vehicleBrand}</Typography>
                <Typography><strong>Model:</strong> {paymentDetails.vehicleModel}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Service Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography><strong>Date:</strong> {paymentDetails.date}</Typography>
                <Typography><strong>Time Slot:</strong> {paymentDetails.timeSlot}</Typography>
                <Typography><strong>Pickup/Drop:</strong> {paymentDetails.pickupDrop}</Typography>

                <Typography sx={{ mt: 2 }}><strong>Selected Services:</strong></Typography>
                <List dense>
                  {paymentDetails.services && paymentDetails.services.length > 0 ? (
                    paymentDetails.services.map((service, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={`• ${service}`} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem><ListItemText primary="No services selected" /></ListItem>
                  )}
                </List>

                <Typography sx={{ mt: 2 }}><strong>Additional Cards:</strong></Typography>
                <List dense>
                  {paymentDetails.addtoCard && paymentDetails.addtoCard.length > 0 ? (
                    paymentDetails.addtoCard.map((card, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={`• ${card.title}`} secondary={`Price: ₹${card.newPrice}`} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem><ListItemText primary="No additional cards selected" /></ListItem>
                  )}
                </List>

                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" color="secondary">
                  Total Amount: ₹{paymentDetails.totalAmount}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box mt={4} textAlign="center">
          <Button variant="contained" color="success" size="large" onClick={handlePayment}>
            Pay Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
