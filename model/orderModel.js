const mongoose = require('mongoose');

const order = new mongoose.Schema({ quantity: { type: Number, required: true } }); 
const orderModel = mongoose.model('order', order);

module.exports = orderModel;
