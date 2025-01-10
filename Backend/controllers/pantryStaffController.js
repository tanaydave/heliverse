const PantryStaff = require('../models/PantryStaff');

// Create a new pantry staff member
const createPantryStaff = async (req, res) => {
  try {
    const { name, contactInfo } = req.body;
    const newPantryStaff = new PantryStaff({ name, contactInfo });
    await newPantryStaff.save();
    res.status(201).json(newPantryStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error creating pantry staff', error });
  }
};

// Get all pantry staff members
const getPantryStaff = async (req, res) => {
  try {
    const pantryStaff = await PantryStaff.find();
    res.status(200).json(pantryStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pantry staff', error });
  }
};

// Get a single pantry staff member
const getPantryStaffById = async (req, res) => {
  try {
    const pantryStaff = await PantryStaff.findById(req.params.id);
    if (!pantryStaff) return res.status(404).json({ message: 'Pantry staff not found' });
    res.status(200).json(pantryStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pantry staff', error });
  }
};

// Update pantry staff
const updatePantryStaff = async (req, res) => {
  try {
    const updatedPantryStaff = await PantryStaff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPantryStaff) return res.status(404).json({ message: 'Pantry staff not found' });
    res.status(200).json(updatedPantryStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pantry staff', error });
  }
};

// Delete pantry staff
const deletePantryStaff = async (req, res) => {
  try {
    const deletedPantryStaff = await PantryStaff.findByIdAndDelete(req.params.id);
    if (!deletedPantryStaff) return res.status(404).json({ message: 'Pantry staff not found' });
    res.status(200).json({ message: 'Pantry staff deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pantry staff', error });
  }
};

module.exports = { createPantryStaff, getPantryStaff, getPantryStaffById, updatePantryStaff, deletePantryStaff };
