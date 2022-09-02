const express = require('express');
const { List } = require('./models');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    'dialect': 'sqlite',
    'storage': 'shopping-list.db'
});

console.log(List);

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const { asyncHandler } = require('./middleware/asyncHandler');

app.route('/')
    .get( asyncHandler( async(req, res, next) => {
      try {
      let list = await List.findAll();
      res.status(200).json({list});
      } catch(err) {
        res.status(500);
        console.log(err);
      }
    }))
    .post((req, res, next) => {
        ''
    })
    .put((req, res, next) => {
        ''
    });

app.get('/api/list', asyncHandler( async(req, res) => {
    
}));

  // send 404 if no other route matched
app.use((req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
    });
  });
  
  // setup a global error handler
  app.use((err, req, res, next) => {
    if (enableGlobalErrorLogging) {
      console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
    }
  
    res.status(err.status || 500).json({
      message: err.message,
      error: {},
    });
  });
  
  // set our port
  app.set('port', process.env.PORT || 5000);
  
  // start listening on our port
  const server = app.listen(app.get('port'), () => {
    console.log(`Express server is listening on port ${server.address().port}`);
  });


//IIFE

(async () => {
    await sequelize.sync({ force: true });
    try {
        const list_item = await List.create({
            item: 'Toothpaste',
            price: 2.99,
            category: 'Bathroom',
            quantity: 1
        });
        console.log(list_item.toJSON());
    } catch(err) {
        console.error('Error: ', err);
    }
})();