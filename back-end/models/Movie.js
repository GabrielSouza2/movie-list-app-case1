const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Movie = db.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  classificationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Classifications',
      key: 'id'
    }
  }
});

module.exports = Movie;