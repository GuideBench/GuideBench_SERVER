const response = require('../lib/response')
const favoriteService = require('../service/favoriteService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일


exports.postBookmark = async (req, res) => {
  try {
    const { user_id } = req.headers
    // const { event_id, benchinfo_id } = req.body

    if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    } else {
      await favoriteService.postBookmark(req)
      response.respondJson2('즐겨찾기가 성공적으로 등록되었습니다!', res, 201)
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.getBookmark = async (req, res) => {
  try {
    const { user_id } = req.headers

    if (!user_id) {
      response.respondOnError('헤더에 user_id를 입력해주세요.', res, 400)
    } else {
      const result = await favoriteService.postBookmark(req)
      response.respondJson('즐겨찾기 리스트 성공적!', result, res, 201)
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}
