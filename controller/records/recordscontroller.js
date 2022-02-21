const Records = require('../../model/recordsmodel'); 
const mongoose = require('mongoose');
const getRecordController = () =>
{
    return async(req, res) => 
    {
        const recordAll = await Records.find();
        res.status(200).send(recordAll);
    };
};
const postRecordController = () =>
{
    return async (req, res) => 
    {
        const newRecord = new Records(
            {
                artist: req.body.artist,
                title: req.body.title,
                year: req.body.year,
                price: req.body.price,
            });
        try 
        {
            await newRecord.save();
        }
        catch(error)
        {
            console.log(error.message);
        }    
        res.status(200).send(newRecord);
    };
};

const getRecordControllerById = async (req, res) =>
{
    const { id } = req.params;
    const controllId = mongoose.isValidObjectId(id);
    if(!controllId)
        return res.status(400).send('bad id');
    const recordByID = await Records.findById(id);
    if(recordByID)
        res.status(200).send(recordByID);    
    else
    {
        res.status(404).send('can not found the product');
    }
};

const putRecordControllerById = () =>
{
    return(req, res ) => 
    {
        const { id } = req.params;
       
        res.status(200).send('post with ID' + id + 'edited');
    };
};

const deleteRecordControllerById = () =>
{
    return( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('post with ID' + id + 'delete');
    };
};
module.exports =
{
    getRecordController,
    postRecordController,
    getRecordControllerById,
    putRecordControllerById,
    deleteRecordControllerById
};
