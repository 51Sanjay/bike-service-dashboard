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
import MotorcycleIcon from "@mui/icons-material/TwoWheeler";
import TireRepairIcon from "@mui/icons-material/BuildCircle";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CompressIcon from "@mui/icons-material/Compress";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TuneIcon from "@mui/icons-material/Tune";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setPunctureService } from "../redux/punctureSlice";

const Puncture = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const iconMap = {
    TireRepairIcon:<TireRepairIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
    PlumbingIcon:<PlumbingIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
    CompressIcon:<CompressIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
    AddCircleIcon:<AddCircleIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
    TuneIcon:<TuneIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
    VerifiedIcon:<VerifiedIcon sx={{ fontSize: 40, color: "#164BA1" }} />,
   }

  const punctureServices = [
    {
      icon:"TireRepairIcon",
      title: "Tyre Inspection",
      features: ["Thorough check for punctures, nails, or external damage."],
      newPrice: 300,
    },
    {
      icon:"PlumbingIcon",
      title: "Tube Removal & Repair",
      features:["Safe tube removal and repair using industrial-grade patches."],
      newPrice: 150,
    },
    {
      icon:"CompressIcon",
      title: "Tyre Pressure Check",
      features:["Accurate air pressure refilling and balance check."],
      newPrice:400,
    },
    {
      icon:"AddCircleIcon" ,
      title: "Valve Replacement",
      features: ["Valve core checked & replaced if damaged or leaking."],
      newPrice: 350,
    },
    {
      icon:"TuneIcon",
      title: "Tubeless Tyre Plugging",
      features: ["Premium plugging for tubeless tyres using mushroom plugs."],
      newPrice: 500,
    },
    {
      icon:"VerifiedIcon",
      title: "Final Safety Check",
      features: ["Bead seating, wheel spin & alignment test before delivery."],
      newPrice: 550,
    },
  ];

  const handleCheckout = (service) => {
      dispatch(setPunctureService(service));
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
          {/* Header Section */}
          <Box textAlign="center" mb={6}>
            <MotorcycleIcon sx={{ fontSize: 80 }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Bike Puncture Repair
            </Typography>
            <Typography variant="body1" mt={1}>
              • On-Site Service &nbsp;&nbsp;• Tube & Tubeless Tyres
              &nbsp;&nbsp;• Reliable & Fast
              <br />
              <AccessTimeIcon sx={{ fontSize: 16, mb: "-3px", ml: 1 }} /> 30
              Minutes Approx.
            </Typography>
          </Box>

          {/* Services as Cards */}
          <Grid container spacing={4}>
            {punctureServices.map((service, index) => (
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
                      height: 240, // Fixed height for all cards
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
                      <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}>
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
                      <Typography variant="body2" align="center" mt={1}>
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

export default Puncture;
