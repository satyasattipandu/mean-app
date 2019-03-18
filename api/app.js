const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Map global promise - get rid of mongo warning
mongoose.Promise = global.Promise;

// Connect to mongoose

// TODO: Connect to MongoDB database here...

const Patients = require('./models/Patients');

const PORT = process.env.PORT || 5000;

// CORS support
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
      return res.status(200).json({});
  }
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all patients Route
// TODO: Endpoint to Get all patients

// Create a patient
// TODO: Endpoint to create all patients

// Get a patient by id
// TODO: Endpoint to get patient by id

// Delete a patient
// TODO: Endpoint to delete a patient

// Update a patient
// TODO: Endpoint to update a patient

// Listen on port
app.listen(PORT, function() {
  console.log('[SERVER]: Running on port ' + PORT);
});