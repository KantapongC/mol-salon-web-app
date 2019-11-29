const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load User Model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
	res.json({
		msg: 'Users Works'
	});
});

// @route   Post api/users/register
// @desc    Register
// @access  Public
router.post('/register', async (req, res) => {
	const { username, password, password2 } = req.body;

	try {
		const user = await User.findOne({ username });

		if (user) return res.status(400).json({ status: 'Failed', message: 'Username already exists' });

		const salt = await bcrypt.genSalt(10);
		const hashed = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			password: hashed
		});

		const addedUser = await newUser.save();

		return res.json({ status: 'Success', result: addedUser });
	} catch (error) {
		next(error);
	}
});

// @route   Get api/users/current
// @desc    Return Current User
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	});
});

module.exports = router;
