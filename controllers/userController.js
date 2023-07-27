// ./controllers/userController.js
const bcrypt = require('bcrypt');
const db = require('../db');
const { existsOrError, strongPassword } = require('./validation'); // Import the validation functions

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate the input data
    existsOrError(name, 'Name is required');
    existsOrError(email, 'Email is required');
    existsOrError(password, 'Password is required');
    strongPassword(password, 'Password must be at least 6 characters long');

    // Check if user with the given email already exists
    const existingUser = await db('users').where('email', email).first();
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the 'users' table
    const [userId] = await db('users').insert({
      username: name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ userId, name, email });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email
    const user = await db('users').where('email', email).first();
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the provided password matches the hashed password in the database
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // User is authenticated, you can generate and return a JWT here if needed
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Logout user (if using JWT, you can handle it on the client-side)
exports.logoutUser = (req, res) => {
  // Your logout logic here (if needed)
  res.json({ message: 'Logout successful' });
};
