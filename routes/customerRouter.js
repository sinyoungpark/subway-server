const express = require("express");
const db = require("../models");
const {createHmac}  = require("crypto");
const router = express.Router();

require("dotenv").config();


const makeHash = (pwd) => {
  const hash = createHmac("sha256", pwd)
  .update('I love cupcakes')
  .digest('hex');

  return hash;
}

router.post("/signup", async(req, res, next) => {
  try{
    const {name, email, password} = await req.body;

    const pwdHash = await makeHash(password);

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