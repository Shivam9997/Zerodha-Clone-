const OrdersModel = require('../model/OrdersModel');

// GET ORDERS (real DB data)
module.exports.getUserOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ createdAt: -1 }).limit(50);
    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders.map(order => ({
        ...order._doc,
        name: order.symbol, // for frontend compatibility
        type: order.mode // map mode to type
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching orders' });
  }
};

// CREATE ORDER (protected)
module.exports.createOrder = async (req, res) => {
  try {
    const order = new OrdersModel({
      ...req.body
    });
    await order.save();
    
    res.status(201).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

