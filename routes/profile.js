const express = require('express');
const controller = require('../controllers/profile');

const router = express.Router();

router.get('/', controller.getData);

module.exports = router;