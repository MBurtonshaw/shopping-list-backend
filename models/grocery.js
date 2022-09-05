const { Model } = require('sequelize');

  module.exports = (sequelize, DataTypes) => {
    class Grocery extends Model {};
    Grocery.init({
        item: {
            type: DataTypes.STRING
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER
        },
        category: {
            type: DataTypes.STRING
        },
    },
    { 
        modelName: 'Grocery',
        sequelize
    });

    return Grocery;
};