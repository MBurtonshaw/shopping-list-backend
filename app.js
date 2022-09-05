const express = require('express');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    'dialect': 'sqlite',
    'storage': 'shopping-list.db'
});

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const { asyncHandler } = require('./middleware/asyncHandler');

const Item = sequelize.define("Item", {
  name: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.STRING,
  },
  is_grocery: {
    type: Sequelize.BOOLEAN,
  },
  is_pet: {
    type: Sequelize.BOOLEAN,
  },
  is_hardware: {
    type: Sequelize.BOOLEAN,
  }
});

app.route('/grocery-store')
    .get( asyncHandler( async(req, res, next) => {
      try {
      let list = await Item.findAll();
      res.status(200).json({list});
      } catch(err) {
        res.status(500);
        console.log(err);
      }
    }));

app.route('/hardware-store')
    .get( asyncHandler( async(req, res, next) => {
      try {
      let list = await Item.findAll();
      res.status(200).json({list});
      } catch(err) {
        res.status(500);
        console.log(err);
      }
    }));

app.route('/pet-store')
    .get( asyncHandler( async(req, res, next) => {
      try {
      let list = await Item.findAll();
      res.status(200).json({list});
      } catch(err) {
        res.status(500);
        console.log(err);
      }
    }));

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
  try{
  //testing db connection & force-syncing
  await sequelize.authenticate();
  console.log('Step 1: complete. Connection established.');
  await sequelize.sync({force: true});
  await Item.create({
    "name": "cereal",
    "quantity": 2,
    "price": 2.99,
    "is_grocery": true,
    "is_pet": true,
    "is_hardware": true
  });
  console.log('Step 2: complete. Database is synced.');
  } catch(error) {
      console.log('Error connecting to database');
  }
})();