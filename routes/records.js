const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const records = require('../public/Initdata')
const adapter = new FileSync('db.json');
const db = low(adapter);

const router = express.Router()

router.route('/')

    .get((req, res) => {
        res.status(200).send(records);
    })
    .post((req, res) => {
        const record = {
            id: records[records.length - 1].id + 1,
            artist: req.body.artist,
            title: req.body.title,
            year: req.body.year,
            price: req.body.price,
        }
        res.status(200).send(records)
        records.push(record)
        db.defaults(records).write();
    })

module.exports = router;