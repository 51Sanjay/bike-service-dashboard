import Booking from "../models/Booking.js";

export const trackService = async (req, res) => {
  try {
    const { vehicleNumber } = req.params;

    if (!vehicleNumber) {
      return res.status(400).json({ message: "Vehicle number is required." });
    }

    const booking = await Booking.findOne({ vehicleNumber: vehicleNumber.toUpperCase() });

    if (!booking) {
      return res.status(404).json({ message: "No booking found." });
    }

    res.json({
      vehicleNumber: booking.vehicleNumber,
      status: booking.status,
      serviceDetails: booking.services,
      pickupDrop: booking.pickupDrop,
      date: booking.date,
      timeSlot: booking.timeSlot,
    });
  } catch (error) {
    console.error("Error tracking booking:", error);
    res.status(500).json({ message: "Server error" });
  }
};
