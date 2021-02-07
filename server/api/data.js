const router = require('express').Router()
const axios = require("axios").default;

//US total stats
router.get('/', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: 'us'},
        headers: {
          'x-rapidapi-key': 'f205866adcmsh67fd61adef16fb8p1b04aajsn87e938cee808',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})
//US state total stats
router.get('/states', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'https://coronavirus-us-api.p.rapidapi.com/api/state/all',
        params: {source: 'nyt'},
        headers: {
            'x-rapidapi-key': 'f205866adcmsh67fd61adef16fb8p1b04aajsn87e938cee808',
            'x-rapidapi-host': 'coronavirus-us-api.p.rapidapi.com'
        }
    }
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router