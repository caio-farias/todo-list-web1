const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: false
  },
  todo_list:{
    type: Array,
    required: false
  }
})

module.exports = model('User', UserSchema)