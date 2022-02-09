const express = require('express');
const app = express();
const { cors } = require('./cors/Cors.js');
const records = require('./routes/records');
app.use(express.json());
app.use((req, res, next) => 
{
    if (req.query.artist === 'Max')
        return res.status(200).send('Max ist nicht ein artist');
    next();
});
app.use('/records', records);
app.use(cors());
app.listen(4000, (err) => 
{
    if (err)
        console.log(err);
    else
        console.log('app listen port 4000');
});
