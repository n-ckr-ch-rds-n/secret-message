var express = require('express');
var router = express.Router();
var datamodule = require('../public/javascripts/getmessage.js');
var Encryption = require('../public/javascripts/encryption.js');

const encryption = new Encryption();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/message', function(req, res, next) {
  const message = datamodule.getMessage();
  const encryptedmessage = encryption.encrypt();
  res.render('message', { message: message,
    encryptedmessage: encryptedmessage });
});

router.post('/decrypt', function(req, res, next) {
  const encryptedmessage = encryption.encrypt();
  const key = req.body.key;
  const decryptedmessage = encryption.decrypt(encryptedmessage, key)
  if (decryptedmessage.length > 0) {
    res.render('decrypt', { decryptedmessage: decryptedmessage });
  }
  res.send('wrong answer')
});

module.exports = router;
