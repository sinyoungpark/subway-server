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
      res.status(201).send({
        result : "user created"
      })
    } else {
      res.status(409).send({
        result : "user already exist"
      });
    }
  } 
  catch(e){
    res.send({
      error : `${e.message}`
    })
  }
});

/*로그인 요청 */
router.post("/login", async(req, res) => {
  try{
    const {email, password} = await req.body;

    const user = await db.Customer.findOne({
      where : { 
        email
      }
    });

    if(user === null){
      res.status(404).json({
        result : "존재하지 않는 유저입니다."
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
      res.status(401).json({
        result : "비밀번호를 잘못 입력하셨습니다."
      });
    }

    else{
      //signing token with user id
      const accesstoken = createAccessToken(user.id);
      const refreshtoken = createRefreshToken(user.id);

      await db.Customer.update({ refreshtoken }, {
        where: {
          id : user.id
        }
      });
      sendRefreshToken(res, refreshtoken);
      sendAccessToken(req, res, accesstoken);
    }
  }
  catch(e){
    console.error(e);
  }
});

module.exports = router;