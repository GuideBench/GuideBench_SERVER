
const bench = require('../../schemas/bench')


exports.postBench = async (req) => {
  const { name, latitude, longitude, address } = req.body
// 로그인한 사람 고유값인 _id를 클라한테 req.headers._id로 요청해서 그사람의 이름값을 받아와서 이름칸에 넣음

await bench.create({
  bench_name: name,
  bench_latitude: latitude,
  bench_longitude: longitude,
  bench_address : address
})
console.log('success')
}
// Q&A 답변달기
exports.answer = async (req) => {
  const { content } = req.body
  const { _id } = req.params // question 의 유니크한 id 값

    await qna.update(
      { _id : _id},
      {
        $set : {
          answer_content : content
        }
      }
    )
    console.log('입력됨')
}

exports.getqna = async (req) => {
  // -> 예전 문법 
 const result = await qna.find({
   qna_title: title,//z컬렉션에 들어가있는 key값
   qna_content: content,
   qna_name: name,
   answer_content: content,
 })
 return result[0]
}
