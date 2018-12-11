
const bench = require('../../schemas/bench')


exports.postBench = async (req) => {
  const {
    name, latitude, longitude, address, 
  } = req.body
  // 로그인한 사람 고유값인 _id를 클라한테 req.headers._id로 요청해서 그사람의 이름값을 받아와서 이름칸에 넣음

  await bench.create({
    bench_name: name,
    bench_latitude: latitude,
    bench_longitude: longitude,
    bench_address: address,
  })
  console.log('success')
}
// Q&A 답변달기
exports.postInfo = async (req) => {
  const { benchinfo_category, benchinfo_name, benchinfo_address } = req.body
  const { bench_id } = req.params // question 의 유니크한 id 값
  await bench.update(
    { _id: bench_id },
    {
      $addToSet: {
        bench_info: {
          benchinfo_category,
          benchinfo_name,
          benchinfo_address,
        },
      }, 
    },
  )
  console.log('success')
}

exports.getInfo = async (req) => {
  const { bench_id } = req.params
  
  const result = await bench.find(
    { _id: bench_id },
  )
  return result[0]
}

exports.getAllinfo = async (req) => {
  // const result = await bench.find({})    기존
  
  
  const result = await bench.aggregate([
    { "$project": {  
    // "bench_name": 1,  // 하면 bench_name도 다 같이 뜸
      "bench_info": { 
       "$map": { 
        "input": "$bench_info", 
        "as": "m", 
        "in": { 
         "benchinfo_category": "$$m.benchinfo_category", 
         "benchinfo_name": "$$m.benchinfo_name", 
         "benchinfo_address": "$$m.benchinfo_address"
        } 
       } 
      } 
     }} 
  ])
  console.log("dao 결과", result)     
  return result
}

// 맛집 가진 벤치를 전부 출력
// const result = await bench.find({
//   "bench_info" : { $elemMatch : {"benchinfo_category" : "맛집" }}
// })
// console.log("dao 결과", result)    

