// models/DeliveryTask.js

const mongoose = require("mongoose");

const deliveryTaskSchema = new mongoose.Schema(
  {
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPersonnel",
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    dietChart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DietChart",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Delivered"],
      default: "Pending",
    },
    deliveryTime: {
      type: Date,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeliveryTask", deliveryTaskSchema);
