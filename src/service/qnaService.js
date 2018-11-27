const qnaDao = require('../dao/qnaDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일



exports.question = async (req) => {
  try {

     await qnaDao.question(req) 

  } catch (e) {
    console.log(e.message)
  }

}

exports.answer = async (req) => {
  
  try {
     await qnaDao.answer(req) 
  } catch (e) {
    console.log(e.message)
  }
  
}