let users = require('../../public/initusers');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const getUsersController = () =>
{
    return( req, res) => 
    {
        res.status(200).send(users);
    };
};

module.exports = getUsersController;
