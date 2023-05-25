const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = await User.findOne({ where: { username } });

    if (!userData || !(await userData.checkPassword(password))) {
      return res.status(400).json({
        message: 'Incorrect username or password, please try again',
      });
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// User logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;