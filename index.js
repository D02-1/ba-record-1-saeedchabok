const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { cors } = require('./cors/cors.js');
const records = require('./routes/records');
const users = require('./routes/users');
const orders = require('./routes/order');
const login = require('./routes/routerLogin');

app.use( morgan ('tiny'));
app.use(express.json());
app.use((req, res, next) => 
{
    if (req.query.artist === 'Max')
        return res.status(200).send('Max ist nicht ein artist');
    next();
});
app.use(cors());
app.use('/records', records);
app.use('/users', users);
app.use('/orders', orders);
app.use('/login', login);

mongoose.connect('mongodb://localhost:27017/shoping').then(() => {console.log('db connect');}).catch(err => {console.log('db is not connectet', err.message);});

app.listen(4000, (err) => 
{
    if (err)
        console.log(err);
    else
        console.log('app listen port 4000');
});
