import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  Container,
} from "@mui/material";
import axios from "axios";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { useNavigate } from "react-router-dom";

const serviceOptionsWithPrice = [
  { name: "General service", price: 200 },
  { name: "Silver Service", price: 300 },
  { name: "Gold Service", price: 500 },
  { name: "Platinum Service", price: 700 },
  { name: "Oil change", price: 150 },
  { name: "Water wash", price: 100 },
  { name: "Clutch works", price: 400 },
  { name: "Engine Repair", price: 1000 },
  { name: "Insurance renewal", price: 200 },
  { name: "Tyre replacement", price: 600 },
  { name: "Brake shoes replacement", price: 250 },
  { name: "Fork adjustment and repair", price: 300 },
  { name: "Chain sprocket replacement", price: 350 },
  { name: "Seat/Tank cover change", price: 450 },
  { name: "Additional Accessories fitting", price: 250 },
  { name: "Starting Issue, carburetor cleaning", price: 300 },
  { name: "Head light bulb replacement and repair", price: 100 },
  { name: "Tank cleaning required for vehicle kept idle", price: 200 },
  { name: "Accident Repair/Cashless insurance claim process", price: 1500 },
  {
    name: "Battery charging/Replacement/Health checkup with report",
    price: 400,
  },
];
const bikeData = {
  "E-Vehicle": [
    "Ola",
    "Ather",
    "Hero Electric",
    "Bajaj",
    "TVS",
    "Revolt",
    "Ultraviolette",
    "Tork Motors",
  ],
  Bike: [
    "Honda",
    "Yamaha",
    "Royal Enfield",
    "Bajaj",
    "Hero",
    "TVS",
    "KTM",
    "Suzuki",
    "Harley-Davidson",
    "Kawasaki",
    "BMW",
  ],
  Scooter: ["Honda", "TVS", "Suzuki", "Yamaha", "Hero"],
};

const modelData = {
  Ola: ["S1", "S1 Pro", "S1 Air"],
  Ather: ["450X", "450S", "Rizta"],
  "Hero Electric": ["Photon", "Optima", "Flash", "Nyx"],
  Bajaj: ["Chetak", "Urbanite"],
  TVS: ["iQube", "X", "Jupiter", "NTorq", "Scooty Pep+", "Zest"],
  Revolt: ["RV400", "RV300"],
  Ultraviolette: ["F77"],
  "Tork Motors": ["Kratos"],
  Honda: [
    "Activa 6G",
    "Dio",
    "Activa 125",
    "CB Shine",
    "Unicorn",
    "Hornet 2.0",
    "H’ness CB350",
  ],
  Yamaha: ["FZ", "R15", "MT-15", "FZS", "Fascino 125", "RayZR 125"],
  "Royal Enfield": ["Classic 350", "Bullet 350", "Meteor 350", "Himalayan"],
  Hero: [
    "Splendor Plus",
    "Passion Pro",
    "Xtreme 160R",
    "Karizma XMR",
    "Maestro Edge",
    "Pleasure+",
  ],
  KTM: ["Duke 200", "Duke 390", "RC 200", "Adventure 390"],
  Suzuki: [
    "Gixxer SF 150",
    "Gixxer 250",
    "Intruder",
    "Access 125",
    "Burgman Street",
  ],
  "Harley-Davidson": ["X440", "Iron 883", "Fat Boy"],
  Kawasaki: ["Ninja 300", "Ninja 650", "Versys 650"],
  BMW: ["G 310 R", "G 310 GS", "S 1000 RR"],
};

