import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import ScooterIcon from "@mui/icons-material/EmojiTransportation";
import { useNavigate } from "react-router-dom";

const bikeData = {
  "E-Vehicle": ["Ola", "Ather", "Hero Electric", "Bajaj", "TVS", "Revolt", "Ultraviolette", "Tork Motors"],
  "Bike": ["Honda", "Yamaha", "Royal Enfield", "Bajaj", "Hero", "TVS", "KTM", "Suzuki", "Harley-Davidson", "Kawasaki", "BMW"],
  "Scooter": ["Honda", "TVS", "Suzuki", "Yamaha", "Hero"]
};

const modelData = {
  "Ola": ["S1", "S1 Pro", "S1 Air"],
  "Ather": ["450X", "450S", "Rizta"],
  "Hero Electric": ["Photon", "Optima", "Flash", "Nyx"],
  "Bajaj": ["Chetak", "Urbanite"],
  "TVS": ["iQube", "X", "Jupiter", "NTorq", "Scooty Pep+", "Zest"],
  "Revolt": ["RV400", "RV300"],
  "Ultraviolette": ["F77"],
  "Tork Motors": ["Kratos"],
  "Honda": ["Activa 6G", "Dio", "Activa 125", "CB Shine", "Unicorn", "Hornet 2.0", "H’ness CB350"],
  "Yamaha": ["FZ", "R15", "MT-15", "FZS", "Fascino 125", "RayZR 125"],
  "Royal Enfield": ["Classic 350", "Bullet 350", "Meteor 350", "Himalayan"],
  "Hero": ["Splendor Plus", "Passion Pro", "Xtreme 160R", "Karizma XMR", "Maestro Edge", "Pleasure+"],
  "KTM": ["Duke 200", "Duke 390", "RC 200", "Adventure 390"],
  "Suzuki": ["Gixxer SF 150", "Gixxer 250", "Intruder", "Access 125", "Burgman Street"],
  "Harley-Davidson": ["X440", "Iron 883", "Fat Boy"],
  "Kawasaki": ["Ninja 300", "Ninja 650", "Versys 650"],
  "BMW": ["G 310 R", "G 310 GS", "S 1000 RR"]
};

const iconMap = {
  "E-Vehicle": <ElectricScooterIcon sx={{ fontSize: 40 }} />,
  "Bike": <TwoWheelerIcon sx={{ fontSize: 40 }} />,
  "Scooter": <ScooterIcon sx={{ fontSize: 40 }} />
};

const BikeSelection = () => {
  const [bikeType, setBikeType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (bikeType && brand && model) {
      navigate("/service", { state: { bikeType, brand, model } });
    } else {
      alert("Please select all fields.");
    }
  };

  return (
    <Box
            sx={{
              backgroundColor: "#f5f5f5",
              minHeight: "100%",
              width: "100%",
              py: 2,
              paddingTop: "90px",
            }}>
    <Box sx={{ paddingTop: "120px", px: 2 }}>
      <Typography variant="h5" textAlign="center" mb={3}>
        Select Your Bike Type
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={4}>
        {Object.keys(bikeData).map((type) => (
          <Grid item xs={12} sm={4} md={3} key={type}>
            <Card
              onClick={() => {
                setBikeType(type);
                setBrand("");
                setModel("");
              }}
              sx={{
                textAlign: "center",
                py: 3,
                border:
                  bikeType === type ? "2px solid #f39c12" : "1px solid #ddd",
                cursor: "pointer",
                "&:hover": { borderColor: "#f39c12" },
              }}
            >
              <CardContent>
                {iconMap[type]}
                <Typography variant="h6" mt={1}>
                  {type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {bikeType && (
        <Box sx={{ maxWidth: 500, mx: "auto" }}>
          {/* Brand Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              select
              label="Select Brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setModel("");
              }}
            >
              {bikeData[bikeType].map((b) => (
                <MenuItem key={b} value={b}>
                  {b}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          {/* Model Selection */}
          {brand && (
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                select
                label="Select Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                {modelData[brand]?.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          )}

          {/* Submit Button */}
          {model && (
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Proceed to Service
            </Button>
          )}
        </Box>
      )}
    </Box>
    </Box>
  );
};

export default BikeSelection;
