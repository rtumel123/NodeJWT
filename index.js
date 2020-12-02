const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB'));

// import routes
const authRoute = require('./routes/auth');

// middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server running'))