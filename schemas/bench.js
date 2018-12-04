const mongoose = require('mongoose')

const { Schema } = mongoose

const benchSchema = new Schema({
  bench_name: {
    type: String,
    required: true,
  },
  bench_latitude: {
    type: String,
    required: true,
  },
  bench_longitude: {
    type: String,
    required: true,
  },
  bench_address: {
    type: String,
    required: true,
  },
  benchinfo_where: {
    type: String,
    required: true,
  },
  benchinfo_wherename: {
    type: String,
    required: true,
  },
  benchinfo_whereaddress: {
    type: String,
    required: true,
  },
},
{
  versionKey : false
})

module.exports = mongoose.model('bench', benchSchema)