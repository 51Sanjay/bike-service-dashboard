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
  Chip,
  Divider,
  Avatar,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedService } from "../redux/Slice";

// Icons
import BuildIcon from "@mui/icons-material/Build";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import StarIcon from "@mui/icons-material/Star";

const GeneralService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getIcon = (iconName) => {
    switch (iconName) {
      case "BuildIcon":
        return <BuildIcon />;
      case "WaterDropIcon":
        return <WaterDropIcon />;
      case "OilBarrelIcon":
        return <OilBarrelIcon />;
      case "StarIcon":
        return <StarIcon sx={{ color: "#ffb300" }} />;
      default:
        return null;
    }
  };

  const services = [
    {
      title: "General",
      icon: "BuildIcon",
      color: "#e0f7fa",
      features: [
        "Chain Tension Check",
        "Brakes Service",
        "Clutch Greasing",
        "Engine Oil Check",
      ],
      oldPrice: 799,
      newPrice: 599,
    },
    {
      title: "Silver",
      icon: "WaterDropIcon",
      color: "#f0f4c3",
      features: [
        "Dry Wash",
        "Battery Voltage Check",
        "Chain Lubrication",
        "Brake Inspection",
      ],
      oldPrice: 899,
      newPrice: 699,
    },
    {
      title: "Gold",
      icon: "OilBarrelIcon",
      color: "#ffe082",
      features: [
        "Silver Service +",
        "Cables & Levers Adjustment",
        "Clutch Greasing",
        "Engine Oil Top-up",
      ],
      oldPrice: 1399,
      newPrice: 1099,
    },
    {
      title: "Platinum",
      icon: "StarIcon",
      color: "#ffcdd2",
      features: [
        "Gold Service +",
        "Synthetic Oil Change",
        "Full Brake Service",
        "Detail Polishing",
      ],
      oldPrice: 1999,
      newPrice: 1699,
      premium: true,
    },
  ];

  const handleCheckout = (service) => {
    dispatch(setSelectedService(service));
    navigate("/booking");
  };

  return (
    <Box
      sx={{ backgroundColor: "#fff", minHeight: "100%", py: 3, pt: "130px" }}
    >
      <Box py={6} bgcolor="#f5f5f5">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Bike Service Plans
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

          <Grid container spacing={4}>
            {services.map((service, index) => (
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
                    avatar={
                      <Avatar sx={{ bgcolor: service.color }}>
                        {service.iconName}
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" fontWeight="bold">
                        {service.title} Service
                      </Typography>
                    }
                    subheader={
                      service.premium && (
                        <Chip
                          label="Premium"
                          size="small"
                          sx={{ backgroundColor: "#ffd54f", color: "#000" }}
                        />
                      )
                    }
                  />
                  <Divider />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {service.features.map((item, i) => (
                      <Box display="flex" alignItems="center" mb={1} key={i}>
                        <CheckIcon sx={{ color: "green", mr: 1 }} />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}

                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        sx={{ textDecoration: "line-through", color: "gray" }}
                      >
                        ₹{service.oldPrice}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        ₹{service.newPrice}
                      </Typography>
                      <Chip
                        label={`Save ₹${service.oldPrice - service.newPrice}`}
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
                      onClick={() => handleCheckout(service)}
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

export default GeneralService;
