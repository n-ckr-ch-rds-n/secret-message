var express = require('express');
var router = express.Router();
var datamodule = require('../public/javascripts/getmessage.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  const message = datamodule.getMessage();
  res.render('message', { message: message });
});

module.exports = router;
