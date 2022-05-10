const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const newsScheme = new Schema({
  news: {
    type: String
  }
})

module.exports = mogoose.model('news', newsScheme);