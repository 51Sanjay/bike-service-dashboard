import Booking from '../models/Booking.js'; // Correctly import the Booking model

export const dataGet = async (req, res) => {
  try {
    // Fetch the latest booking from the database
    const bookingDetails = await Booking.findOne().sort({ createdAt: -1 }); // Get the most recent booking
    if (!bookingDetails) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(bookingDetails); // Send the booking details as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching booking details' });
  }
};
