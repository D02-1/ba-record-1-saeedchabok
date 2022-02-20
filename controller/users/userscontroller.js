let users = require('../../public/initusers');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const usersControllerGet = () =>
{
    return( req, res) => 
    {
        res.status(200).send(users);
    };
};

const postUserController = () =>
{
    return(req, res) => 
    {
        const user =
        {
            id: users[ users.length - 1 ].id + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            Password: req.body.password,
        };
        users.push(user);
        res.status(200).send(user);
    };
};

const getUsersControllerById = () =>
{
    return(req, res) => 
    {
        const user = users.find(item => item.id == req.params.id);
        if (user && user.id)
            res.status(200).send(`${user.id} , ${user.firstName} `);
        else
            res.status(404).send('cannot found the artist');
    };
};

const putUsersControllerById = () =>
{
    return(req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('post with ID' + id + 'edited');
    };
};

const deleteUsersControllerById = () =>
{
    return( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('post with ID' + id + 'delete');
    };
};

module.exports =
{
    usersControllerGet,
    postUserController,
    getUsersControllerById,
    putUsersControllerById,
    deleteUsersControllerById
};
