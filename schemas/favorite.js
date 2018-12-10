const mongoose = require('mongoose')
// 이벤트랑 맛집또는 시장 

const { Schema } = mongoose

const favoriteSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  favorite_event: [{
    event_id: {
      type: String,
      default: null,
    },
  }],
  favorite_info: [{
    benchinfo_id: {
      type: String,
      default: null,
    },
  }],
},
{
  versionKey: false,
})
module.exports = mongoose.model('favorite', favoriteSchema)
