import express from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

// Create order route
router.post("/orders", createOrder);

// Verify payment route
router.post("/verify", verifyPayment);

export default router;
