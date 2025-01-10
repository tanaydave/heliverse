const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    contactInfo: { type: String, required: true },
    medicalHistory: { type: String, required: true },
    assignedDietCharts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DietChart',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
