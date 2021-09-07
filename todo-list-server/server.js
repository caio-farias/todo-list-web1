const express = require('express')
require('./db')
const userRoutes = require('./services/users/routes')
const corsMiddleware = require('./cors/index')
const app = express()
const PORT = 8000

app.use(corsMiddleware)
app.options('*', corsMiddleware)
app.use(express.json())
app.use((req, res, next) =>{
  console.log(`>> ${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
})

app.use(userRoutes)
app.listen(process.env.PORT || PORT)
