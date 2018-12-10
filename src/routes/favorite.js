const { Router } = require('express')

const bookmarkCtrl = require('../controller/favoriteController')

const favorite = Router()

favorite.post('/', bookmarkCtrl.postBookmark)

module.exports = favorite
