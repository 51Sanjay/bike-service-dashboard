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
  Container
} from "@mui/material";
import axios from "axios";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { useNavigate } from "react-router-dom";

const serviceOptions = [
  "General service",
  "Silver Service",
  "Gold Service",
  "Platinum Service",
  "Oil change",
  "Water wash",
  "Clutch works",
  "Engine Repair",
  "Insurance renewal",
  "Tyre replacement",
  "Brake shoes replacement",
  "Fork adjustment and repair",
  "Chain sprocket replacement",
  "Seat/Tank cover change",
  "Additional Accessories fitting",
  "Starting Issue, carburetor cleaning",
  "Head light bulb replacement and repair",
  "Tank cleaning required for vehicle kept idle",
  "Accident Repair/Cashless insurance claim process",
  "Battery charging/Replacement/Health checkup with report",
];

const bikeData = {
  "E-Vehicle": ["Ola", "Ather", "Hero Electric", "Bajaj", "TVS", "Revolt", "Ultraviolette", "Tork Motors"],
  Bike: ["Honda", "Yamaha", "Royal Enfield", "Bajaj", "Hero", "TVS", "KTM", "Suzuki", "Harley-Davidson", "Kawasaki", "BMW"],
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
  Honda: ["Activa 6G", "Dio", "Activa 125", "CB Shine", "Unicorn", "Hornet 2.0", "H’ness CB350"],
  Yamaha: ["FZ", "R15", "MT-15", "FZS", "Fascino 125", "RayZR 125"],
  "Royal Enfield": ["Classic 350", "Bullet 350", "Meteor 350", "Himalayan"],
  Hero: ["Splendor Plus", "Passion Pro", "Xtreme 160R", "Karizma XMR", "Maestro Edge", "Pleasure+"],
  KTM: ["Duke 200", "Duke 390", "RC 200", "Adventure 390"],
  Suzuki: ["Gixxer SF 150", "Gixxer 250", "Intruder", "Access 125", "Burgman Street"],
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

  const handleServiceChange = (event) => {
    const { value } = event.target;
    setFormData((prev) => {
      const services = [...prev.services];
      if (services.includes(value)) {
        return { ...prev, services: services.filter((s) => s !== value) };
      } else {
        return { ...prev, services: [...services, value] };
      }
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = "Vehicle number is required";
    } else if (
      !/^[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}$/.test(formData.vehicleNumber.trim().toUpperCase())
    ) {
      newErrors.vehicleNumber = "Enter a valid vehicle number (e.g., TN49AB1234)";
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
        formData
      );
    
        navigate("/payment"); // Change to your actual booking route
    
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
      });
      setErrors({});
    } catch (error) {
      console.error("Booking error:", error);
      alert("⚠️ Server error: " + (error.response?.data?.message || error.message));
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
      <Paper elevation={4} sx={{  p: 4, borderRadius: 3 ,  }}>
        <Typography variant="h3" align="center" gutterBottom >
        <TwoWheelerIcon sx={{ fontSize: 40, mr: 1 ,}} />
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
                onChange={(e) => handleChange("vehicleNumber", e.target.value)}
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
                    onChange={(e) => handleChange("vehicleModel", e.target.value)}
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
                  {serviceOptions.map((service) => (
                    <FormControlLabel
                      key={service}
                      control={
                        <Checkbox
                          checked={formData.services.includes(service)}
                          onChange={handleServiceChange}
                          value={service}
                        />
                      }
                      label={service}
                    />
                  ))}
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
                  <FormControlLabel value="none" control={<Radio />} label="None" />
                  <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
                  <FormControlLabel value="drop" control={<Radio />} label="Drop" />
                  <FormControlLabel value="both" control={<Radio />} label="Pickup & Drop" />
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
                      variant={formData.timeSlot === slot ? "contained" : "outlined"}
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

            <Grid item xs={12}>
              <Button variant="contained" type="submit" color="primary" fullWidth onClick={navigate}>
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
