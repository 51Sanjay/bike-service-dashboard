import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  phone: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6 }, // Enforce min password length
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    console.log("Hashing password for:", this.email);

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log("Password hashed successfully!");
    
    next();
  } catch (error) {
    console.error("Error hashing password:", error.message);
    return next(error); // Pass errors to Mongoose middleware
  }
});

export default mongoose.model("User", UserSchema);
