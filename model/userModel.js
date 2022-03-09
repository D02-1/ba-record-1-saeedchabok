const mongoose = require('mongoose');
const crypto = require('crypto');
const { userProfileSchema } = require('./userProfile'); 
const user = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        Password:{ type : String, required : true },
        profile: userProfileSchema
    });
hashPassword = (Password) =>
{
    const secret = 'xyz';
    const hash = crypto.createHmac('sha256', secret).update(Password).digest('hex');
    return hash;
};  
user.methods.comparePassword = function (loginPassword)
{
    if(this.Password !== hashPassword(loginPassword))
    {
        return false;
    }
    return true;
};
const userModel = mongoose.model('user', user);

module.exports = userModel;
