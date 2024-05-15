const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usersDB = require('../models/users');
const TOKEN_SECRET = "sE6ret0gfknf";

const login = async (req, res) => {
  try {
    const user = await usersDB.findOne({ "_id": req.body._id })
    console.log(user)
    if (!user) {
      res.status(404).send('User not found')
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      res.status(401).send('Invalid password')
    }
    const token = jwt.sign({ userName: user.userName, password: user.password, email: user.email }, TOKEN_SECRET);
    res.header("auth-token", token).send({ "token": token });
  }
  catch (err) {
    res.status(500).send('kk' + err.message);
  }
};

const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    const users = await getUsers();
    // let userId;
    // if (users.length == 0) {
    //   userId = 1;
    // } else {
    //   userId = users[users.length - 1].id + 1;
    // }
    const newUser = new usersDB({ userName: req.body.userName, password: hasPassword, email: req.body.email });
    await newUser.save();
    res.status(201).send('User saved successfully' + newUser)
  } catch (err) {
    res.status(500).send(err.message)
  }
};

const getUsers = async () => {
  return await usersDB.find();
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersDB.findById(userId)
    res.send(user);
  } catch (err) {
    res.status(404).send('user not found');
  }
};

module.exports = {
  login,
  signUp,
  getUser
};

