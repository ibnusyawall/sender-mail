var express = require('express');
var router = express.Router();
var {sender} = require('./../lib/index')


router.get('/', (req, res, next) => {
	res.render('index', { title: 'SENDER MAIL', data: ''});
})

router.post('/', (req, res, next) => {
	const data = {
		host: req.body.host,
		port: req.body.port,
		user: req.body.user,
		pass: req.body.pass,
		options: {
			from: req.body.from,
			to: req.body.to,
			subject: req.body.subject,
			__body: req.body.body
		}
	}
	sender(data.host, data.port, data.user, data.pass, data.options.from, data.options.to, data.options.subject, data.options.__body, (errror, {
		data
	} = {}) => {
		res.render('index', { title: 'Sender Mail', data:  JSON.stringify(data) });
	})
});

module.exports = router;
