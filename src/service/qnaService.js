const qnaDao = require('../dao/qnaDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일



exports.question = async (req) => {
  try {

     await qnaDao.question(req) 

  } catch (e) {
    console.log(e.message)
  }

}

exports.answer = async (req) => {
  let result
  try {
    result = await qnaDao.answer(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}