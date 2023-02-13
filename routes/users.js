const controller = require('../controllers/users');
const router = require('express').Router();

// CRUD Routes /users

// get all users
router.get('/', controller.getUsers);

// get user by id
router.get('/:userId', controller.getUser);

// create user
router.post('/', controller.createUser);

// update user
router.put('/:userId', controller.updateUser);

// delete user
router.delete('/:userId', controller.deleteUser);


module.exports = router;