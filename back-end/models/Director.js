const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Director = db.define('Director', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Director;