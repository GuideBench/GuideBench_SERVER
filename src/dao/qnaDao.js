const qna = require('../../schemas/qna')
const user = require('../../schemas/user')

exports.question = async (req) => {
  const { title, content } = req.body
  const { _id }  = req.headers
// 로그인한 사람 고유값인 _id를 클라한테 req.headers._id로 요청해서 그사람의 이름값을 받아와서 이름칸에 넣음
    const user_data = await user.find({
        _id : _id
    })
    console.log()
   const name = user_data[0].user_name

    await qna.create({
        question_title: title,
        question_content: content,
        question_name: name
    })
    console.log('입력됨')
}

// exports.question = async (req) => {
//   const { title, content } = req.body
//   const user_data = await user.find({
//     _id : req.headers._id
//   })
//   const name = user_data[0].user_name

//   await qna.create({
//     question_title : title,
//     question_content : content,
//     question_name : name
//   })
// }

exports.answer = async (req) => {
  const { title, content, name } = req.body
  let data
  const duplicated = await qna.create({
    user_content: content,
  })
  if (!duplicated[0]) {
    await qna.create({
        qna_title: title,
        qna_content: content,
        qna_name: name
    })
    data = {
      message: '등록성공',
    }

  } else {
    data = {
      message: '이미 존재하는 질문입니다',
    }
    return data
  }
 return data
}
