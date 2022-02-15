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

module.exports =
{
    usersControllerGet,
    postUserController
};
