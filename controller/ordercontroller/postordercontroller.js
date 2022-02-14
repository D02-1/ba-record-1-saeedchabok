const orderPost = (input) =>
{
    return(req, res) => 
    {
        const order =
        {
            id: input[ input.length - 1 ].id + 1,
            quantity: req.body.quantity
        };
        input.push(order);
        res.status(200).send(order);
    };
};

module.exports = orderPost;
