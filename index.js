const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect to DB
mongoose.connect('mongodb+srv://test:123@nodejwt.i7q87.mongodb.net/NodeJWT?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB');
});

// import routes
const authRoute = require('./routes/auth');

// middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server running'))