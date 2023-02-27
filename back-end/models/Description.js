const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Description = db.define('Description', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Description;