const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  // TODO: Create models here...
  firstname: { type: String, required: true, min: 3, max: 24 },
  lastname: { type: String, required: true, min: 3, max: 24 },
  phone: { type: String, pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$", required: true, max: 10 },
  address: { type: String, required: true, max: 1000 },
  consultedBy: { type: String, required: true, min: 3, max: 24 },
  age: { type: Number, required: true, min: 0, max: 24 },
  gender: { type: String, required: true },
  consulted: { type: Boolean },
  created_at: { type: Date, default: Date.now },
  complains: { type: String, max: 1000 },
  Results: { type: String, max: 1000 },
  Prescriptions: { type: String, max: 1000 }
});

module.exports = mongoose.model('Patients', PatientSchema);
