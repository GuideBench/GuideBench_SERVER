const benchDao = require('../dao/benchDao') // user 관련된 데이터베이스 쿼리 부분을 담당하는 파일


exports.postBench = async (req) => {
  try {

    await benchDao.postBench(req) 

  } catch (e) {
    console.log(e.message)
  }

}


exports.postInfo = async (req) => {
  
  try {
  
    await benchDao.postInfo(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
   
  } catch (e) {
    console.log(e.message)
  }
}

exports.getInfo = async (req) => {
  let tmp
  let result
  try {
    tmp = await benchDao.getInfo(req) // fist parameter : db connection, second parameter : req method
    // result => 몽고디비에서 찾은 데이터 값을 담은 변수
    console.log(tmp)
    result = tmp.bench_info
  } catch (e) {
    console.log(e.message)
  }
  return result // controller 폴더의 userController.js signIn 함수로 결과값 return!
}

exports.getAllinfo = async (req) => {
  //let result = [] // 원본
let resultㄴ

  try {

   // result = await result.find({bench_info : benchinfo_category, benchinfo_name, benchinfo_address})        
   let tmp = await benchDao.getAllinfo(req)
   
    //  result = await tmp.find( { bench_info : "학"} )
    
    // result = await tmp.bench_info.benchinfo_name


//result = await benchDao.getAllinfo(req) // 싹다 가져오는거


  //  const tmp = await benchDao.getAllinfo(req) 
  //   console.log('123123', tmp )  
  //   for(const i in tmp){
  //     for(const j in tmp[i].bench_info){
  //       console.log(tmp[i].bench_info[j])
  //     }
  //   }
    // for(const i in tmp){
    //   for(const j in tmp[i].bench_info){
    //     console.log(tmp[i].bench_info)
    //     result.push(tmp[i].bench_info[j])
    //   }
    // }
  } catch (e) {
    console.log(e.message)
  }
  return result 
}