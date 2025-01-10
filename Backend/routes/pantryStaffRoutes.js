const express = require('express');
const router = express.Router();
const { verifyToken, verifyRole } = require('../middleware/auth');
const {
  createPantryStaff,
  getPantryStaff,
  getPantryStaffById,
  updatePantryStaff,
  deletePantryStaff,
} = require('../controllers/pantryStaffController');

// Routes
router.post('/', verifyToken, verifyRole(['admin']), createPantryStaff);
router.get('/', verifyToken, verifyRole(['admin']), getPantryStaff);
router.get('/:id', verifyToken, verifyRole(['admin']), getPantryStaffById);
router.put('/:id', verifyToken, verifyRole(['admin']), updatePantryStaff);
router.delete('/:id', verifyToken, verifyRole(['admin']), deletePantryStaff);

module.exports = router;
