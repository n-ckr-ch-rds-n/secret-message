var express = require('express');
var router = express.Router();
var datamodule = require('../public/javascripts/getmessage.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  const message = datamodule.getMessage();
  res.render('message', { message: message });
});

router.post('/decrypt', function(req, res, next) {
  const message = datamodule.getMessage();
  let key = req.body.key;
  if (key === 'bar1') {
    res.render('decrypt', { key: key, message: message });
  }
  res.send('wrong answer')
});

module.exports = router;
