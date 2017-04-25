var express = require('express');
var router = express.Router();
var assert = require('assert');
const db = require('../collections');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find(
  function(err, data){
    res.render('index');
  });
});

module.exports = router;
