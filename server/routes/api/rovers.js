
const express = require('express');
const router = express.Router();
const axios = require('axios')
const { NASA_API_HOS T} = require('../../constants');

router.get('/:rover_name', async (req, res, next) => {
	try {
    let response =  await axios.get(`${NASA_API_HOST}/${req.params.rover_name}/photos?earth_date=${req.query.date}&api_key=${process.env.NASA_API_KEY}`)
		res.json({success:true, response:response.data})
	} catch (error) { 
		res.json({success:false, error})
  }
});

module.exports = router;
