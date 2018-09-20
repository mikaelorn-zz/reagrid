var express = require('express');
var router = express.Router();

/* GET grids listing. */
router.get('/', function(req, res, next) {
  res.send('grids');
});

module.exports = router;
