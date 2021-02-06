const router = require('express').Router()

//this is where router get go
router.get('/', (req, res, next) => {
    res.json("this is working")
})


module.exports = router