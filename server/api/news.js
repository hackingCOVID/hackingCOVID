const router = require('express').Router()
const axios = require("axios").default;

//covid news by country ie US
router.get('/', async (req, res, next) => {
    const options = {
        method: 'GET',
        // url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/${req.params.countryID}/`, 
        url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/US/`,
        headers: {
            'x-rapidapi-key': '623d0f4b1fmsh0cd1507033aae0cp14fa7bjsn047dcb6b3daa',
            'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
        }
    }
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})
//covid news by country & state ie US-NY
router.get('/:stateID', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: `https://coronavirus-smartable.p.rapidapi.com/news/v1/US-${req.params.stateID}/`, 
        headers: {
            'x-rapidapi-key': '623d0f4b1fmsh0cd1507033aae0cp14fa7bjsn047dcb6b3daa',
            'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com'
        }
    }
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
})


// //vaccine news
router.get('/vaccine', async (req, res, next) => {
    const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-treatments/rna-based-treatments',
        headers: {
          'x-rapidapi-key': 'f205866adcmsh67fd61adef16fb8p1b04aajsn87e938cee808',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options)
        res.json(response.data)
    } catch (error) {
        console.error('this is an error')
    } 
})



//covid news
/*
router.get('/covid', async (req, res, next) => {
    const options = {
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
        headers: {
          'x-rapidapi-key': '623d0f4b1fmsh0cd1507033aae0cp14fa7bjsn047dcb6b3daa',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options)
        res.json(response.data)
      } catch (error) {
          console.error(error)
      }
      
})
*/
module.exports = router