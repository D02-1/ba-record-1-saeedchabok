const getOrderController = (input) =>
{
    return( req, res) => 
    {
        res.status(200).send(input);
    };
};
module.exports = getOrderController;
