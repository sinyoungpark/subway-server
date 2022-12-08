const express = require("express");
const isAuth = require("../isAuth");
const { sequelize } = require("../models");
const db = require("../models");
require("dotenv").config();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const rankings = await db.Board.findAll({
        include: [
          {
            model: db.User,
            attributes: ["name", "profileImg"],
          },
          {
            model: db.Menu,
            attributes: ["name", "img"],
          },
          {
            model: db.Ingredient,
            attributes: ["name", "img"],
          },
        ],
        limit: 10,
        order : [["count", 'DESC']]
      });

      res.status(200).send({
        data: rankings,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

module.exports = router;
