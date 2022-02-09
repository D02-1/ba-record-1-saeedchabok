const express = require('express');
const router = express.Router();
const orders = [ {} ];
router.route('/')
    .get(( req, res) => 
    {
        res.status(200).send(orders);
    })
    .post((req, res) => 
    {
        const order =
        {
            id: users[ users.length - 1 ].id + 1,
            quantity: req.body.quantity
        };
        records.push(order);
        res.status(200).send(orders);
    });
router.route('/:id')
    .get((req, res) => 
    {
        const order = orders.find(item => item.id == req.params.id);
        if (order && order.id)
            res.status(200).send(`${order.id} , ${order.quantity} `);
        else
            res.status(404).send('cannot found the artist');
    })
    .put((req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('order with ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('order with ID' + id + 'delete');
    });

module.exports = router;
