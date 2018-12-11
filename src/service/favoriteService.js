const favoriteDao = require('../dao/favoriteDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


exports.postBookmark = async (req) => {
  try {
    await favoriteDao.postBookmark(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
}

exports.getEventBookmark = async (req) => {
  let result
  try {
    result = await favoriteDao.getEventBookmark(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
  return result
}
