const express = require('express');
const { verifyToken, verifyRole } = require('../middleware/auth');
const {
  createDeliveryTask,
  getDeliveryTasks,
  getDeliveryTaskById,
  updateDeliveryTaskStatus,
  deleteDeliveryTask,
} = require('../controllers/deliveryTaskController');

const router = express.Router();

// Create a new delivery task
router.post(
  '/',
  verifyToken,
  verifyRole(['admin', 'pantryStaff']),
  createDeliveryTask
);

// Get all delivery tasks
router.get(
  '/',
  verifyToken,
  verifyRole(['admin', 'pantryStaff']),
  getDeliveryTasks
);

// Get a specific delivery task by ID
router.get(
  '/:id',
  verifyToken,
  verifyRole(['admin', 'pantryStaff', 'deliveryPersonnel']),
  getDeliveryTaskById
);

// Update delivery task status (e.g., mark as "Delivered")
router.patch(
  '/:id',
  verifyToken,
  verifyRole(['admin', 'pantryStaff', 'deliveryPersonnel']),
  updateDeliveryTaskStatus
);

// Delete a delivery task
router.delete(
  '/:id',
  verifyToken,
  verifyRole(['admin']),
  deleteDeliveryTask
);

module.exports = router;
