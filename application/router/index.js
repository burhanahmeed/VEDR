const express = require('express');
const router = express.Router();

const User = require('./users.router');

router.get('/', (request, response) => {
	response.status(200).json({
		status: 200
	})
});
router.use('/users', User);

module.exports = router