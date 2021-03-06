const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  // TODO: Create models here...
  firstName: { type: String, required: true, minlength: 3, maxlength: 24 },
  lastName: { type: String, required: true, minlength: 3, maxlength: 24 },
  phone: { type: String, pattern: "^([0-9]{3}-[0-9]{3}-[0-9]{4}$", required: true, max: 10 },
  address: { type: String, required: true, max: 1000 },
  consultedBy: { type: String, required: true, minlength: 3, maxlength: 24 },
  age: { type: Number, required: true, min: 0, max: 100 },
  gender: { type: String, required: true },
  consulted: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  complaints: { type: String, maxlength: 1000 },
  Results: { type: String, maxlength: 1000 , default: 'success'},
  Prescriptions: { type: String, maxlength: 1000 }
});

module.exports = mongoose.model('Patients', PatientSchema);
