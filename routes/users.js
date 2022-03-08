const express = require('express');
const validator = require('express-validator');
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
    .post(  validator.body('firstName').isEmail().trim().withMessage('firstName muss eine email adresse sein!'), postUserController);
   
router.route('/:id')
    .get(getUsersControllerById)
    .put(putUsersControllerById)
    .delete(deleteUsersControllerById);

module.exports = router;
