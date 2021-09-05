const express = require('express')
const { getUserByEmail } = require('./UserController')
const routes = express.Router()

routes.get('/users/:email', getUserByEmail)

module.exports = routes
