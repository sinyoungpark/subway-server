const express = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");
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
    
    if(!created) throw Error("이미 사용 중인 이메일입니다.");
    else {
      res.status(201).send({
        result : "회원가입을 축하드립니다."
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

    if(user === null) throw Error("가입되지 않은 사용자입니다.");

    const match = await bcrypt.compare(password, user.password);

    if(!match) throw Error("비밀번호를 잘못 입력하셨습니다.");
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
    res.send({
      error :  `${e.message}`
    });
  }
});

/*로그아웃 */
router.post("/logout", async(req, res) => {
  res.clearCookie("refreshtoken");
  res.status(200).send({
    result : "logged out"
  })
});

module.exports = router;