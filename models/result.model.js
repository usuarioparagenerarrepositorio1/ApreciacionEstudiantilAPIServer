const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResultSchema = new Schema({
  result: {
    type: Array
  },
  quantity: Number

})

module.exports = mongoose.model('Result', ResultSchema, 'result')