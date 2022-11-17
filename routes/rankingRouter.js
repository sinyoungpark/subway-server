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
        include : [{
          model : db.User,
            attributes : ["name", "profileImg"]
        },{
          model : db.Menu,
          attributes : ["name", "img"]
        },{
          model : db.Ingredient,
          attributes : ["name", "img"]
        }],
        attributes : ["id", "title", "likes"],
        order : [
          ['likes', 'DESC'],
        ],
        limit : 10
      });

      res.status(200).send({
        data : rankings
      });
    }
  }
  catch(error){
    res.send({
      message : error
    })
  }
});

module.exports = router;