const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class Classification extends Model {}

Classification.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'classification'
});

module.exports = Classification;