const News = require('../models/News');
const errorHandler = require('../utils/error-handlers');

module.exports.getNews = async function (request, response) {
  try {
    const news = await News.find();
    response.status(200).json(news);
  } catch(e) {
    errorHandler(response, e);
  }
};

module.exports.addNews = async function (request, response) {
  try {
    const news = await new News({
      news: request.body.news
    }).save();
    response.status(201).json(news);
  } catch(e) {
    errorHandler(response, e);
  }
};