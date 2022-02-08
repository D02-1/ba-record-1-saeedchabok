const express = require('express');
const { cors } = require('./cors/Cors.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    if (req.query.artist === 'Max')
        return res.status(200).send('Max ist nicht ein artist')
    next()
})
app.use(cors())
const records =
    [
        { id: 1, artist: 'hamid', title: 'jazz', year: 2022, price: 9.99 },
        { id: 2, artist: 'saeed', title: 'rock', year: 1990, price: 8.95 }
    ]
app.get('/', (req, res) => {
    res.status(200).send('Hi min server with express');
})
app.get('/key', (req, res) => {
    res.status(200).send('12345');
})
app.get('/records', (req, res) => {
    res.send(records);
})
app.post('/records', (req, res) => {
    const record = {
        id: records[records.length - 1].id + 1,
        artist: req.body.artist,
        title: req.body.title,
        year: req.body.year,
        price: req.body.price,
    }
    res.send(records)
    records.push(record)
    db.defaults(records).write();
})
app.listen(4000, (err) => {
    if (err)
        console.log(err)
    else
        console.log('app listen port 4000');
})