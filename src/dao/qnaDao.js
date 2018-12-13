const qna = require('../../schemas/qna')
const user = require('../../schemas/user')

// Q&A 질문하기
exports.question = async (req) => {
  const { title, content } = req.body
  const user_id = req.headers.user_id
  // 로그인한 사람 고유값인 _id를 클라한테 req.headers._id로 요청해서 그사람의 이름값을 받아와서 이름칸에 넣음
  const user_data = await user.find({
    _id: user_id, // _id = req.headers_id
  })
  console.log()
  const name = user_data[0].user_name

  await qna.create({
    question_title: title, // get할때는 왼쪽 post할때는 오른쪽 key : value
    question_content: content,
    question_name: name,
  })
  console.log('입력됨')
}

// Q&A 답변달기
exports.answer = async (req) => {
  const { content } = req.body
  const qeustion_idx = req.params
 // const qeustion_idx = req.params.question_idx // question 의 유니크한 id 값

  await qna.update(
    { _id: qeustion_idx },
    {
      $set: {
        answer_content: content,
      },
    },
  )
  console.log('입력됨')
}

exports.getqna = async (req) => {
  // -> 예전 문법
  const result = await qna.find({})
  return result
}
