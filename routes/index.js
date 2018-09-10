var express = require('express');
var router = express.Router();
var quiz = require('../public/javascripts/quiz.js');
var Encryption = require('../public/javascripts/encryption.js');

const encryption = new Encryption();

router.get('/', function(req, res, next) {
	res.redirect('/message');
});

router.get('/message', function(req, res, next) {
	const question = quiz.getQuestion();
	const encryptedmessage = encryption.encrypt();
	res.render('message', { question: question,
		encryptedmessage: encryptedmessage });
});

router.post('/decrypt', function(req, res, next) {
	const encryptedmessage = encryption.encrypt();
	const key = req.body.key;
	const decryptedmessage = encryption.decrypt(encryptedmessage, key);
	if (decryptedmessage.length > 0) {
		res.render('decrypt', { decryptedmessage: decryptedmessage });
	}
	res.render('fail');
});

router.get('*', function(req, res) {
	res.redirect('/');
});

module.exports = router;
