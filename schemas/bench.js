const mongoose = require('mongoose')

const { Schema } = mongoose

const benchSchema = new Schema({
  bench_name: {
    type: String,
    required: true,
  },
  bench_location: {
    type: String,
    required: true,
  },
  bench_food: {
    type: String,
    required: true,
  },
  bench_market: {
    type: String,
    required: true,
  },
},
{
  versionKey : false
})

module.exports = mongoose.model('bench', benchSchema)