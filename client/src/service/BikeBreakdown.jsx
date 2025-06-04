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
} from "@mui/material";
import {
  ElectricBolt,
  CarRepair,
  LocalGasStation,
  DirectionsCar,
  SupportAgent,
  PhoneInTalk,
  Build,
  AccessTime,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setBikeBreakDownService } from "../redux/bikeBreakDownSlice";

const BikeBreakdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const iconMap = {
    ElectricBolt: <ElectricBolt sx={{ fontSize: 40, color: "#164BA1" }} />,
    CarRepair: <CarRepair sx={{ fontSize: 40, color: "#164BA1" }} />,
    LocalGasStation: (
      <LocalGasStation sx={{ fontSize: 40, color: "#164BA1" }} />
    ),
    DirectionsCar: <DirectionsCar sx={{ fontSize: 40, color: "#164BA1" }} />,
    SupportAgent: <SupportAgent sx={{ fontSize: 40, color: "#164BA1" }} />,
    PhoneInTalk: <PhoneInTalk sx={{ fontSize: 40, color: "#164BA1" }} />,
  };

  const serviceCards = [
    {
      icon: "ElectricBolt",
      title: "Battery Jumpstart",
      features: ["Instant battery boost on the spot to get you moving."],
      newPrice: 300,
    },
    {
      icon: "CarRepair",
      title: "Battery Jumpstart",
      features: ["Quick fix or replacement to keep you rolling safely."],
      newPrice: 200,
    },
    {
      icon: "LocalGasStation",
      title: "Fuel Delivery",
      features: ["Up to 5 km range emergency fuel delivery."],
      newPrice: 150,
    },
    {
      icon: "DirectionsCar",
      title: "Towing Service",
      features: ["Tow your vehicle to the nearest garage hassle-free."],
      newPrice: 300,
    },
    {
      icon: "SupportAgent",
      title: "Accident Support",
      features: ["First aid and vehicle safety post-crash."],
      newPrice: 500,
    },
    {
      icon: "PhoneInTalk",
      title: "24x7 Helpline",
      features: ["Always a call away for any roadside emergency."],
      newPrice: 650,
    },
  ];

  const handleCheckout = (service) => {
    dispatch(setBikeBreakDownService(service));
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
          <Box textAlign="center" mb={6}>
            <Build sx={{ fontSize: 60 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Breakdown Assistance
            </Typography>
            <Typography variant="body1" mt={1}>
              • Emergency On-Road Help &nbsp; • Fast Dispatch &nbsp; • Expert
              Mechanics
              <br />
              <AccessTime sx={{ fontSize: 16, mb: "-3px" }} /> Arrival in ~45
              mins*
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {serviceCards.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 4,
                      backgroundColor: "#ffffff",
                      p: 2,
                      height: 260, // Fixed height for all cards
                      width: "100%", // Set width to 100% of the container
                      maxWidth: 320, // Max width for uniform card size
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s",
                      "&:hover": {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        {iconMap[service.icon]}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        align="center"
                        gutterBottom
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" align="center" mb={2}>
                        {service.features}
                      </Typography>
                      <Typography
                        variant="body1"
                        align="center"
                        fontWeight="bold"
                        color="primary"
                      >
                        ₹{service.newPrice}
                      </Typography>
                    </CardContent>

                    <Button
                      variant="contained"
                      onClick={() => handleCheckout(service)}
                      sx={{
                        mt: 1,
                        backgroundColor: "#164BA1",
                        "&:hover": {
                          backgroundColor: "#B4C5E4",
                          color: "#000",
                        },
                        px: 2,
                        py: 1,
                        fontWeight: "bold",
                        borderRadius: 2,
                        display: "block",
                        mx: "auto",
                      }}
                    >
                      ADD TO BOOK
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default BikeBreakdown;
