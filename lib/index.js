const nodemailer = require("nodemailer")

const sender = (host, port, user, pass, from, to, subject, html, callback) => {
	var transport = nodemailer.createTransport({
		host: host,
		port: port,
		auth: {
			user: user,
			pass: pass
		}
	})
	var mailOptions = {
		from: from,
		to: to,
		subject: subject,
		html: html
	}
	transport.sendMail(mailOptions, (error, info) => {
		if (error) {
			callback({
				data: error
			}, undefined)
		}
		callback(undefined, {
			data: info
		})
	})
}


module.exports = {sender}