const Order = require('../../model/orderModel');
const getOrderController = async (req, res) =>
{
    const allOrders = await Order.find();
    res.status(200).send(allOrders);
};

module.exports = getOrderController;
