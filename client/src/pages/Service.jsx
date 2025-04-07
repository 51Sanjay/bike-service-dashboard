{
  /*import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Container } from "@mui/material";

const services = [
  {
    title: "Monsoon Package",
    price: "₹ 1699",
    image: "https://via.placeholder.com/300x200", // Replace with actual image
    bookings: "1936 have availed",
  },
  {
    title: "Mileage+",
    price: "₹ 1999",
    image: "https://via.placeholder.com/300x200", // Replace with actual image
    bookings: "2762 have availed",
  },
  {
    title: "Car Repair Service",
    price: "₹ -",
    image: "https://via.placeholder.com/300x200", // Replace with actual image
    bookings: "2124 have availed",
  },
];

const Service = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Our Most Popular Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography color="textSecondary">{service.bookings}</Typography>
                <Typography variant="h6" color="primary">{service.price}</Typography>
                <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;*/
}
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Badge,
  Box,
} from "@mui/material";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import BuildIcon from "@mui/icons-material/Build";
import OpacityIcon from "@mui/icons-material/Opacity";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <TwoWheelerIcon sx={{ fontSize: 40, color: "#f39c12" }} />,
      title: "General Service",
      path: "/general-service",
    },
    {
      icon: <CarRepairIcon sx={{ fontSize: 40, color: "#f39c12" }} />,
      title: "Vehicle Breakdown",
      path: "/vehicle-breakdown",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: "#f39c12" }} />,
      title: "Engine Reboring",
      path: "/engine-reboring",
    },
    {
      icon: <OpacityIcon sx={{ fontSize: 40, color: "#f39c12" }} />,
      title: "Wash & Polish",
      path: "/wash-polish",
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 40, color: "#f39c12" }} />,
      title: "Offers",
      path: "/offers",
      badge: "Upto 30% off",
    },
  ];
  const features = [
    { title: "Pick & Drop Service", icon: <TwoWheelerIcon /> },
    { title: "Warranted Spare Parts", icon: <BuildIcon /> },
    { title: "Multi Brand Options", icon: <CategoryIcon /> },
    { title: "Realtime Tracking", icon: <PhoneIphoneIcon /> },
    { title: "Standardized Workshops", icon: <CheckCircleIcon /> },
    { title: "24/7 Support", icon: <SupportAgentIcon /> },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100%",
        width: "100%",
        py: 3,
        paddingTop: "110px",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Section Heading */}
        <Typography variant="h4" fontWeight="bold" align="left">
          Bike Service Solutions
        </Typography>
        <Typography variant="body1" sx={{ color: "#777", mb: 4 }}>
          Choose from a variety of services for your bike.
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: "relative",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  color: "#333",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-5px)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate(service.path)}
              >
                {service.icon}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 2 content*/}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 5 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" align="left">
            Why <span style={{ color: "#FFA500" }}>Choose Us</span>
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    borderRadius: "16px",
                    transition: "0.3s",
                    background: "rgba(255, 165, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    color: "#333",
                    position: "relative",
                    "&:hover": {
                      boxShadow: "0px 8px 20px rgba(255, 165, 0, 0.6)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  {/* Circle Background for Icon */}
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#FFA500",
                      color: "#fff",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {feature.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Service;
