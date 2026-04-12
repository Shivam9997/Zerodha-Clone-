require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { HoldingsModel } = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

// ── CORS ─────────────────────────────────────────────────────────────────────
// In production, set ALLOWED_ORIGINS env var as a comma-separated list of URLs.
// e.g. https://zerodha-dashboard.onrender.com,https://zerodha-frontend.onrender.com
const defaultOrigins = ["https://zerodha-clone-dashboard-cg4b.onrender.com", "https://zerodha-clone-1-ovwh.onrender.com"];
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
  : defaultOrigins;

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (e.g. curl, Postman, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: origin ${origin} not allowed`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({}).sort({ _id: -1 });
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  const name = req.body.name;
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const mode = String(req.body.mode || "BUY").toUpperCase();

  if (!name || isNaN(qty) || isNaN(price) || qty <= 0) {
    return res.status(400).json({ error: "Invalid order payload" });
  }

  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();

  const existingHolding = await HoldingsModel.findOne({ name });
  const defaultNet = "+0.00%";
  const defaultDay = "+0.00%";

  if (mode === "BUY") {
    if (existingHolding) {
      const currentQty = existingHolding.qty || 0;
      const currentAvg = existingHolding.avg || 0;
      const newQty = currentQty + qty;
      const newAvg =
        newQty > 0 ? (currentAvg * currentQty + price * qty) / newQty : price;

      existingHolding.qty = newQty;
      existingHolding.avg = Number(newAvg.toFixed(2));
      existingHolding.price = price;
      existingHolding.net = defaultNet;
      existingHolding.day = defaultDay;
      await existingHolding.save();
    } else {
      const holding = new HoldingsModel({
        name,
        qty,
        avg: price,
        price,
        net: defaultNet,
        day: defaultDay,
      });
      await holding.save();
    }
  } else if (mode === "SELL") {
    if (existingHolding) {
      const currentQty = existingHolding.qty || 0;
      const remainingQty = currentQty - qty;

      if (remainingQty > 0) {
        existingHolding.qty = remainingQty;
        existingHolding.price = price;
        existingHolding.net = defaultNet;
        existingHolding.day = defaultDay;
        await existingHolding.save();
      } else {
        await HoldingsModel.deleteOne({ name });
      }
    }
  }

  res.status(201).json({ message: "Order saved successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});
