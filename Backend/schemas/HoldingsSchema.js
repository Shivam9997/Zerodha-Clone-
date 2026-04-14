const mongoose = require('mongoose');

const holdingsSchema = new mongoose.Schema({
  // userId: removed for public mode

  symbol: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  avgPrice: {
    type: Number,
    required: true
  },
  currentPrice: {
    type: Number,
    default: 0
  },
  pnl: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = holdingsSchema;

