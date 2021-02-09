const router = require('express').Router()
const axios = require("axios").default;

//US total stats
router.get('/', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'http://covidtracking.com/api/us',
      };
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})



//ALL US state total stats
router.get('/states', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'http://covidtracking.com/api/states',
    }
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})

// single state request 
router.get('/states/:state', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: `http://covidtracking.com/api/states/`,
    }
    try {
        const response = await axios.request(options)
        for(let i = 0; i < response.data.length; i++){
        if(response.data[i]["state"] === req.params.state){
            res.json(response.data[i]); 
            }
        }
    } catch (error) {
        console.error(error)
    }
})









module.exports = router