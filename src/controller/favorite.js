const response = require('../lib/response')
const favorite = require('../../schemas/favorite')

const favoriteService = require('../service/favoriteService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일


exports.get = async (req, res) => {
  try {
    const { user_id } = req.headers
    const { title, content } = req.body

    if (!title || !content) {
      response.respondOnError('모두 입력해주세요.', res, 400)
    } else if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    }
  
    await qnaService.question(req) 
   
    response.respondJson2('질문이 성공적으로 등록되었습니다', res, 201) 
    
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}