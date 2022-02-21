let records = require('../../public/initdata');
const record = require('../../model/recordsmodel'); 
const getRecordController = () =>
{
    return async(req, res) => 
    {
        const recordAll = await record.find();
        res.status(200).send(recordAll);
    };
};
const postRecordController = () =>
{
    return(req, res) => 
    {
        const record =
        {
            id: records[ records.length - 1 ].id + 1,
            artist: req.body.artist,
            title: req.body.title,
            year: req.body.year,
            price: req.body.price,
        };
        res.status(200).send(records);
        records.push(record);
        db.defaults(records).write();
    };
};

const getRecordControllerById = () =>
{
    return(req, res) => 
    {
        const record = records.find(item => item.id == req.params.id);
        if (record && record.id)
            res.status(200).send(`${record.id} , ${record.artist} `);
        else
            res.status(404).send('cannot found the artist');
    };
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
