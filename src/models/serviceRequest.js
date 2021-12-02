const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number
  },
  requestType: {
    type: String,
    enum: ["Consultancy", "Repair", "Diagnosis", "Replacement", "Assembly"]
  },
  requestedAt: {
    type: Date,
    default: Date.now()
  },
  requestStatus: {
    type: String,
    enum: ["Pending", "In Process", "Scheduled", "Completed"],
    default: "Pending"
  }
});

const modelName = process.env.MODEL_NAME;
module.exports = mongoose.model(modelName, serviceRequestSchema);