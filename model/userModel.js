const mongoose = require('mongoose');
const crypto = require('crypto');
const { userProfileSchema } = require('./userProfile'); 
const user = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        Password: String,
        profile: userProfileSchema
    });
hashPassword = (Password) =>
{
    const secret = 'xyz';
    const hash = crypto.createHmac('sha256', secret).update(Password).digest('hex');
    return hash;
};

const userModel = mongoose.model('user', user);

module.exports = userModel;
