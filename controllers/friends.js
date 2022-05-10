// Shows all users friends
module.exports.getFriends = function (request, response) {
  response.status(200).json({
    friends: 'getFriends from controller',
  });
};
// Search user by id
module.exports.searchById = function (request, response) {
  response.status(200).json({
    friends: 'searchById from controller',
  });
};
// Add to friend list
module.exports.addToFriends = function (request, response) {
  response.status(200).json({
    friends: 'addToFriends from controller',
  });
};
// Remove member from friend list
module.exports.remove = function (request, response) {
  response.status(200).json({
    friends: 'remove from controller',
  });
};

// TODO: request fot getting friend's profile
module.exports.getById = function (request, response) {
  response.status(200).json({
    friends: 'friends from controller',
  });
};