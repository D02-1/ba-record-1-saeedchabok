const mongoose = require('mongoose');
const { userProfileSchema } = require('./userProfile'); 
const user = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        Passwort: String,
        profile: userProfileSchema
    });
const userModel = mongoose.model('user', user);

module.exports = userModel;
