const express = require('express');
const passport = require('passport');

const controller = require('../controllers/friends');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.getFriends);
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.searchById);
router.patch('/:id', passport.authenticate('jwt', { session: false }), controller.addToFriends);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove);

module.exports = router;