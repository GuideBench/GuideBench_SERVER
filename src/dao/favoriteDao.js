const favorite = require('../../schemas/favorite')

// 이벤트
exports.postBookmark = async (req) => {
  // const id = req.body.id // req.body는 클라이언트(사용자)가 입력한 데이터를 받아오는 곳 console.log(req.body)찍어보면 클라이언트쪽에서 어떤 데이터를 보냈는지 콘솔로 확인할 수 있어요!
  // const pw = req.body.pw // -> 예전 문법
  // es6 문법
  const { event_id, benchinfo_id } = req.body
  const { user_id } = req.headers
  // const { id, pw } = req.body -> 실제 타이핑 수를 줄여주는 문법으로 req.body 하위에 있는 id, pw를 가져오는 동시에 id,pw를 바로 변수명으로 사용가능
  // // async await은 말로 설명해드릴게욤
  const duplicated = await favorite.find({
    user_id,
  })
  if (!duplicated[0]) {
    if (!event_id) {
      await favorite.update(
        { user_id },
        {
          $addToSet: {
            favorite_info: {
              benchinfo_id,
            },
          },
        },
      )
    } else {
      await favorite.create({
        event_id,
      })
    }
  } else if (!event_id) {
    await favorite.update(
      { user_id },
      {
        $addToSet: {
          favorite_info: {
            benchinfo_id,
          },
        },
      },
    )
  } else {
    await favorite.update(
      { user_id },
      {
        $addToSet: {
          favorite_event: {
            event_id,
          },
        },
      },
    )
  }
}