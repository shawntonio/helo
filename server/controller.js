const bcrypt = require('bcryptjs');

module.exports = {
	register(req, res) {
		const db = req.app.get('db');
		const { username, password, profile_pic } = req.body;

		db.createUser({ username, password, profile_pic })
		.then(userId => {
			const id = userId[0].id
			req.session.user = {id, username}
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
			req.session.user = {id: user.id, username}
			console.log(req.session.user)
			res.status(200).send({username, id: user.id, profile_pic: user.profile_pic})
		} else {
			res.sendStatus(500)
		}
	},

	addPost(req, res) {
		const db = req.app.get('db')
		const {title, content} = req.body

		db.addPost({title, content, author_id: req.session.user.id})
		.then(id => res.status(200).send(id[0]))
		.catch(console.log)
	},

	getPostById(req, res) {
		const db = req.app.get('db')
		const {id} = req.query

		db.getPostById({id}).then(post => {
			res.status(200).send(post)
		}).catch(console.log)
	},

	getMyPosts(req, res) {
		const db = req.app.get('db')
		const {id} = req.session.user

		db.getMyPosts({id}).then(posts => res.status(200).send(posts))
		.catch(console.log)
	},

	getOthersPosts(req, res) {
		const db = req.app.get('db')
		const {id} = req.session.user

		db.getOthersPosts({id}).then(posts => res.status(200).send(posts))
		.catch(console.log)
	}

}