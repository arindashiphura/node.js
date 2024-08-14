const express = require("express");
const router = express.Router();

// Assuming you have a User model to handle user data
const Signup = require('./models/signup');

// Route to render the signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Route to handle signup form submission
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user instance with the form data
    await newUser.save(); // Save the new user to the database
    res.redirect("/login"); // Redirect to the login page after successful signup
  } catch (err) {
    console.error(err); // Log the error if any
    res.status(500).send("An error occurred during signup."); // Send an error response if something goes wrong
  }
});

module.exports = router;
