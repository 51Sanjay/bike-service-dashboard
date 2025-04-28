import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBookingDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get-booking-details"
      );
      setPaymentDetails(response.data);
      localStorage.setItem("lastPayment", JSON.stringify(response.data)); // Store in localStorage
    } catch (error) {
      console.error("Error fetching payment details:", error);
      // Try to load from localStorage if API fails
      const stored = localStorage.getItem("lastPayment");
      if (stored) {
        setPaymentDetails(JSON.parse(stored));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const handlePayment = async () => {
    if (!paymentDetails) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/orders",
        {
          amount: paymentDetails.totalAmount,
        }
      );

      const { id: order_id } = response.data;

      const options = {
        key: "rzp_test_X8woQka3qMWJpR",
        amount: paymentDetails.totalAmount * 100,
        currency: "INR",
        name: "Bike Service Shop",
        description: "Bike service payment",
        order_id,
        handler: function (response) {
          axios
            .post("http://localhost:5000/api/payment/verify", {
              razorpay_order_id: order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            })
            .then(() => {
              alert("✅ Booking successful!");
              localStorage.removeItem("lastPayment"); // Clear stored data
              setPaymentDetails(null); // Clear state after success
              navigate("/dashboard"); // Redirect to a confirmation page
            })
            .catch(() => {
              alert("❌ Payment verification failed.");
              navigate("/payment");
            });
        },
        prefill: {
          name: paymentDetails.name,
          email: paymentDetails.email,
          contact: paymentDetails.phone,
        },
        notes: {
          address: paymentDetails.location,
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  if (loading)
    return <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />;
  if (!paymentDetails)
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
                <Typography>
                  <strong>Name:</strong> {paymentDetails.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {paymentDetails.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {paymentDetails.phone}
                </Typography>
                <Typography>
                  <strong>Location:</strong> {paymentDetails.location}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Vehicle Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography>
                  <strong>Vehicle Number:</strong> {paymentDetails.vehicleNumber}
                </Typography>
                <Typography>
                  <strong>Type:</strong> {paymentDetails.vehicleType}
                </Typography>
                <Typography>
                  <strong>Brand:</strong> {paymentDetails.vehicleBrand}
                </Typography>
                <Typography>
                  <strong>Model:</strong> {paymentDetails.vehicleModel}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Service Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography>
                  <strong>Date:</strong> {paymentDetails.date}
                </Typography>
                <Typography>
                  <strong>Time Slot:</strong> {paymentDetails.timeSlot}
                </Typography>
                <Typography>
                  <strong>Pickup/Drop:</strong> {paymentDetails.pickupDrop}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <strong>Selected Services:</strong>
                </Typography>
                <List dense>
                  {paymentDetails.services?.map((service, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={`• ${service}`} />
                    </ListItem>
                  ))}
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
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handlePayment}
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
