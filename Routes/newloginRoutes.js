const express = require("express");
const router = express.Router();

// const crop = require ("../Models/crop");



router.get("/newLogin", (req, res) => {
    res.render("newLogin");
  });
  
  router.post("/newLogin", (req, res) => {
    const newLogi= new Logi (req.body);
    newRecord.save()
    res.redirect("shif")
  })
  
  module.exports = router;