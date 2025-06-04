import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Badge,
  Box,
  Paper,
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
import Puncture from "../assets/Puncture.png";
import BikeEngine from "../assets/BikeEngine.png";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <TwoWheelerIcon sx={{ fontSize: 40 }} />,
      title: "General Service",
      path: "/generalservice",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: "Bike Breakdown",
      path: "/bikebreakdown",
    },
    {
      icon: (
        <img
          src={BikeEngine}
          alt="BikeEngine"
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      ),
      title: "Bike Engine Reboring",
      path: "/bike-engine",
    },
    {
      icon: <OpacityIcon sx={{ fontSize: 40 }} />,
      title: "Water Service",
      path: "/WaterService",
    },
    {
      icon: (
        <img
          src={Puncture}
          alt="Puncture"
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      ),
      title: "Puncture",
      path: "/Puncture",
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 40 }} />,
      title: "Offers",
      path: "/offer",
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
  const steps = [
    {
      number: "01",
      title: "Select Bike Model",
      description:
        "Browse and select your exact bike type and brand and model to ensure accurate service and care.",
    },
    {
      number: "02",
      title: "Choose Services",
      description:
        "Expert diagnostics and repairs for motorbikes, ensuring top performance and reliability.",
    },
    {
      number: "03",
      title: "Make Appointment",
      description:
        "Set your preferred date and time for the service—flexible slots available throughout the week.",
    },
    {
      number: "04",
      title: "Confirm Request",
      description:
        "Review your selected services and appointment details before final confirmation.",
    },
    {
      number: "05",
      title: "Pick Your bike",
      description:
        "Once the service is complete, pick up your bike or choose our convenient drop-off option.",
    },
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
                  background: "rgba(255, 165, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  color: "#333",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0px 8px 20px rgba(255, 165, 0, 0.6)",
                    transform: "translateY(-5px)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate(service.path)}
              >
                {service.icon}
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#f39c12" }}
                  >
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

      {/*Content 3 */}
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#f39c12" }}
          >
            WORK PROCESS
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            We offer comprehensive bike services, including engine and
            electrical diagnostics. Contact us today for reliable motorbike
            repair solutions.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {steps.map((step, index) => (
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
                    backgroundColor: "#A4B465",
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
                      backgroundColor: "#F0BB78",
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
                      sx={{ color: "#626F47" }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="#F5ECD5" mt={1}>
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Service;
