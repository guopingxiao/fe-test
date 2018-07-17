const indexCtrl = require('../controllers/indexCtrl')

const Router = require('koa-router')

const router = Router()

router.get('/', indexCtrl)

module.exports = router

