const express = require('express');
const router = express.Router();
const { verifyToken, verifyRole } = require('../middleware/auth');
const {
  createDietChart,
  getDietCharts,
  getDietChartById,
} = require('../controllers/dietChartController');

// Routes
router.post('/', verifyToken, verifyRole(['admin', 'pantryStaff']), createDietChart);
router.get('/', verifyToken, verifyRole(['admin', 'pantryStaff']), getDietCharts);
router.get('/:id', verifyToken, verifyRole(['admin', 'pantryStaff']), getDietChartById);

module.exports = router;
