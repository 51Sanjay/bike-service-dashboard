import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import trackRoute from "./routes/trackRoute.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import paymentDataRoutes from "./routes/paymentDataGet.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware setup
app.use(cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    methods: "GET,POST"
  }));
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", trackRoute);
app.use("/api/payment", paymentRoutes);
app.use("/api", paymentDataRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
