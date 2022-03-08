const User = require('../../model/userModel');
const validator = require('express-validator');

const loginController = async (req, res) =>

{
    const errors = validator.validationResult(req).errors;
    if(errors.length > 0)
    {
        return res.status(400).send( errors );
    }
    const newUser = new User(
        {
            firstName: req.body.firstName,
            Password: req.body.password,
        });
    try 
    {
        if (!req.body.Password)
        {
            res.status(400).send('password required');
        }
        else
        {
            newUser.Password = hashPassword(req.body.Password);
            await newUser.save();
            res.status(200).send(newUser);
        }
    }
    catch(error)
    {
        console.log(error.message);
    }     
};

module.exports = loginController;
