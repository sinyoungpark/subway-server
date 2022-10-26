const express = require("express");


const Customer = require("../models/customer");

const router = express.Router();

router.get("/customers", async(req, res, next) => {
  res.set("content-type" , "text/json");
  res.json("hello worold");
});

module.exports = router;