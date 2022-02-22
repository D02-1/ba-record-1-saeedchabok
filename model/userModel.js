const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        Passwort: String 
    });
const userModel = mongoose.model('user', user);

module.exports = userModel;
