const express = require('express');
const passport = require('passport');

const controller = require('../controllers/news');

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.getNews);

module.exports = router;