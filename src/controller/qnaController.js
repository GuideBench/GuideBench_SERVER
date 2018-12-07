const response = require('../lib/response')
const qna = require('../../schemas/qna')
/*
 서버가 클라이언트에게 응답(response)해줄려면 하나의 라우트마다 res.status(200).send({"message" : "Success", "data" : 보낼 데이터}) 와 같은
 긴 코드를 계속해서 처야되는데 이렇게 응답할 코드를 미리 만들어놓고 따로 빼서 모듈처럼 사용하면 실제 타이핑 수도 줄고 코드도 보기 좋고 깔끔하겠죠?!
 */
const qnaService = require('../service/qnaService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일


exports.question = async (req, res) => {
  try {
    const { title, content } = req.body
    if (!title || !content) {
      response.respondOnError('모두 입력해주세요.', res, 400)
    } 
  
    await qnaService.question(req) 
   
    response.respondJson2('질문이 성공적으로 등록되었습니다', res, 201) 
    
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.answer = async (req, res) => {
  try {
    const { content } = req.body
    if (!content) {
      response.respondOnError('모두 입력해주세요.', res, 400)
    } 
  
    await qnaService.answer(req) 
   
    response.respondJson2('답변이 성공적으로 등록되었습니다', res, 201) 
    
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.getqna = async (req, res) => {
  try {
    const result = await qnaService.getqna(req)
    response.respondJson('successfully get qna ', result, res, 200) // 첫번째 인자는 응답할 message, 두번째 인자는 res (응답 오브젝트에 대한 메소드), 세번째 인자는 status code
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
  
}
