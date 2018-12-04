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
  bench_info :[{
    benchinfo_category: {
      type: String,
      default : null
    },
    benchinfo_name: {
      type: String,
      default : null
    },
    benchinfo_address: {
      type: String,
      default : null
    },
  }],
  
},
{
  versionKey : false
})

module.exports = mongoose.model('bench', benchSchema)