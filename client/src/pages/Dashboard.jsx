import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
} from "@mui/material";
import Footer from "./Footer";
import Dashimg from "../assets/Dashimg.jpg";
import ServiceIcon from "@mui/icons-material/BuildCircle";
import UpdateIcon from "@mui/icons-material/Update";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PhoneIcon from "@mui/icons-material/Phone";
import contenTowimg from "../assets/2content.png";
import FourImg from "../assets/OneTwoimg.png";
import Garage from "../assets/Garage.png";
import BikeReparing from "../assets/bikeRepair.jpg";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike"; // Pick Up & Drop
import BuildIcon from "@mui/icons-material/Build"; // Expert Mechanics
import AppsIcon from "@mui/icons-material/Apps"; // Multi-Brand Options
import VerifiedIcon from "@mui/icons-material/Verified"; // Genuine Spare Parts
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService"; // Standard Workshop
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/service"); // Change to your actual booking route
  };
  const services = [
    {
      icon: <DirectionsBikeIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Pick Up & Drop Service",
      description:
        "We offer timely pick up service of your vehicle from your desired location. After the servicing, the bike will be delivered at your location. We offer excellent doorstep bike service at affordable cost.",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Expert Mechanics",
      description:
        "Avail hassle-free bike servicing and repairs from our highly trained and certified mechanics. The end-to-end servicing is done by professionals ensuring zero compromise on quality.",
    },
    {
      icon: <AppsIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Multi Brand Options",
      description:
        "We offer a one-stop solution to all leading brands of two-wheelers. Our expert mechanics are trained to work on popular brands like Hero, Yamaha, Royal Enfield, KTM, BMW, etc.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Genuine Spare Parts",
      description:
        "We are Coimbatore’s top two-wheeler service center, offering OEM high-quality parts to ensure your ride's best performance and durability. Trust us for long-lasting solutions!",
    },
    {
      icon: <HomeRepairServiceIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Standard Workshop",
      description:
        "Being the trusted bike service center in Coimbatore, your two-wheeler is always in safe hands. Our expert professionals work on resolving issues within committed timelines.",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
      title: "Realtime Tracking",
      description:
        "We keep you informed about periodic maintenance, ensuring your two-wheeler remains in optimal condition and runs excellently on the roads.",
    },
  ];
  return (
    <>
      {/* 1 Content  */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100%",
          width: "100%",
          py: 3,
          paddingTop: "130px",
        }}
      >
        {/* 🚀 Section 1: Hero Image (Full Width) */}
        <Card sx={{ mb: 4, width: "100%" }}>
          <CardMedia
            component="img"
            height="400"
            src={Dashimg}
            alt="Bike Service Shop"
            sx={{ objectFit: "cover", width: "100%" }}
          />
        </Card>
      </Box>
      {/*2 Content*/}
      <Box sx={{ bgcolor: "#f8f9fa", py: 6, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight="bold">
            No matter whatever may be the bike problem, <br />
            Fix it with{" "}
            <Typography
              component="span"
              sx={{ color: "#d32f2f", fontWeight: "bold" }}
            >
              Mechanic
            </Typography>
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#555" }}>
            Best Multi Brand Two Wheeler Service Center In Kumbakonam
          </Typography>

          {/* Reviews & Ratings */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#d32f2f" }}
            >
              4.8 out of 708 Reviews
            </Typography>
            <Rating value={4.8} precision={0.1} readOnly sx={{ ml: 1 }} />
          </Box>

          {/* Call-to-Action Buttons */}
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                startIcon={<PhoneIcon />}
                sx={{ px: 3, py: 1.2, fontWeight: "bold", fontSize: "1rem" }}
              >
                CALL : 9159456789
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  px: 3,
                  py: 1.2,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderColor: "#d32f2f",
                  color: "#d32f2f",
                  "&:hover": { backgroundColor: "#d32f2f", color: "#fff" },
                }}
                onClick={handleBooking}
              >
                Book a Service
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*3 Content*/}
      <Box sx={{ bgcolor: "#f8f9fa", py: 6 }}>
        <Container maxWidth="lg">
          {/* Section Heading */}
          <Typography variant="h4" fontWeight="bold" align="center">
            Our Services
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mt: 1, color: "#555" }}
          >
            Get fully functional two-wheeler on the road with easy, affordable,
            fast & quality services
          </Typography>

          {/* Services Grid */}
          <Grid container spacing={10} sx={{ mt: 4 }} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    textAlign: "center",
                    borderRadius: 12,
                    "&:hover": { boxShadow: 3 },
                  }}
                >
                  {service.icon}
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#d32f2f" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: "#666" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4 Content */}
      {/* service Display*/}
      <Box sx={{ maxWidth: 1000, mx: "auto", p: 3,py:6 }}>
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
          <Grid container spacing={3} alignItems="center">
            {/* Left Side Image */}
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={contenTowimg}
                alt="Service Booking"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Book a Service
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Say goodbye to service booking woes. Enjoy the convenience of
                  booking a service from anywhere through WhatsApp and get live
                  status updates on the go.
                </Typography>

                {/* Service Features */}
                <Box sx={{ mt: 2 }}>
                  <Typography
                    display="flex"
                    alignItems="center"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    <ServiceIcon sx={{ mr: 1, color: "blue" }} />
                    Service workshop open all 7 days
                  </Typography>
                  <Typography
                    display="flex"
                    alignItems="center"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    <UpdateIcon sx={{ mr: 1, color: "green" }} />
                    Live status updates of your service
                  </Typography>
                  <Typography
                    display="flex"
                    alignItems="center"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    <LocalShippingIcon sx={{ mr: 1, color: "orange" }} />
                    Service pick up & drop facility
                  </Typography>
                  <Typography
                    display="flex"
                    alignItems="center"
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    <WhatsAppIcon sx={{ mr: 1, color: "green" }} />
                    Easy booking through WhatsApp
                  </Typography>
                </Box>

                {/* Book Service Button */}
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleBooking}
                >
                  Book Service
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        {/* 5 another Content*/}
        <Container sx={{ py: 5 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Quick 3-step booking
          </Typography>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Steps */}
            <Grid item xs={12} md={6}>
              <List>
                {[
                  "Select your bike service",
                  "Enter your location & contact details",
                  "Relax while our experts handle the rest!",
                ].map((step, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <RocketLaunchIcon sx={{ color: "#FFA500" }} />
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Right Side - Illustration */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <img
                src={FourImg} // Replace with actual illustration
                alt="Booking Steps"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Container>

        {/*6 content*/}
        {/* Right Side - Illustration */}
        <Box sx={{ width: "100%", backgroundColor: "#f5f5f5", py: 5 }}>
          <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
            <Typography variant="h5" align="center" gutterBottom>
              Trusted Mechanics
            </Typography>
            <Grid container spacing={4} alignItems="center">
              {/* Left Side - Illustration */}
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <img
                  src={Garage} // Replace with actual illustration
                  alt="Garage Illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Grid>

              {/* Right Side - Features */}
              <Grid item xs={12} md={6}>
                <List>
                  {[
                    "Expert mechanics for your every need",
                    "Best-in-class workmanship",
                    "Top of the line equipment for the best service experience",
                  ].map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <EngineeringIcon sx={{ color: "#FFA500" }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/*7 content*/}
        <Box sx={{ width: "100%", bgcolor: "#fff", py: 5 }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
              {/* Left Side - Image */}
              <Grid item xs={12} md={5}>
                <img
                  src={BikeReparing}
                  alt="Mechanic Repair"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Grid>

              {/* Right Side - Text Content */}
              <Grid item xs={12} md={7}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  On-Spot Bike Repair Service
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#444", lineHeight: 1.8 }}
                >
                  Get instant assistance for breakdowns and starting issues
                  caused by mechanical or electrical problems, battery failures,
                  spark plug issues, wheel troubles, chain link faults, and
                  more—within just 30 minutes!
                  <br />
                  If the issue requires major repairs, we’ll guide you on the
                  best next steps. Our extensive network of trusted bike
                  workshops ensures top-quality mechanical, electrical, and
                  servicing solutions—all under expert supervision.
                  <br />
                  No more worries when you're stuck! Whether you need doorstep
                  bike service, emergency repairs, or routine maintenance, our
                  professional mechanics will reach you quickly to get you back
                  on the road.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
