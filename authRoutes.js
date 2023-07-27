// authRoutes.js
const express = require('express');
const userController = require('./controllers/userController');
const jwtMiddleware = require('./middlewares/jwtMiddleware'); // Create jwtMiddleware for authentication

const router = express.Router();

router.post('/register', userController.registerUser); // use /auth/register
router.post('/login', userController.loginUser); // use /auth/login

// Use the jwtMiddleware for authentication on the logout route
router.get('/logout', jwtMiddleware, userController.logoutUser);

module.exports = router;
