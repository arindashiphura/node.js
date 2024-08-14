// dependence
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


//added

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// // const bcrypt = require("bcryptjs");
// const Signup = require('./models/signup');
// const Signin = require("./models/signin");




require("dotenv").config();



//import models
//importing routes
const studyRoutes = require("./Routes/studyRoutes"); // import routes
const cropRoutes = require("./Routes/cropRoutes"); // import routes
const registerRoutes = require("./Routes/registerRoutes");

// const registerRoutes = require("./Routes/registerRoutes"); // import routes
const loginRoutes = require("./Routes/loginRoutes"); // import routes
const signupRoutes = require("./Routes/signupRoutes"); // import routes
const signinRoutes = require("./Routes/signinRoutes"); // import routes
const produceEntryRoutes = require("./Routes/produceEntryRoutes"); // import routes





//instantiation
const app = express();
const port = 4500;




//configuration
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });




//set view engine to pug
app.set("view engine", "pug"); //specify the view engine
app.set("views", path.join(__dirname, "views")); //specify the views directory




//midleware

app.use(express.static(path.join(__dirname, "public"))); // spesfy a folder for static files
app.use(express.urlencoded({ extended: true })); //helps us to parse form data
app.use(express.json()); //helps to capture data in jason format

//routes
//use routes/ use imported routes
app.use("/", studyRoutes);
app.use("/", cropRoutes);
app.use("/", registerRoutes);
app.use("/",signupRoutes); // add signup route here
app.use("/", loginRoutes); // add login route here
app.use("/",signinRoutes);
app.use("/", produceEntryRoutes); // add produceEntry route here


app.get("*", (req, res) => {
  res.send("error! page does not exist");
});



//Bootstrapping the server
app.listen(port, () => console.log(`listening on port ${port}`));
