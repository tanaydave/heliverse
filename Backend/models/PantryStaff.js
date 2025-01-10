const mongoose = require('mongoose');

const pantryStaffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
    assignedMeals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DietChart',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('PantryStaff', pantryStaffSchema);
