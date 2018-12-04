const event = require('../../schemas/event')

// 이벤트
exports.event = async (req) => {
  // const id = req.body.id // req.body는 클라이언트(사용자)가 입력한 데이터를 받아오는 곳 console.log(req.body)찍어보면 클라이언트쪽에서 어떤 데이터를 보냈는지 콘솔로 확인할 수 있어요!
  // const pw = req.body.pw // -> 예전 문법
  // es6 문법
  const { title, content } = req.body
  let data
  // const { id, pw } = req.body -> 실제 타이핑 수를 줄여주는 문법으로 req.body 하위에 있는 id, pw를 가져오는 동시에 id,pw를 바로 변수명으로 사용가능
  // // async await은 말로 설명해드릴게욤
  const duplicated = await event.find({
    event_content: content,
  })
  if (!duplicated[0]) {
    await event.create({
      event_title: title,
      event_content: content
    })
    data = {
      message: '등록성공',
    }

  } else {
    data = {
      message: '이미 존재하는 이벤트입니다',
    }
    return data
  }
 return data
}

//  exports.getqna = async (req) => {
//   const result = await qna.find({})
//   return result[0]
//  }
exports.getevent = async (req) => {
   // -> 예전 문법 
  const result = await event.find({
    event_title: title,//z컬렉션에 들어가있는 key값
    event_content: content,
    
  })
  return result[0]
}
