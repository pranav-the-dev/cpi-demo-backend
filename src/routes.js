// route work
const express = require('express');

const { fetchAllUser, fetchUserById, fetchUserByEmail, insertUser, updateUser, deleteUserById } = require('./controller');

const router = express.Router();

router.get('/api/fetchAllUser', fetchAllUser);

router.get('/api/fetchUserById/:id', fetchUserById);

router.post('/api/insertUser', insertUser);

router.put('/api/updateUser/:id', updateUser);

router.delete('/api/deleteUserById/:id', deleteUserById);


module.exports = router;
