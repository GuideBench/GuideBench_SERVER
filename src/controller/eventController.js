const response = require('../lib/response')
const event = require('../../schemas/event')

/*
 서버가 클라이언트에게 응답(response)해줄려면 하나의 라우트마다 res.status(200).send({"message" : "Success", "data" : 보낼 데이터}) 와 같은
 긴 코드를 계속해서 처야되는데 이렇게 응답할 코드를 미리 만들어놓고 따로 빼서 모듈처럼 사용하면 실제 타이핑 수도 줄고 코드도 보기 좋고 깔끔하겠죠?!
 */
const eventService = require('../service/eventService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일


// 회원가입 라우팅을 타고 들어오는 곳, 현재 여기까지 루트 정리
// 1. 클라이언트에서 해당 url로 request가 들어옴
// 2. src/routes/index.js파일로 들어감. 여기서 routes/user.js로 분기처림
// 3. routes/user.js에서 controller/userController.js의 signUp 함수 호출
exports.event = async (req, res) => {
  try {
    const result = await eventService.event(req) // 위에 선언한 userService 파일의 signup 함수의 리턴값이 올때까지 기다림
    if (result.message === '이미 존재하는 이벤트입니다') {
      response.respondJson2('Already Exists', res, 403)
    } else {
      response.respondJson2('성공적으로 등록되었습니다.', res, 201) // 첫번째 인자는 응답할 message, 두번째 인자는 res (응답 오브젝트에 대한 메소드), 세번째 인자는 status code
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}


exports.getevent = async (req, res) => {
  try {
    const result = await event.find({}) // 위에 선언한 userService 파일의 signup 함수의 리턴값이 올때까지 기다림
    response.respondJson2(result, res, 201) // 첫번째 인자는 응답할 message, 두번째 인자는 res (응답 오브젝트에 대한 메소드), 세번째 인자는 status code
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
  
}
