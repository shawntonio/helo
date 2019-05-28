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

	async login(req, res) {
		const db = req.app.get('db');
		const { username, password } = req.body;

		const userFound = await db.getUser({username})
		const user = userFound[0]

		if (!user) res.sendStatus(500)

		if (user.password = password) {
			req.session.id = user.id
			res.status(200).send({username, id: user.id, profile_pic: user.profile_pic})
		} else {
			res.sendStatus(500)
		}
	}

}