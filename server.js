const express = require('express');
const app = express();
const knex = require('./middleware'); // Import the knex instance

app.use(express.json());

const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');
const ordersRouter = require('./routes/orders');

app.use('/users', usersRouter);
app.use('/services', servicesRouter);
app.use('/orders', ordersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
