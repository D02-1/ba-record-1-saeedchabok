const deleteorder = (input) =>
{
    ( req, res) => 
    {
        const { id } = input.findIndex(item => item.id == req.params.id);
        res.status(200).send('order ID' + id + 'deleted');
    };
};

module.exports = deleteorder;
