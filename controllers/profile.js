module.exports.getData = function (request, response) {
  response.status(200).json({
    profile: 'getData from controller',
  });
};