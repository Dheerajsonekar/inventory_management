const db = require('../config/database');
const { DataTypes} = require('sequelize');

const inventoryTable = db.define('inventoryTable', {
     
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = inventoryTable;