const { Console } = require('console');
const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const app = express();
app.use(express.json());
const records =
    [
        { id: 1, name: 'hamid' },
        { id: 2, name: 'saeed' }
    ]
app.get('/', (req, res) => {
    res.send('Hi min server with express');
})
app.get('/records', (req, res) => {
    res.send(records);
})
app.post('/records', (req, res) => {
    const record = {
        id: records[records.length - 1].id + 1,
        name: req.body.name,
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