const favorite = require('../../schemas/favorite')
const event = require('../../schemas/event')
const bench = require('../../schemas/bench')

// 즐겨찾기 등록하기
exports.postBookmark = async (req) => {
  const { event_id, benchinfo_id } = req.body
  const { user_id } = req.headers

  if (!benchinfo_id) {
    const data = await event.findOne({
      _id: event_id,
    })
    await favorite.findOneAndUpdate(
      { user_id },
      {
        $addToSet: {
          favorite_event: {
            event_id,
            event_title: data.event_title,
            event_content: data.event_content,
          },
        },
      },
      { upsert: true },
    )
    // upsert가 등록하기 전에 해당 유저 정보로 된 데이터가 있는지 검색 먼저하고 없으면 생성하고 있으면 기존 데이터에다가 추가하는거야!
  } else {
    const data = await bench.findOne({
      bench_info: {
        $elemMatch: {
          _id: benchinfo_id,
        },
      },
    },
    {
      _id: 0,
      bench_info: {
        $elemMatch: {
          _id: benchinfo_id,
        },
      },
    })
    await favorite.findOneAndUpdate(
      { user_id },
      {
        $addToSet: {
          favorite_info: {
            benchinfo_id,
            benchinfo_category: data.bench_info[0].benchinfo_category,
            benchinfo_name: data.bench_info[0].benchinfo_name,
            benchinfo_address: data.bench_info[0].benchinfo_address,
          },
        },
      },
      { upsert: true },
    )
  }
}

exports.getBookmark = async (req) => {
  const { user_id } = req.headers
  const result = await favorite.find({
    user_id,
  })
  return result
}
  
exports.getEventList = async (event_id) => {
   
  const result = await event.find({
    _id: event_id,
  })
  console.log('11111', result)
  return result[0]
}
