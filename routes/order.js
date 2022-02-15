const express = require('express');
const getOrderController = require('../controller/ordercontroller/getordercontroller');
const orderPost = require('../controller/ordercontroller/postordercontroller');
const getOrderById = require('../controller/ordercontroller/getorderbyid');
const putOrderController = require('../controller/ordercontroller/putordercontroller');
const deleteOrder = require('../controller/ordercontroller/deleteordercontroller');
const router = express.Router();
const orders = 
[ 
    {
        id:0,
        quantity:0
    } 
];

router.route('/')
    .get(getOrderController(orders))
    .post(orderPost(orders));
    
router.route('/:id')
    .get(getOrderById(orders))
    .put(putOrderController(orders))
    .delete(deleteOrder(orders));

module.exports = router;
