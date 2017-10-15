'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const models = require('./models');
const usersRoutes = require('./routes/users');

let port = process.env.NODE_PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// Set static file directory
app.use(express.static('./public'));

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