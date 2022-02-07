const express = require('express');

const app = express();

app.get('/records', (req, res) => {
    res.send([{ 'id': 1, 'name': 'Hamid' }, { 'id': 2, 'name': 'Saeed' }]);
});

app.post('/records', (req, res) => {

    res.send(req.query);
})

app.use((req, res, next) => {
    res.status(404).send('ERORR: not found');
})

app.listen(4000, (err) => {

    if (err)
        console.log(err);
    else
        console.log('app listen port 4000');
})