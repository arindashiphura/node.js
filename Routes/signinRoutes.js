const express = require("express");
const router = express.Router();



const passport = require("passport");

// Register admin
router.post("/addUser", async (req, res) => {
    try {
    // added
    const existingUser = await Signup.findOne({ email: req.body.email });
    if (existingUser) {
    return res
    .status(400)
    .send("Not registered, a user with a similar email already exists!");
    }

    const user = new Signup(req.body);
    // await user.save//used for savingto the database
    await Signup.register(user, req.body.password, (err) => {//used to register a user who will later login
    if (err) {
    throw err;
    }
    res.redirect("/login");
    });
    } catch (err) {
    res.status(400).render("signup", { tittle: "Signup" });
    console.log("Signup user error", err);
    }
    });

// const crop = require ("../Models/crop");


router.get("/signupo", (req, res) => {
    res.render("signupo");
  });
  
  router.post("/signupo", (req, res) => { 
    newCrop.save()
    res.redirect("/")
  });

 
  module.exports = router;