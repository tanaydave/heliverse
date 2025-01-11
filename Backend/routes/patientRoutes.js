const express = require('express');
const router = express.Router();
const { verifyToken, verifyRole } = require('../middleware/auth');
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');

// Routes
router.post('/', verifyToken, verifyRole(['admin']), createPatient);
router.get('/', verifyToken, verifyRole(['admin', 'pantryStaff']), getPatients);
router.get('/:id', verifyToken, verifyRole(['admin', 'pantryStaff']), getPatientById);
router.put('/:id', verifyToken, verifyRole(['admin']), updatePatient);
router.delete('/:id', verifyToken, verifyRole(['admin']), deletePatient);

module.exports = router;
