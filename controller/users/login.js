const User = require('../../model/userModel');
const jwt = require('jsonwebtoken');
const signAccessToken = data =>
{
    return jwt.sign(data, 'hamid');
};
const  loginController = async ( req, res) =>
{
    const { firstName, Password } = req.body;
    const foundUser = await User.findOne({ firstName });
    if(foundUser)
    {
        if(foundUser.comparePassword(Password))
        {
            res.header('x-auth-token', signAccessToken({ firstName }) ).status(200).json({ success: true });
        }
        else
        {
            res.status(401).json({ success: false });
        }
    }
    else
    { res.status(404).json({ success: false, message: 'USER NOT FOUND' }); }; 
     
};
module.exports = loginController;
