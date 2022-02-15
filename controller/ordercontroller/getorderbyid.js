const getOrderById = (input) =>
{
    return(req, res) => 
    {
        const order = input.find(item => item.id == req.params.id);
        if (order && order.id)
            res.status(200).send(`${order.id} , ${order.quantity} `);
        else
            res.status(404).send('cannot found any order');
    };
};

module.exports = getOrderById;
