var express = require('express');
const { createUser } = require('../controllers/Users/createUser');
const { getUser, getUsers } = require('../controllers/Users/getUser');
const { updateUser } = require('../controllers/Users/updateUser');
const { deleteUser } = require('../controllers/Users/deleteUser');
var router = express.Router();

router.post('/user/create', createUser)

router.get('/user/:user_uuid', getUser)

router.get('/users', getUsers)

router.put('/user/update/:user_uuid', updateUser)

router.delete('/user/delete/:user_uuid', deleteUser)

module.exports = router

