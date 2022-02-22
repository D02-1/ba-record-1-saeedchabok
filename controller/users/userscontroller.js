const User = require('../../model/userModel');
const mongoose = require('mongoose');

const usersControllerGet = async (req, res) =>
{
    const userAll = await User.find();
    res.status(200).send(userAll);
};

const postUserController = async (req, res) =>

{
    const newUser = new User(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            Password: req.body.password,
        });
    try 
    {
        await newUser.save();
        res.status(200).send(newUser);
    }
    catch(error)
    {
        console.log(error.message);
    }     
};

const getUsersControllerById = async (req, res) =>
{
    const { id } = req.params;
    const controllId = mongoose.isValidObjectId(id);
    if(!controllId)
        return res.status(400).send('bad id');
    const userByID = await User.findById(id);
    if(userByID)
        res.status(200).send(userByID);    
    else
    {
        res.status(404).send('can not found the User');
    }
};

const putUsersControllerById = async (req, res ) =>
{
    const { id } = req.params;
    const controllId = mongoose.isValidObjectId(id);
    if(!controllId)
        return res.status(400).send('bad id');
    const findUserById = await User.findById(id);
    if(!findUserById)
        return res.status(404).send('can not found record Id');

    findUserById.firstName= req.body.firstName || findUserById.firstName;
    findUserById.lastName= req.body.lastName || findUserById.lastName;
    findUserById.email= req.body.email || findUserById.email;
    findUserById. Password= req.body. Password || findUserById. Password;
    try 
    {
        await findUserById.save();
        res.status(200).send(findUserById);
    }
    catch(error)
    {
        console.log(error.message);
    }    
   
};

const deleteUsersControllerById = async (req, res) =>
{
    const controllId = mongoose.isValidObjectId(req.params.id);
    if(!controllId)
        return res.status(400).send('bad id');
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser)
        return res.status(404).send('can not found User Id');
    res.status(200).send(`id ${req.params.id} deleted`);
};

module.exports =
{
    usersControllerGet,
    postUserController,
    getUsersControllerById,
    putUsersControllerById,
    deleteUsersControllerById
};
