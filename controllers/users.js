'use strict';

const models = require('../models');

module.exports = class {

  findAll(req, res) {
    models.user.findAll().then(users => {
      res.json(users);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  findOne(req, res) {
    models.user.findById(req.params.id).then(user => {
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  create(req, res) {
    models.user.create(req.body).then(user => {
      res.json(user);
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  delete(req, res) {
    models.user.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(500).send(err);
    });
  }
}