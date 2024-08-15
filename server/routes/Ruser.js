const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// get /users/register
router.get('/register', controller.getUsers);
// post /users/register
//router.post('/register', uploadProfile.single('profile_img'), controller.postUsers);

// get /users/login
router.get('/login', controller.getLogin);

// post /users/login
router.post('/login', controller.postLogin);

//post /users/logout
router.get('/logout', controller.getLogout);



module.exports = router;