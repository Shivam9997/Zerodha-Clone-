const express = require('express');
const router = express.Router();
const { getUserHoldings, createHolding } = require('../Controllers/HoldingsController');

router.get('/', getUserHoldings);
router.post('/', createHolding);

module.exports = router;

