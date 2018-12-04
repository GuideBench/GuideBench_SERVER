const { Router } = require('express')

const benchCtrl = require('../controller/benchController')
const bench = Router()

// 밴치 등록하기
bench.post('/', benchCtrl.postBench)
// 벤치의 맛집,시장 추가하기
bench.post('/:bench_id/info',benchCtrl.postInfo)


module.exports = bench