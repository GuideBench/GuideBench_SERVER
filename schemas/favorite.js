const mongoose = require('mongoose')
//이벤트랑 맛집또는 시장 

const { Schema } = mongoose

const favoriteSchema = new Schema({
  favorite_event: [{
    event_title: {
      type: String,
      required: true,
    },
    event_content: {
      type: String,
      required: true,
    }
  }]
})
module.exports = mongoose.model('favorite', favoriteSchema)