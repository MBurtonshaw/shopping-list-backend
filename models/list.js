const Sequelize = require('sequelize');
const { Model } = require('sequelize');
//Model
module.exports = (sequelize) => {
class List extends Sequelize.Model {};
List.init({
    item: Sequelize.STRING,
    price: Sequelize.INTEGER,
    category: Sequelize.STRING,
    quantity: Sequelize.INTEGER
}, { sequelize });
    return List;
}