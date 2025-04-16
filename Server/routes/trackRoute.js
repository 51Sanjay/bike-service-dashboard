import express from "express";
import { trackService } from "../controllers/trackingController.js";

const router = express.Router();

router.get("/track/:vehicleNumber", trackService);

export default router;
