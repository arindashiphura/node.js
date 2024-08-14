const express = require("express");
const router = express.Router();





// const crop = require ("../Models/crop");


router.get("/sign", (req, res) => {
    res.render("cropreg");
  });
  
  router.post("/cropreg", (req, res) => {
   const newCrop = new crop(req.body);
    newCrop.save()
    res.redirect("/crops")
  });

 
  module.exports = router;