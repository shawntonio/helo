const bcrypt = require('bcryptjs');

module.exports = {
	register(req, res) {
		const db = req.app.get('db');
		const { username, password, profile_pic } = req.body;

		db.createUser({ username, password, profile_pic })
		.then(userId => {
			const id = userId[0].id
			req.session.id = id
			res.status(200).send({ username, id, profile_pic })
		}).catch(err => console.log(err))

	},

	login(req, res) {
		const db = req.app.get('db');
		const { username, password } = req.body;

		db.checkForUser({username})
	}

}