const { Router } = require('express')

const eventCtrl = require('../controller/eventController')
const event = Router()

event.post('/', eventCtrl.event)
event.get('/', eventCtrl.getevent )

event.use('/event',event);
event.use('/getevent',event);

module.exports = event