import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // To show a loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    let valid = true;
    let newErrors = {};

    // Form validation
    if (isSignUp && formData.username.trim() === "") {
      newErrors.username = "Username is required.";
      valid = false;
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (isSignUp && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // API URL (Hardcoded)
    const API_URL = isSignUp
      ? "http://127.0.0.1:5000/api/auth/signup"
      : "http://127.0.0.1:5000/api/auth/signin";

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "application/json" },
      });

      alert(
        response.data.message ||
          (isSignUp ? "Signup Successful!" : "Login Successful!"),
      );
      navigate("/dashboard"); // Redirect to dashboard after success
    } catch (error) {
      setErrors({
        api:
          error.response?.data?.message ||
          "Something went wrong, please try again.",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: 350,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>

        {errors.api && (
          <Typography color="error" variant="body2">
            {errors.api}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              error={!!errors.username}
              helperText={errors.username}
            />
          )}

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />

          {isSignUp && (
            <TextField
              label="Phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone}
            />
          )}

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
          />

          {isSignUp && (
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 2 }}
            disabled={loading} // Disable while loading
          >
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>

        <Button
          onClick={() => setIsSignUp(!isSignUp)}
          sx={{ mt: 2, textTransform: "none", color: "primary.main" }}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Signin;
