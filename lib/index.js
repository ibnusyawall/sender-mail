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

/*sender('smtp.mailtrap.io', 2525, 'f0c040d7d26636', 'c3b77f008cc6e1', 'b639812a8b-23b318@inbox.mailtrap.io', 'ibnusyawal24@gmail.com', 'test mailer sender', '<h1>Attachments</h1>', (error, {data} = {}) => {
	if (error) console.log(data)
		console.log(data)
})*/

module.exports = {sender}