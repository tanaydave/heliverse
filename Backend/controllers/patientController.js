const Patient = require('../models/Patient');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const { name, age, gender, contactInfo, medicalHistory } = req.body;
    const newPatient = new Patient({ name, age, gender, contactInfo, medicalHistory });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating patient', error });
  }
};

// Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate('assignedDietCharts');
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

// Get a single patient
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('assignedDietCharts');
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient', error });
  }
};

// Update a patient
const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};

// Delete a patient
const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient) return res.status(404).json({ message: 'Patient not found' });
    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
};

module.exports = { createPatient, getPatients, getPatientById, updatePatient, deletePatient };
