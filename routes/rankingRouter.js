const express = require("express");
const isAuth = require("../isAuth");
const db = require("../models");
require('dotenv').config();
const router = express.Router();

router.get('/', async(req, res) => {
  try{
    const userId = isAuth(req);
    if(userId !== null){

      const rankings = await db.Board.findAll({
        include : [db.User, db.Menu, db.Ingredient],
        order : [
          ['likes', 'DESC']
        ],
        limit : 10
      });

      const sendData = [];

      rankings.forEach((post) => {
        const {title, likes, Menu, Ingredients, User} = post;

        const ingredientsData = [];
        const ingredientsImg = [];

        Ingredients.forEach((val) => {
          ingredientsData.push(val.name);
          ingredientsImg.push(val.img);
        });
        sendData.push({
          title, 
          likes, 
          menu : Menu.name,
          menuImg : Menu.img,
          ingredientsData,
          ingredientsImg,
          writer : User.name,
          writerImg : User.profileImg
        });
      })
      res.status(200).send({
        data : sendData
      });
    }
  }
  catch{

  }
});

module.exports = router;