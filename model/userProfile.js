const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema(
    {
        education: String,
        darkMode: Boolean,
        Phone: String 
    }, { timestamps: true, _id: false });
const userModelProfile = mongoose.model('userProfile', userProfileSchema);

module.exports =  { userModelProfile, userProfileSchema };
