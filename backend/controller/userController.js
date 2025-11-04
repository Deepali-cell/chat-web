import userModal from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModal.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already in use." });
    }

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format." });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userData = { username, email, password: hashPassword };
    const newUser = new userModal(userData);
    await newUser.save();

    const usertoken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.status(201).json({ success: true, usertoken });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Both email and password are required.",
      });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format." });
    }

    const user = await userModal.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "No user found with this email." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }

    const usertoken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ success: true, usertoken });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
const allUsers = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized. Please log in.",
      });
    }

    const loginUserId = userId;
    const users = await userModal
      .find({ _id: { $ne: loginUserId } })
      .select("-password");
    if (!users) {
      return res.json({ success: false, message: "No users found" });
    }
    return res.json({ success: true, users });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getProfile = async (req, res) => {
  try {
    const userData = await userModal.findById(req.userId).select("-password");
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res.status(200).json({ success: true, userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, allUsers, getProfile };
