const express = require('express')
const routes = express.Router()
const User = require('./models/user')

routes.get('*', (req, res) => {
  const [_, page] = req.path.split('/')
  const view = page.length == 0 ? 'welcome' : page
  const todos = [{
    id: 1,
    description: 'test'
  }]
  res.render('index', { view: view,  todos: todos })
})

routes.post('/register/todo', (req, res) => {

})

routes.post('/register/user', async (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  })
  try {
    await user.save
    res.redirect('/login')
  } catch (error) {
    
  }
})

module.exports = routes