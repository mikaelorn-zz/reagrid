var express = require('express');
var router = express.Router();
var grid = require('../data');
var MongoClient = require('mongodb').MongoClient;

let db = {}

MongoClient.connect('mongodb://reagrid_dbadmin:Salci8gQm@reagrid-bedug.mongodb.net/reagrid_db', function(err, db) {
  debugger;
  if(!err) {
    db = db;
  }
  // db.close();
});

/* GET grids listing. */
router.get('/', function(req, res, next) {
  res.send(grid.grids);
});

/*GET grid*/
router.get('/:id', lookupGrid ,function(req, res, next) {
  res.json(req.grid);
})

function lookupGrid(req, res, next) {
  let grids = grid.grids;
  req.grid = grids[0]; //TODO actual query
  next();
}

module.exports = router;
