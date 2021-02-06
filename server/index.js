const path = require('path')
//creating the app
const express = require('express')
const app = express()
//PORT
const port = process.env.PORT || 3000
//logging middleware
const morgan = require('morgan')
app.use(morgan('dev'))
//static middleware
app.use(express.static(path.join(__dirname, '../public')))
//parsing middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//mounting routes to api
app.use('/api', require('./api'))
//sending index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
//handeling  500 error
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
})
//strarting server
app.listen(port, function(){
    console.log(`Your server is listening on port ${port}`)
})