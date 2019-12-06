const User = require("../models/users")

exports.editProfile = function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) return res.status(500).send(err);
    if (user) {
      if (req.body.password) user.password = req.body.password;
      if (req.body.firstName) user.firstName = req.body.firstName;
      if (req.body.lastName) user.lastName = req.body.lastName;
      if (req.body.email) user.email = req.body.email;
      if (req.body.age) user.age = req.body.age;
      if (req.body.race) user.race = req.body.race;
      if (req.body.gender) user.gender = req.body.gender;
      if (req.body.collegeyear) user.collegeyear = req.body.collegeyear;
      if (req.body.major) user.major = req.body.major;
      if (req.body.addition) user.addition = req.body.addition;
      if (req.body.interests) user.interests = req.body.interests;
      user.save();
      res.status(200).send(user);
    }
    else { return res.status(404).send('User does not exist.'); }
  }).then().catch(err => res.send(err));
}

exports.listUsers = function (req, res) {
  let query;
  if (req.body.pref === 'E') { query = {}; }
  else { query = {$or:[ {listed: req.body.pref}, {listed: 'E'} ]}}

  User.find(query)
      .then((docs) => {
      res.send(docs);
      }).catch((e) => { res.send('Error'); });
}

exports.returnUser = function (req, res) {
  User.findOne({ username: req.body.username })
      .then((document) => {
        res.send(document);
      }).catch((e) => { res.send('Error'); });
}