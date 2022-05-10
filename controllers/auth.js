const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const User = require('../models/User');

module.exports.login = async function (request, response) {
  const candidate = await User.findOne({
    email: request.body.email
  });

  // if user doesn't exist, throw error, otherwise login user
  if (candidate) {
    const passwordResult = bcrypt.compareSync(request.body.password, candidate.password);

    // generation of token if password valid
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, 
      keys.jwt, 
      { expiresIn: 60 * 60}); // in seconds

      response.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      response.status(401).json({
        message: 'password do not match, try again'
      });
    }
  } else {
    response.status(404).json({
      message: 'This email doesnt registered',
    })
  }
};

module.exports.register = async function (request, response) {
  // check email for unique
  const candidate = await User.findOne({
    email: request.body.email,
  });

    // if user already exist, throw error, otherwise to create new user
  if (candidate) {
    response.status(409).json({
      message: 'This email is already registered',
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = request.body.password;
    const user = new User({
      email: request.body.email,
      password: bcrypt.hashSync(password, salt),
    });

    try {
      await user.save();
      response.status(201).json(user);
    } catch(e) {
      // TODO: to do an error
    }
    
  }
};
