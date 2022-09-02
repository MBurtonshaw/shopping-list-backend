const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    'dialect': 'sqlite',
    'storage': 'shopping-list.db'
});

//Model
class List extends Sequelize.Model {}
List.init({
    item: Sequelize.STRING,
    price: Sequelize.INTEGER,
    category: Sequelize.STRING
}, { sequelize });

//IIFE

(async () => {
    await sequelize.sync({ force: true });
    try {
        const list_item = await List.create({
            item: 'Toothpaste',
            price: 2.99,
            category: 'Bathroom'
        });
        console.log(list_item.toJSON());
    } catch(err) {
        console.error('Error: ', err);
    }
})();