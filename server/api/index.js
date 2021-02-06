const router = require('express').Router()

router.use('/data', require('./data'))

//404 error
router.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})


module.exports = router