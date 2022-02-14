const express = require('express');
const getordercontroller = require('../controller/getordercontroller');
const orderPost = require('../controller/postordercontroller');
const router = express.Router();
const orders = 
[ 
    {
        id:0,
        quantity:0
    } 
];

router.route('/')
    .get(getordercontroller(orders))
    .post(orderPost(orders));
    
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
        const index = orders.findIndex(item => item.id == req.params.id);
        if(index === -1)
        {
            res.status(404).send('cannot found');
        }
        orders[ index ].quantity = req.body.quantity;
        const { id } = req.params;
        res.status(200).send('order ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = orders.findIndex(item => item.id == req.params.id);
        res.status(200).send('order ID' + id + 'deleted');
    });

module.exports = router;
