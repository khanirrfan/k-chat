const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await User.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/:user_id
// @desc     Get user by user ID
// @access   Public
router.get('/:user_id', async (req, res) => {

  try {
    const profile = await User.findById(req.params.user_id)
    if (!profile) return res.status(400).json({ msg: 'user not found' });

    res.json(profile);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'user not found' });
    }
    res.status(500).send('Server Error');
  }
});


module.exports = router;
