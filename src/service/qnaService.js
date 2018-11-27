const qnaDao = require('../dao/qnaDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


// 회원가입
exports.question = async (req) => {
  let result
  try {
    result = await qnaDao.question(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}

