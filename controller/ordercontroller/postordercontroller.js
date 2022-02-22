const Order = require('../../model/orderModel');
const orderPost = async (req, res) =>

{
    const newOrder = new Order({ quantity: req.body.quantity }); 
    try 
    {
        await newOrder.save();
        res.status(200).send(newOrder);
    }
    catch(error)
    {
        console.log(error.message);
    }    
};

module.exports = orderPost;
