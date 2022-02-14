const putordercontroller = (input) =>
{
    return(req, res ) => 
    {
        const index = input.findIndex(item => item.id == req.params.id);
        if(index === -1)
        {
            res.status(404).send('cannot found');
        }
        input[ index ].quantity = req.body.quantity;
        const { id } = req.params;
        res.status(200).send('order ID' + id + 'edited');
    };
};

module.exports = putordercontroller;
