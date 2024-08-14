const express = require("express");
const router = express.Router();





// const crop = require ("../Models/crop");


router.get("/logining", (req, res) => {
    res.render("login");
  });
  
  router.post("/logining", (req, res) => {
   const newCrop = new crop(req.body);
    newCrop.save()
    res.redirect("/")
  });

 
  module.exports = router;