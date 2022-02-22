const express = require('express');
const  
    { 
        usersControllerGet,
        postUserController,
        getUsersControllerById,
        putUsersControllerById,
        deleteUsersControllerById 
    } = require('../controller/users/userscontroller');
const router = express.Router();

router.route('/')
    .get(usersControllerGet)
    .post(postUserController);
    
router.route('/:id')
    .get(getUsersControllerById)
    .put(putUsersControllerById)
    .delete(deleteUsersControllerById);

module.exports = router;
