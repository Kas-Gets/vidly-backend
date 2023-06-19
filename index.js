const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers')
const users = require('./routes/users');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('connected to MongoDB...'))
    .catch(error => console.error('could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); 