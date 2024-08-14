const express = require("express");
const router = express.Router();

// const crop = require ("../Models/crop");



router.get("/produceEntry", (req, res) => {
    res.render("produceEntry");
  });
  
  router.post("/produceEntry", (req, res) => {
    const newLogi= new Logi (req.body);
    newRecord.save()
    res.redirect("/crops")
  })
  
  module.exports = router;