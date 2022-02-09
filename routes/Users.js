const express = require('express');
const records = require('../public/Initdata');
const router = express.Router();
const users = require('../public/initusers');

router.route('/')
    .get(( req, res) => 
    {
        res.status(200).send(users);
    })
    .post((req, res) => 
    {
        const user =
        {
            id: users[ users.length - 1 ].id + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            Password: req.body.password,
        };
        records.push(user);
        res.status(200).send(user);
    });
router.route('/:id')
    .get((req, res) => 
    {
        const user = users.find(item => item.id == req.params.id);
        if (user && user.id)
            res.status(200).send(`${user.id} , ${user.firstName} `);
        else
            res.status(404).send('cannot found the artist');
    })
    .put((req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('user with ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('user with ID' + id + 'delete');
    });

module.exports = router;
