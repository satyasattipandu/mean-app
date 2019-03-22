const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const app = express();

// Map global promise - get rid of mongo warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://localhost/patients-api', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const Patients = require('./models/Patients');
const Login = require('./models/Login');

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

// User Login
app.post('/login', function (req, res) {
  if (req.body && req.body.username === '' && req.body.password === '') {
    res.statusCode = 400;
    res.json({ status: 'failure', message: 'User name and password should not be empty.' });
  } else {
    Login.find({ username: req.body.username }, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json(err);
      } else if (data.length > 0 && req.body.password === cryptr.decrypt(data[0].password)) {
        data[0].password = cryptr.decrypt(data[0].password);
        const token = jwt.sign(data[0].toJSON(), 'skillathon', { expiresIn: 60 * 5 });
        res.json({ token: token, userDetails: data[0] });
      } else {
        res.statusCode = 404;
        res.json({ status: 'failure', message: 'Invalid username and password' });
      } 
    })
  }
});

// POST singUp
app.post('/signup', (req, res) => {
  if (req.body && req.body.username === '' && req.body.password === '') {
    res.json({ status: 'failure', message: 'User name and password should not be empty.' });
  } else {
    req.body.password = cryptr.encrypt(req.body.password);
    Login.create(req.body, (err, data) => {
      if (err) {
        res.statusCode = 400;
        res.json(err);
      } else {
        data.password = cryptr.decrypt(data.password);
        res.json(data);
      }
    });
  }
});

// Get all patients Route
// TODO: Endpoint to Get all patients
app.get('/getAll', function (req, res) {
  if (req.query.page <= 0) {
    const response = { status: 'failure', message: "invalid page number, should start with 1" };
    return res.json(response);
  } else if (req.query.page !== undefined && req.query.page !== null && req.query.page >= 1 && req.query.limit !== undefined && req.query.limit !== null) {
    const startNum = parseInt(req.query.limit * (req.query.page - 1));
    const endNum = parseInt(req.query.limit);
    Patients.find({}, function (err, data) {
      if (err) {
        res.statusCode = 400;
        res.json(err);
      } else {
        res.json(data);
      }
    }).skip(startNum).limit(endNum)
  } else {
    Patients.find({}, function (err, data) {
      if (err) {
        res.statusCode = 400;
        res.json({ status: 'failure', message: 'Something went wrong.' });
      } else {
        res.json(data);
      }
    });
  }
});
// Create a patient
// TODO: Endpoint to create all patients
app.post('/add', function (req, res) {
  const postData = req.body !== undefined && req.body !== null ? req.body : {};
  Patients.create(postData, function (err, data) {
    if (err) {
      res.statusCode = 400;
      res.json(err);
    } else {
      res.json({ status: 'success', message: 'Successfully created new patient.' });
    }
  });
});
// Get a patient by id
// TODO: Endpoint to get patient by id
app.get('/:id', function (req, res) {
  const id = req.params.id !== undefined && req.params.id !== null ? req.params.id : '';
  Patients.findOne({ _id: id }, function (err, data) {
    if (err) {
      res.statusCode = 400;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
// Delete a patient
// TODO: Endpoint to delete a patient
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id !== undefined && req.params.id !== null ? req.params.id : '';
  Patients.deleteOne({ _id: id }, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
// Update a patient
// TODO: Endpoint to update a patient
app.put('/update/:id', function (req, res) {
  const id = req.params.id !== undefined && req.params.id !== null ? req.params.id : '';
  const data = req.body !== undefined && req.body !== null ? req.body : {};
  Patients.update({ _id: id }, data, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

app.get('/', (req, res) =>{
  res.send('Patients application is running.....!')
});

// Listen on port
app.listen(PORT, function() {
  console.log('[SERVER]: Running on port ' + PORT);
});