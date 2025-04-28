import express from 'express';
import { dataGet } from '../controllers/paymentDataGetController.js'; // Adjust path if necessary

const router = express.Router();

// Define the route
router.get('/get-booking-details', dataGet); // Using router, not app

export default router;
