var express = require('express');
var router = express.Router();

/* alert user they are cool. */
router.get('/', function(req, res, next) {
  res.send('YAYYY');
});

module.exports = router;
