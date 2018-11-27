const mongoose = require('mongoose')

const { Schema } = mongoose

const eventSchema = new Schema({
  event_title: {
    type: String,
    required: true,
  },
  event_content: {
    type: String,
    required: true,
  }
},{
  versionKey : false
})

// 몽구스는 model 메서드의 첫 번째 인자로 컬렉션 이름을 만듭니다.
// 첫 번째 인자가 User이면 첫 글자를 소문자로 만든 뒤 복수형으로 바꿔서 users 컬렉션을 생성합니다. 강제 개명이 싫다면 세번째인자로 컬렉션이름을 설정하면됩니다.
module.exports = mongoose.model('event', eventSchema)