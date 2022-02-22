const Order = require('../../model/orderModel');
const mongoose = require('mongoose');
const deleteOrder = async (req, res) =>
{
    const controllId = mongoose.isValidObjectId(req.params.id);
    if(!controllId)
        return res.status(400).send('bad id');
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    if(!deleteOrder)
        return res.status(404).send('can not found order Id');
    res.status(200).send(`id ${req.params.id} deleted`);
};

module.exports = deleteOrder;
