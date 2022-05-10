const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const userScheme = new Schema({
  email: {
    type: String,
    required: true,
    uniq: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mogoose.model('user', userScheme);