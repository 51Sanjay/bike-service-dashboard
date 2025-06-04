import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String },
  vehicleNumber: { type: String },
  vehicleType: { type: String },
  vehicleBrand: { type: String },
  vehicleModel: { type: String },
  date: { type: String },
  timeSlot: { type: String },
  services: [{ type: String }],
  addtoCard: [
    {
      title: String,
      features: [String],
      oldPrice: Number,
      newPrice: Number,
      bgColor: String,
    },
  ],
  pickupDrop: { type: String },
  totalAmount: { type: Number },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
