const response = require('../lib/response')
const bench = require('../../schemas/bench')

const benchService = require('../service/benchService') // user에 관련된 api의 비즈니스 로직을 처리할 js 파일



exports.postBench = async (req, res) => {
  try {
    const { name, latitude, longitude, address } = req.body
    if(!name || !latitude || !longitude || !address  ) {
      response.respondOnError('모두 입력해주세요.', res, 400)
    } 
  
      await benchService.postBench(req) 
   
      response.respondJson2('벤치가 성공적으로 등록되었습니다', res, 201) 
    
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

exports.postInfo = async (req, res) => {
  try {
    const { benchinfo_category, benchinfo_name, benchinfo_address } = req.body
    if(!benchinfo_category || !benchinfo_name || !benchinfo_address) {
      response.respondOnError('모두 입력해주세요.', res, 400)
    } 
  
      await benchService.postInfo(req) 
  
      response.respondJson2('벤치의 정보가 성공적으로 등록되었습니다', res, 201) 
    
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}

// exports.ben = async (req, res) => {
//   try {
//     const result =  await qna.find({})  // 위에 선언한 userService 파일의 signup 함수의 리턴값이 올때까지 기다림
//     response.respondJson2(result, res, 201) // 첫번째 인자는 응답할 message, 두번째 인자는 res (응답 오브젝트에 대한 메소드), 세번째 인자는 status code
//   }  
//    catch (e) {
//     response.respondOnError('Internal Server error', res, 500)
//   }
  
// }
