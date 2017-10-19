'use strict';

module.exports = {

  development: {
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DBNAME || 'node_dev',
    host: process.env.MYSQL_URL || 'localhost',
    dialect: process.env.MYSQL_DIALECT || 'mysql'
  },

  test: {
    username: 'root',
    password: null,
    database: 'node_test',
    host: 'localhost',
    dialect: 'mysql'
  },

  production: {
    username: 'root',
    password: null,
    database: 'node_production',
    host: 'localhost',
    dialect: 'mysql'
  }
}