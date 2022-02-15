const express = require('express');
const { getRecordController, postRecordController, getRecordControllerById } = require('../controller/records/recordscontroller');
const router = express.Router();

router.route('/')

    .get(getRecordController())
    .post(postRecordController());

router.route('/:id')
    .get(getRecordControllerById())
    .put((req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('post with ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('post with ID' + id + 'delete');
    });

module.exports = router;
