const express = require("express");
const router = express.Router();

// const crop = require ("../Models/crop");



router.get("/register", (req, res) => {
    res.render("register");
  });
  
  router.post("/register", (req, res) => {
    const newLogi= new Logi (req.body);
    newRecord.save()
    res.redirect("/crops")
  })
  
  module.exports = router;