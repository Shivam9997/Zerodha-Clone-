const PositionsModel = require('../model/PositionsModel');

// GET POSITIONS (real DB data)
module.exports.getUserPositions = async (req, res) => {
  try {
    const positions = await PositionsModel.find({}).sort({ price: -1 }).limit(50);
    res.status(200).json({
      success: true,
      count: positions.length,
      data: positions.map(p => ({
        ...p._doc,
        symbol: p.name, // compatibility
        quantity: p.qty,
        avgPrice: p.avg,
        currentPrice: p.price
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching positions' });
  }
};

// CREATE POSITION (protected)
module.exports.createPosition = async (req, res) => {
  try {
    const position = new PositionsModel({
      ...req.body
    });
    await position.save();
    
    res.status(201).json({
      success: true,
      data: position
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
