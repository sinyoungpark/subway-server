const express = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken
} = require("../token");

require("dotenv").config();


/*회원가입 요청 */
router.post("/signup", async(req, res) => {
  try{
    const {name, email, password} = await req.body;

    const pwdHash = await bcrypt.hash(password, 10);

    const [user,created] = await db.Customer.findOrCreate({
      where : { email : email},
      defaults : {
        name : name,
        password : pwdHash,
      }
    });
    
    if(created){
      res.status(201).json({
        result : "sign up successfully!"
      })
    } else {
      res.status(409).json({
        result : "conflicted email"
      });
    }
  } 
  catch(e){
    console.error(e);
  }
});

module.exports = router;