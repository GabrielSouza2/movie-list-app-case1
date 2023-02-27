const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class ReleaseDate extends Model {}

ReleaseDate.init({
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
}, {
  sequelize,
  modelName: 'ReleaseDate',
});

module.exports = ReleaseDate;