const Order = require('../../model/orderModel');
const mongoose = require('mongoose');
const putOrderController = async (req, res) =>
{
    const { id } = req.params;
    const controllId = mongoose.isValidObjectId(id);
    if(!controllId)
        return res.status(400).send('bad id');
    const findOrderById = await Order.findById(id);
    if(!findOrderById)
        return res.status(404).send('can not found record Id');

    findOrderById.quantity= req.body.quantity || findOrderById.quantity;
   
    try 
    {
        await findOrderById.save();
    }
    catch(error)
    {
        console.log(error.message);
    }    
    res.status(200).send(findOrderById);
};

module.exports = putOrderController;
