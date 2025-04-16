import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String },
  vehicleNumber: { type: String },
  vehicleType: { type: String },
  vehicleBrand: { type: String },
  vehicleModel: { type: String },
  date: { type: String },
  timeSlot: { type: String },
  services: [{ type: String }],
  pickupDrop: { type: String },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
