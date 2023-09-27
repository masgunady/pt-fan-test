const presenceRoute = require('express').Router()
const authMiddleware = require('../middlewares/auth.middleware')
const presenceController = require('../controllers/presence.controller')


presenceRoute.get('/', authMiddleware, presenceController.getAll)
presenceRoute.post('/',authMiddleware, presenceController.createPresence)
presenceRoute.post('/approval/:id',authMiddleware, presenceController.approvalPresence)

module.exports = presenceRoute
