'use strict';

const UsersController = require('../controllers/users');
const express = require('express');

const usersController = new UsersController;
const router = express.Router();

router.get('/', (req, res) => {
  usersController.findAll(req, res);
});

router.get('/:id', (req, res) => {
  usersController.findOne(req, res);
});

router.post('/', (req, res) => {
  usersController.create(req, res);
});

router.delete('/', (req, res) => {
  usersController.delete(req, res);
});

module.exports = router;