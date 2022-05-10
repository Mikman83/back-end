module.exports.getNews = function (request, response) {
  response.status(200).json({
    news: 'getNews from controller',
  });
};