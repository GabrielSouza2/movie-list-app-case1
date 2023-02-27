const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Genre = db.define('Genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Genre;