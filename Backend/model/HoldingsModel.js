const mongoose = require("mongoose");
const holdingsSchema = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("Holding", holdingsSchema);

module.exports = HoldingsModel;

