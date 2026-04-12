// const { model } = require("mongoose");

// const {PositionsSchema} = require("../schemas/PositionsSchema");

// const {PositionsModel } = new model("position", PositionsSchema);

// module.exports = { PositionsModel }; 

const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// IMPORTANT: Model name first letter capital
const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = PositionsModel;