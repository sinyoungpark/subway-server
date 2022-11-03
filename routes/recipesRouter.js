const express = require('express');
const db = require('../models');
const jwt = require('jsonwebtoken');
const router = express.Router();
const isAuth = require('../isAuth');

require('dotenv').config();

/*게시글 작성*/
router.post("/", async(req, res) => {
  const {menuId, ingredientId, title, likes} = req.body;

  try{
    const userId = isAuth(req);
    if(userId !== null){
      const post = await db.Board.create({
        userId,
        menuId,
        ingredientId,
        title,
        likes
      });

      res.status(201).send({
        data : '저장되었습니다.'
      });
    }
  }
  catch(e){
    res.send({
      error : `${e.message}`
    });
  }
});

/*get요청*/
router.get("/", async (req, res) => {

});

module.exports = router;