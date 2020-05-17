const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users.controller');

/**
 * endpoint '/api/users/'
 */
router.get('/', UserController.getUser);
router.get('/mongodb', UserController.getUserFromMongoDB);

module.exports = router;
