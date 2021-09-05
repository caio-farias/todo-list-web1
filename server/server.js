const express = require('express')
require('./db/')
const routes = require('./routes')
const corsMiddleware = require('./cors/index')
const { urlencoded } = require('express')
const app = express()
const PORT = 8000

app.use(corsMiddleware)
app.options('*', corsMiddleware)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/assets'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use((req, res, next) =>{
  console.log(`>> ${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
})

app.use(routes)
app.listen(process.env.PORT || PORT)
