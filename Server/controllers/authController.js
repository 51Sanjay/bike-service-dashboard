const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Validate required fields
    if (!username || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: "Email or phone already in use." });
    }

    // Create new user
    const newUser = new User({ username, email, phone, password });
    await newUser.save();
    console.log("✅ User saved successfully:", newUser);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email or phone already in use." });
    }
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Ensure JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from environment variables!");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Set token in httpOnly cookie (secure)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    res.json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
