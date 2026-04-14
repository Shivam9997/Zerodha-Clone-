const express = require('express');
const router = express.Router();
const { getUserPositions, createPosition } = require('../Controllers/PositionsController');

router.get('/', getUserPositions);
router.post('/', createPosition);

module.exports = router;
