const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

// CRUD Routes 
app.use('/users', require('./routes/users'));

// Error Handling Middleware
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
});

// sync database
sequelize.sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => console.log(err));
// app.listen(3000);
