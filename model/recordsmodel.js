const mongoose = require('mongoose');

const record = new mongoose.Schema(
    {
        artist: { type: String, required: true },
        title:  { type: String, required: true },
        year:   { type: Number, required: true },
        price:  { type: Number, required: true }  

    }    
); 
const recordsModel = mongoose.model('recod', record);

module.exports = recordsModel;
