const response = require('../lib/response')
const event = require('../../schemas/bench')

const benchService = require('../service/benchService') 

exports.bench = async (req, res) => {
  try {
    const result = await benchService.bench(req) // 위에 선언한 userService 파일의 signup 함수의 리턴값이 올때까지 기다림
    if (result.message === '이미 존재하는 벤치입니다') {
      response.respondJson2('Already Exists', res, 403)
    } else {
      response.respondJson2('성공적으로 등록되었습니다.', res, 201) // 첫번째 인자는 응답할 message, 두번째 인자는 res (응답 오브젝트에 대한 메소드), 세번째 인자는 status code
    }
  } catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
}


exports.benchinfo = async (req, res) => {
  try {
    const result =  await event.find({})  
    response.respondJson(result, res, 201)
  }  
   catch (e) {
    response.respondOnError('Internal Server error', res, 500)
  }
  
}