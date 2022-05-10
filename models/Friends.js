const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const friendsScheme = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mogoose.model('friends', friendsScheme);