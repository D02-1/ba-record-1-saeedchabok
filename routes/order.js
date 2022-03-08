const express = require('express');
const getOrderController = require('../controller/ordercontroller/getordercontroller');
const orderPost = require('../controller/ordercontroller/postordercontroller');
const getOrderById = require('../controller/ordercontroller/getorderbyid');
const putOrderController = require('../controller/ordercontroller/putordercontroller');
const deleteOrder = require('../controller/ordercontroller/deleteordercontroller');
const router = express.Router();

router.route('/')
    .get(getOrderController)
    .post(orderPost);
    
router.route('/:id')
    .get(getOrderById)
    .put(putOrderController)
    .delete(deleteOrder);

module.exports = router;
