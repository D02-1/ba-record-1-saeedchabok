const getordercontroller = (input) =>
{
    return( req, res) => 
    {
        res.status(200).send(input);
    };
};
module.exports = getordercontroller;
