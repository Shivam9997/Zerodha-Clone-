const HoldingsModel = require('../model/HoldingsModel');

// GET HOLDINGS (real DB data)
module.exports.getUserHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({}).sort({ pnl: -1 }).limit(50);
    // Calculate current fields for frontend
    const enrichedHoldings = holdings.map(h => {
      const pnlValue = h.pnl || 0;
      const netChg = ((h.currentPrice - h.avgPrice) / h.avgPrice * 100).toFixed(2) + '%';
      const dayChg = netChg; // simplified
      return {
        name: h.symbol,
        symbol: h.symbol,
        qty: h.quantity,
        avg: h.avgPrice,
        price: h.currentPrice,
        net: pnlValue > 0 ? `+${netChg}` : netChg,
        day: pnlValue > 0 ? `+${dayChg}` : dayChg,
        pnl: pnlValue
      };
    });
    res.status(200).json({
      success: true,
      count: enrichedHoldings.length,
      data: enrichedHoldings
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching holdings' });
  }
};

// CREATE HOLDING (protected)
module.exports.createHolding = async (req, res) => {
  try {
    const holding = new HoldingsModel({
      ...req.body
    });
    await holding.save();
    
    res.status(201).json({
      success: true,
      data: holding
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

