const express = require('express');
const db = require('../models');
const router = express.Router();

require('dotenv').config();

router.get('/', async(req, res) => {
  try{
    const adData = await db.Ad.findAll();
    const sendData = [];
    
    adData.forEach((ad) => {
      sendData.push({
        img : ad.img
      });
    });
    res.status(200).send({
      adData : sendData
    });
  }
  catch(e){
    res.send({
      error : `${e.message}`
    })
  }
});

module.exports = router;