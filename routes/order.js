const express = require('express');
const getordercontroller = require('../controller/ordercontroller/getordercontroller');
const orderPost = require('../controller/ordercontroller/postordercontroller');
const getorderbyid = require('../controller/ordercontroller/getorderbyid');
const putordercontroller = require('../controller/ordercontroller/putordercontroller');
const deleteorder = require('../controller/ordercontroller/deleteordercontroller');
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
    .get(getorderbyid(orders))
    .put(putordercontroller(orders))
    .delete(deleteorder(orders));

module.exports = router;
