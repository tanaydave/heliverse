const express = require('express');
const router = express.Router();
const { verifyToken, verifyRole } = require('../middleware/auth');
const {
  createDeliveryPersonnel,
  getDeliveryPersonnel,
  getDeliveryPersonnelById,
  updateDeliveryPersonnel,
  deleteDeliveryPersonnel,
} = require('../controllers/deliverypersonnelController');

// Routes
router.post('/', verifyToken, verifyRole(['admin']), createDeliveryPersonnel);
router.get('/', verifyToken, verifyRole(['admin']), getDeliveryPersonnel);
router.get('/:id', verifyToken, verifyRole(['admin']), getDeliveryPersonnelById);
router.put('/:id', verifyToken, verifyRole(['admin']), updateDeliveryPersonnel);
router.delete('/:id', verifyToken, verifyRole(['admin']), deleteDeliveryPersonnel);

module.exports = router;
