const { Router } = require('express')

const eventCtrl = require('../controller/eventController')

const event = Router()

event.post('/', eventCtrl.event)
event.get('/', eventCtrl.getevent)


module.exports = event
