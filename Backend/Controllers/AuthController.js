const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
        success: false,
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      email,
      password: hashedPassword,
      username,
    });

    await user.save();

    res.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.json({
      message: "Server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "User not found",
        success: false,
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "24h" }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.json({
      message: "Login successful",
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.json({
      message: "Server error",
      success: false,
    });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({
        status: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
    res.json({
      status: true,
      user: decoded,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Invalid token",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      message: "Logout successful",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
  verify,
  logout,
};