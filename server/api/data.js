const router = require('express').Router()
const axios = require("axios").default;
const fetch = require('node-fetch')




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


//this was us testing out how to work with promises...

// const backupData = [
//     fetch('http://covidtracking.com/api/us'),
//     fetch('http://covidtracking.com/api/states'),
//     fetch(`http://covidtracking.com/api/states/`)
// ]

// for(let i = 0; i < backupData.length; i++){
//     fetch(backupData[i]).then(response => response.json()).then(data => console.log('DATA IS HERE', data))
  
//   }

//normal fetch request
// fetch('http://covidtracking.com/api/us').then(response => response.json()).then(data => console.log('THIS IS DATA', data))

//this works!
//   Promise.all(backupData)
//    .then((response) => response.forEach((resp) => resp.json().then(data => console.log('THIS IS THE DATA', data))))


//this works! 
//this is running multiple api calls and only returning the one that resolves its promise first
// Promise.all([backupData])
// .then((response) => Promise.race(response[0])).then((value) => value.json().then(data => console.log('THIS IS DATA', data)))






