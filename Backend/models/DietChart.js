const mongoose = require('mongoose');

const dietChartSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    meals: {
      morning: { type: String, required: true },
      afternoon: { type: String, required: true },
      evening: { type: String, required: true },
    },
    instructions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('DietChart', dietChartSchema);
