const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Title = db.define('Title', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

module.exports = Title;