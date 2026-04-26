require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PositionsModel = require("./model/PositionsModel");



const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL ;

app.set('trust proxy', 1);

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((url) => url.trim())
  : [
      "http://localhost:5173",// frontend
      "http://localhost:5174",// Dashboard
      "http://localhost:3000",
    ];

// ── 1. CORS & PREFLIGHT MIDDLEWARE (FIXED FOR EXPRESS 5) ──────────────────
// Humne path "(.*)" hata diya hai kyunki wo crash kar raha tha.
// Ye middleware saare CORS headers handle kar lega.
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ── 2. STANDARD MIDDLEWARES ────────────────────────────────────────────────
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser()); 

// ── 3. ROUTES ──────────────────────────────────────────────────────────────

const authRoute = require("./Routes/AuthRoute");
app.use("/", authRoute);

const holdingsRoute = require("./Routes/HoldingsRoute");
app.use("/api/holdings", holdingsRoute);
const ordersRoute = require("./Routes/OrdersRoute");
app.use("/api/orders", ordersRoute);

const positionsRoute = require("./Routes/PositionsRoute");
app.use("/api/positions", positionsRoute);

// ── 4. DATABASE & SERVER ───────────────────────────────────────────────────
mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("❌ MongoDB Error:", err));