const timeSlots = [
  "9:00 am - 10:00 am",
  "10:00 am - 11:00 am",
  "11:00 am - 12:00 pm",
  "12:00 pm - 1:00 pm",
  "1:00 pm - 2:00 pm",
  "2:00 pm - 3:00 pm",
  "3:00 pm - 4:00 pm",
  "4:00 pm - 5:00 pm",
  "5:00 pm - 6:00 pm",
  "6:00 pm - 7:00 pm",
  "7:00 pm - 8:00 pm",
  "8:00 pm - 9:00 pm",
];

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    vehicleNumber: "",
    vehicleType: "",
    vehicleBrand: "",
    vehicleModel: "",
    date: "",
    timeSlot: "",
    services: [],
    pickupDrop: "None",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...formData.services];

    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((service) => service !== value);
    }

    const totalAmount = updatedServices.reduce((total, selectedService) => {
      const service = serviceOptionsWithPrice.find(
        (s) => s.name === selectedService,
      );
      return service ? total + service.price : total;
    }, 0);

    setFormData({ ...formData, services: updatedServices, totalAmount });

    if (updatedServices.length > 0) {
      setErrors((prevErrors) => ({ ...prevErrors, services: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) newErrors.name = "Name is required";
  
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address";
    }
  
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
  
    if (!formData.location.trim()) newErrors.location = "Location is required";
  
    if (!formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = "Vehicle number is required";
    } else if (
      !/^[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}$/.test(
        formData.vehicleNumber.trim().toUpperCase()
      )
    ) {
      newErrors.vehicleNumber =
        "Enter a valid vehicle number (e.g., TN49AB1234)";
    }
  
    if (!formData.vehicleType)
      newErrors.vehicleType = "Vehicle type is required";
    if (!formData.vehicleBrand)
      newErrors.vehicleBrand = "Vehicle brand is required";
    if (!formData.vehicleModel)
      newErrors.vehicleModel = "Vehicle model is required";
    if (!formData.date) newErrors.date = "Booking date is required";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    if (formData.services.length === 0)
      newErrors.services = "Select at least one service";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        formData,
      );

      navigate("/payment")

      alert("✅ Booking successful!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        vehicleNumber: "",
        vehicleType: "",
        vehicleBrand: "",
        vehicleModel: "",
        date: "",
        timeSlot: "",
        services: [],
        pickupDrop: "None",
        totalAmount: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Booking error:", error);
      alert(
        "⚠️ Server error: " + (error.response?.data?.message || error.message),
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        py: 5,
        paddingTop: "130px",
      }}
    >
      <Container maxWidth={false}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h3" align="center" gutterBottom>
            <TwoWheelerIcon sx={{ fontSize: 40, mr: 1 }} />
            Bike Service Booking
          </Typography>
          <Typography align="center" color="textSecondary" mb={3}>
            Fill the form to schedule your service
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="GMail"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  placeholder="Eg: Near Bus Stand, Kumbakonam"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  error={!!errors.location}
                  helperText={errors.location}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Vehicle Number"
                  placeholder="TN00AB0000"
                  value={formData.vehicleNumber}
                  onChange={(e) =>
                    handleChange("vehicleNumber", e.target.value)
                  }
                  error={!!errors.vehicleNumber}
                  helperText={errors.vehicleNumber}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Vehicle Type"
                  value={formData.vehicleType}
                  onChange={(e) => {
                    handleChange("vehicleType", e.target.value);
                    handleChange("vehicleBrand", "");
                    handleChange("vehicleModel", "");
                  }}
                  error={!!errors.vehicleType}
                  helperText={errors.vehicleType}
                >
                  {Object.keys(bikeData).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {formData.vehicleType && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Brand"
                      value={formData.vehicleBrand}
                      onChange={(e) => {
                        handleChange("vehicleBrand", e.target.value);
                        handleChange("vehicleModel", "");
                      }}
                      error={!!errors.vehicleBrand}
                      helperText={errors.vehicleBrand}
                    >
                      {bikeData[formData.vehicleType].map((brand) => (
                        <MenuItem key={brand} value={brand}>
                          {brand}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Model"
                      value={formData.vehicleModel}
                      onChange={(e) =>
                        handleChange("vehicleModel", e.target.value)
                      }
                      error={!!errors.vehicleModel}
                      helperText={errors.vehicleModel}
                      disabled={!formData.vehicleBrand}
                    >
                      {modelData[formData.vehicleBrand]?.map((model) => (
                        <MenuItem key={model} value={model}>
                          {model}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <FormControl component="fieldset" error={!!errors.services}>
                  <FormLabel component="legend">Select Services</FormLabel>
                  <FormGroup row>
                    <Grid container>
                      {serviceOptionsWithPrice.map((service, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={service.name}
                                checked={formData.services.includes(
                                  service.name,
                                )}
                                onChange={handleServiceChange}
                              />
                            }
                            label={`${service.name} ${service.price > 0 ? `- ₹${service.price}` : ""}`}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                  {errors.services && (
                    <Typography color="error" variant="caption">
                      {errors.services}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Pickup / Drop</FormLabel>
                  <RadioGroup
                    row
                    value={formData.pickupDrop}
                    onChange={(e) => handleChange("pickupDrop", e.target.value)}
                  >
                    <FormControlLabel
                      value="none"
                      control={<Radio />}
                      label="None"
                    />
                    <FormControlLabel
                      value="pickup"
                      control={<Radio />}
                      label="Pickup"
                    />
                    <FormControlLabel
                      value="drop"
                      control={<Radio />}
                      label="Drop"
                    />
                    <FormControlLabel
                      value="both"
                      control={<Radio />}
                      label="Pickup & Drop"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Select Date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  error={!!errors.date}
                  helperText={errors.date}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1">Select Time Slot:</Typography>
                <Grid container spacing={1}>
                  {timeSlots.map((slot) => (
                    <Grid item xs={6} sm={3} key={slot}>
                      <Button
                        variant={
                          formData.timeSlot === slot ? "contained" : "outlined"
                        }
                        fullWidth
                        onClick={() => handleChange("timeSlot", slot)}
                      >
                        {slot}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                {errors.timeSlot && (
                  <Typography color="error" variant="caption">
                    {errors.timeSlot}
                  </Typography>
                )}
              </Grid>

              {/* Total Amount */}
              <Typography variant="h6" sx={{ mt: 2 }}>
                Total Amount: ₹{formData.totalAmount}
              </Typography>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  onClick={() => navigate()}
                >
                  Book Service
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Booking;
