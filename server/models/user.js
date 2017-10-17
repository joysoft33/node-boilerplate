'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('user', {
    name: DataTypes.STRING
  });

  user.associate = (models) => {
  };

  return user;
};