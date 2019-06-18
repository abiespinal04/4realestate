const express = require('express');
const router = express.Router();


var Zillow = require('node-zillow');
 
//Instantiate
var zillow = new Zillow('X1-ZWz17v7t0p58uj_6wmn8');

router.get('/', (req,res,next) => {

})
zillow.get('/GetZestimate',parameters)
.then( (results) => {
  return results;

})

module.exports = zillow;