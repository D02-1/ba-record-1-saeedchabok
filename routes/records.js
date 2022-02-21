const express = require('express');
const 
    { 
        getRecordController, 
        postRecordController, 
        getRecordControllerById, 
        putRecordControllerById, 
        deleteRecordControllerById 
    } 
= require('../controller/records/recordscontroller');
const router = express.Router();

router.route('/')

    .get(getRecordController())
    .post(postRecordController());

router.route('/:id')
    .get(getRecordControllerById)
    .put(putRecordControllerById())
    .delete(deleteRecordControllerById());

module.exports = router;
