'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const models = require('./server/models');
const usersRoutes = require('./server/routes/users');

// Our server listening port
let port = process.env.NODE_PORT || 3000;
// Create our express application
const app = express();

// Accept bodies url and json encoded
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
  
// Set static file directory
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/server/views'));

// Serve index file
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello world!',
    message: 'Good to see you'
  });
});

// Set API routes
app.use('/users', usersRoutes);

// Synchronize database with the previously declared models
models.sequelize.sync({
  alter: false
}).then((db) => {
  console.log('Database connected');
}).catch(err => {
  console.log('Error connecting database:', err);
});

// Start listening to external http requests
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});