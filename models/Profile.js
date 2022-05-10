const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const profileScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  firendsList: [
    {
      ref: 'users',
      type: Schema.Types.ObjectId
    }
  ],
  ideas: {
    ref: 'ideas',
    type: Schema.Types.ObjectId
  }
})

module.exports = mogoose.model('profile', profileScheme);