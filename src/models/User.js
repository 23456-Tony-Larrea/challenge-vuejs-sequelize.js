const {DataTypes} = require('sequelize');
const sequelize = require('../models/db');
const User = sequelize.define('User', {
    firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    },
    website:{
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, 
{
timestamps: false,
tableName: 'Users'
});
module.exports = User;