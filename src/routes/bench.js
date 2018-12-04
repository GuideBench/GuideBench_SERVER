const { Router } = require('express')

const benchCtrl = require('../controller/benchController')
const bench = Router()

bench.post('/', benchCtrl.postBench)


module.exports = bench