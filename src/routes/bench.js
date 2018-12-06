const { Router } = require('express')

const benchCtrl = require('../controller/benchController')
const bench = Router()

// 밴치 등록하기
bench.post('/', benchCtrl.postBench)
bench.post('/:bench_id/info',benchCtrl.postInfo)// 벤치의 맛집,시장 추가하기

bench.get('/:bench_id/getInfo', benchCtrl.getInfo)


// bench.use('/postBench',bench)

module.exports = bench