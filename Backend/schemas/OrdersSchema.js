const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  // userId: removed for public mode

  symbol: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    enum: ['BUY', 'SELL'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = ordersSchema;

