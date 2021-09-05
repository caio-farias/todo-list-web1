const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/web1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})