const Order = require('../../model/orderModel');
const mongoose = require('mongoose');
const getOrderById = async (req, res) =>

{
    const { id } = req.params;
    const controllId = mongoose.isValidObjectId(id);
    if(!controllId)
        return res.status(400).send('bad id');
    const orderByID = await Order.findById(id);
    if(orderByID)
        res.status(200).send(orderByID);    
    else
    {
        res.status(404).send('can not found the Order');
    }
};

module.exports = getOrderById;
