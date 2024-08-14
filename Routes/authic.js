// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const User = require('./models/User');

// // Show signup form
// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

// // Handle signup form submission
// router.post('/signup', async (req, res) => {
//   try {
//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(400).send("A user with this email already exists!");
//     }

//     const user = new User({ email: req.body.email });
//     await User.register(user, req.body.password, (err) => {
//       if (err) {
//         throw err;
//       }
//       res.redirect('/login');
//     });
//   } catch (err) {
//     res.status(400).render('signup', { title: 'Signup' });
//     console.log('Signup user error', err);
//   }
// });

// // Show login form
// router.get('/login', (req, res) => {
//   res.render('login');
// });

// // Handle login form submission
// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
//   failureFlash: true
// }));

// // Show dashboard (protected)
// router.get('/dashboard', isLoggedIn, (req, res) => {
//   res.render('dashboard', { user: req.user });
// });

// // Handle logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/login');
// });

// // Middleware to check if the user is logged in
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/login');
// }

// module.exports = router;
