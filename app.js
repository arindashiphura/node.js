// // app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./Models/user');
// const session = require('express-session');
// const authRoutes = require('./routes/auth');
// require('dotenv').config();

// const app = express();

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

// // Configure session management
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'your-secret-key',
//   resave: false,
//   saveUninitialized: false
// }));

// // Initialize Passport and manage sessions
// app.use(passport.initialize());
// app.use(passport.session());

// // Configure Passport to use LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // Set EJS as the templating engine
// app.set('view engine', 'ejs');

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user_authentication', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Use routes from authRoutes
// app.use('/', authRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
