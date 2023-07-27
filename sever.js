// index.js (or any other file where you set up your Express app)
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');
const db = require('./db'); // Import the Knex instance

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/users', async (req, res) => {
  try {
    // Fetch users from the database using Knex
    const users = await db.select().from('users'); // Assuming you have a 'users' table

    // Return the users as JSON
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
