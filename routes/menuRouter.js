const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/sandwich", async (req, res) => {
  try {
    const sandwichData = await db.Menu.findAll({
      include : [{
        model : db.Type,
        attributes : ['type']
      }],
      attributes : ['name', 'kcal', 'img']
    });
 
    res.status(200).send({
      sandwichData,
    });
  } catch (e) {
    console.error(e);
    res.send({
      error: e.message,
    });
  }
});

router.get("/ingredients", async (req, res) => {
  try {
    const ingredientsData = await db.Menu.findAll({
      include : [{
        model : db.Type,
        attributes : ['type']
      }],
      attributes : ['name', 'kcal', 'img']
    });
 
    res.status(200).send({
      ingredientsData,
    });
  } catch (e) {
    console.error(e);
    res.send({
      error: e.message,
    });
  }
});

module.exports = router;
