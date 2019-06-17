const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  password: String,
  result: Array,
  status: Boolean
})

module.exports = mongoose.model('User', UserSchema, 'user')