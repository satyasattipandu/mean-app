const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  // TODO: Create models here...
});

module.exports = mongoose.model('Patients', PatientSchema);