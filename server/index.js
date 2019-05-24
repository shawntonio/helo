require('dotenv').config()
const express	= require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

const Controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}))

massive(CONNECTION_STRING).then(db => {
	app.set('db', db)
	app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))
})

app.post('/auth', Controller.register)