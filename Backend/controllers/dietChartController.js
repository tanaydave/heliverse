const DietChart = require('../models/DietChart');
const Patient = require('../models/Patient');

// Create a new diet chart
const createDietChart = async (req, res) => {
  try {
    const { patientId, meals, instructions } = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    const newDietChart = new DietChart({ patient: patientId, meals, instructions });
    await newDietChart.save();

    // Add diet chart to patient
    patient.assignedDietCharts.push(newDietChart._id);
    await patient.save();

    res.status(201).json(newDietChart);
  } catch (error) {
    res.status(500).json({ message: 'Error creating diet chart', error });
  }
};

// Get all diet charts
const getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate('patient');
    res.status(200).json(dietCharts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching diet charts', error });
  }
};

// Get a single diet chart
const getDietChartById = async (req, res) => {
  try {
    const dietChart = await DietChart.findById(req.params.id).populate('patient');
    if (!dietChart) return res.status(404).json({ message: 'Diet chart not found' });
    res.status(200).json(dietChart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching diet chart', error });
  }
};

module.exports = { createDietChart, getDietCharts, getDietChartById };
