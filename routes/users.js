const express = require('express');
const  { usersControllerGet, postUserController } = require('../controller/users/userscontroller');
const router = express.Router();

router.route('/')
    .get(usersControllerGet())
    .post(postUserController());
    
router.route('/:id')
    .get((req, res) => 
    {
        const user = users.find(item => item.id == req.params.id);
        if (user && user.id)
            res.status(200).send(`${user.id} , ${user.firstName} `);
        else
            res.status(404).send('cannot found the user');
    })
    .put((req, res ) => 
    {
        const { id } = req.params;
        res.status(200).send('user with ID' + id + 'edited');
    })
    .delete(( req, res) => 
    {
        const { id } = req.params;
        res.status(200).send('user with ID' + id + 'delete');
    });

module.exports = router;
