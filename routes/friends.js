const express = require('express');
const controller = require('../controllers/friends');

const router = express.Router();

router.get('/', controller.getFriends);
router.get('/:id', controller.searchById);
router.patch('/:id', controller.addToFriends);
router.delete('/:id', controller.remove);

module.exports = router;