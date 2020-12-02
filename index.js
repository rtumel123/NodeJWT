const express = require('express');
const app = express();

// import routes
const authRoute = require('./routes/auth');

// middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server running'))