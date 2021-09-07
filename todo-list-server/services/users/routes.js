const express = require('express')
const { createUser, getUser, updateUser } = require('./UserController')
const { authenticate } = require('../auth/AuthController')
const { verifyToken } = require('../auth/AuthMiddleware')
const routes = express.Router()

routes.post('/users/', createUser)
routes.post('/auth', authenticate)
routes.get('/users/:id', verifyToken, getUser)
routes.put('/users/todo-list/:id', verifyToken, updateUser)

module.exports = routes
