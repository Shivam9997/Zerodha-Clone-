const mongoose = require("mongoose");
const ordersSchema = require("../schemas/OrdersSchema");

const OrdersModel = mongoose.model("Order", ordersSchema);

module.exports = OrdersModel;

