const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Users routes
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);

module.exports = router;
