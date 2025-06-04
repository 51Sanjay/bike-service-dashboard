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
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BuildIcon from "@mui/icons-material/Build";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useDispatch } from "react-redux";
import { setOfferService } from "../redux/offerSlice";

const BikeOffer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const offerPoints = [
    {
      icon: <LocalOfferIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "Flat 15% Off",
      description: "Applicable on General Service bookings",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "Combo Offer",
      description: "Get servicing + bike wash at just ₹1299",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "Free Pickup & Drop",
      description: "Doorstep convenience without any extra cost",
    },
    {
      icon: <ThumbUpAltIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "Assured Quality",
      description: "Trained mechanics and genuine parts only",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "Cashback Offer",
      description: "Up to ₹200 cashback on UPI payments",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 30, color: "#164BA1" }} />,
      title: "No Hidden Charges",
      description: "Transparent pricing with detailed bill",
    },
  ];

 const handleCheckout = (offer) => {
     dispatch(setOfferService(offer));
     navigate("/booking");
   };

  return (
    <Box
          sx={{
            backgroundColor: "#fff",
            minHeight: "100%",
            width: "100%",
            py: 1,
            paddingTop: "130px",
          }}
        >
      <Box sx={{ py: 10, backgroundColor: "#F6F8FC", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box textAlign="center" mb={5}>
            <MotorcycleIcon sx={{ fontSize: 80, color: "#164BA1" }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Festive Bike Service Offer
            </Typography>
            <Typography variant="body1" mt={1}>
              • Valid Till <strong>30th April</strong> &nbsp;&nbsp;• On-Door
              Service Available
              <br />
              <AccessTimeIcon
                sx={{ fontSize: 16, mb: "-3px", ml: 1 }}
              />{" "}
              Limited Period Offer!
            </Typography>
          </Box>

          {/* Offer Cards */}
          <Grid container spacing={4}>
            {offerPoints.map((offer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: 3,
                    backgroundColor: "#ffffff",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                      {offer.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" align="center">
                      {offer.title}
                    </Typography>
                    <Typography variant="body2" align="center" mt={1}>
                      {offer.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 6, backgroundColor: "#000", opacity: 0.1 }} />

          {/* Pricing & CTA */}
          <Box textAlign="center">
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: 0.7 }}
            >
              ₹1599
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="#164BA1">
              ₹1299 Only
            </Typography>

            <Button
              variant="contained"
              onClick={() => handleCheckout(offer)}
              sx={{
                mt: 2,
                backgroundColor: "#164BA1",
                "&:hover": { backgroundColor: "#B4C5E4", color: "#000" },
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 3,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BikeOffer;
