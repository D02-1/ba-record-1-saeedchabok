const express = require('express');
const router = express.Router();
const orders = 
[ 
    {
        id:0,
        quantity:0
    } 
];

router.route('/')
    .get(( req, res) => 
    {
        res.status(200).send(orders);
    })
    .post((req, res) => 
    {
        const order =
        {
            id: orders[ orders.length - 1 ].id + 1,
            quantity: req.body.quantity
        };
        orders.push(order);
        res.status(200).send(order);
    });
router.route('/:id')
    .get((req, res) => 
    {
        const order = orders.find(item => item.id == req.params.id);
        if (order && order.id)
            res.status(200).send(`${order.id} , ${order.quantity} `);
        else
            res.status(404).send('cannot found any order');
    })
    .put((req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('order ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('order ID' + id + 'deleted');
    });

module.exports = router;
