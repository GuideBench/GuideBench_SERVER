const favoriteDao = require('../dao/favoriteDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


exports.postBookmark = async (req) => {
  try {
    await favoriteDao.postBookmark(req) // fist parameter : db connection, second parameter : req method
  } catch (e) {
    console.log(e.message)
  }
}

exports.getBookmark = async (req) => {
  let favorite_event = []
  try {
    const result = await favoriteDao.getBookmark(req) // fist parameter : db connection, second parameter : req method
    console.log(result)
    if(result.favorite_event){
      for(const i in result.favorite_event){
       const event = await favoriteDao.getEventList(result.favorite_event[i].event_id)
       favorite_event[i].push(event)
      }
    }
  } catch (e) {
    console.log(e.message)
  }
}
