const express = require('express');
const morgan = require('morgan');

const { cors } = require('./cors/cors.js');
const records = require('./routes/records');
const users = require('./routes/users');
const orders = require('./routes/order');

const app = express();

app.use( morgan ('tiny'));
app.use(express.json());
app.use((req, res, next) => 
{
    if (req.query.artist === 'Max')
        return res.status(200).send('Max ist nicht ein artist');
    next();
});
app.use('/records', records);
app.use('/users', users);
app.use('/orders', orders);
app.use(cors());

app.listen(4000, (err) => 
{
    if (err)
        console.log(err);
    else
        console.log('app listen port 4000');
});
