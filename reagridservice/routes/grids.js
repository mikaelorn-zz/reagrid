var express = require('express');
var router = express.Router();
var grid = require('../data');
//var Connection = require('../connection');
var Mongoose = require('mongoose');

var gridSchema = new Mongoose.Schema({
  _id: Mongoose.Schema.Types.ObjectId,
  grids: [
    {
      id: Number,
      tiles: [
        {
          id: Number,
          text: String,
          url: String
        }
      ]
    }
  ]
});

/* GET grids listing. */
router.get('/', function(req, res, next) {
  console.log("/grids/ called!");

  let gridModel = Mongoose.model("gridModel", gridSchema);

  let result = gridModel.find({}, function(error, grids){
    console.log(grids);
  });
});

/*GET grid*/
router.get('/:id', lookupGrid ,function(req, res, next) {

  let Grid = Mongoose.model('Grid', gridSchema);

  let newGrid = new Grid {
    _id: new Mongoose.Types.ObjectId(),
    grids: [
      {
        id: 1,
        tiles: [
          {
            id: 1,
            text: "hej",
            url: "www.google.com"
          },
          {
            id: 2,
            text: "svej",
            url: "www.google.com"
          },
          {
            id: 3,
            text: "blej",
            url: "www.google.com"
          }
        ]
      }
    ]
  };

  newGrid.save(function(error) {

  });

});

function lookupGrid(req, res, next) {
  let grids = grid.grids;
  req.grid = grids[0]; //TODO actual query
  next();
}

module.exports = router;

    // dbConnection.collection('reagrid_collection', function(error, collection) {
    //   if(error) {
    //     console.log("collection checkup returned " + JSON.stringify(error));
    //   }
    //   else {
    //     console.log("attempting to access collection");
    //     collection.find().toArray(function(error, result) {
    //       console.log("found collection: " + JSON.stringify(result));
    //       res.send(result);
    //     });
      // }
  //   });
  // });
      // res.json(req.grid);
      // res.send(error);
