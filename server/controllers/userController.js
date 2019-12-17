const User = require("../models/users")

exports.editProfile = function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) return res.status(500).send(err);
    if (user) {
      if (req.body.password) user.password = req.body.password;
      if (req.body.firstName) user.firstName = req.body.firstName;
      if (req.body.lastName) user.lastName = req.body.lastName;
      if (req.body.email) user.email = req.body.email;

      if (req.body.collegeYear) user.collegeYear = req.body.collegeYear;
      if (req.body.gender) user.gender = req.body.gender;
      if (req.body.pronoun) user.pronoun = req.body.pronoun;
      if (req.body.listed) user.listed = req.body.listed;
      if (req.body.preference) user.preference = req.body.preference;
      if (req.body.info) user.info = req.body.info;
      user.save();
      res.status(200).send(user);
    }
    else { return res.status(404).send('User does not exist.'); }
  }).then().catch(err => res.send(err));
}

exports.listUsers = function (req, res) {
  let query;

  if (req.body.preference === 'E') { query = {}; }
  else { query = { $or: [{ listed: req.body.preference }, { listed: 'E' }] } }

  User.find(query).select('username -_id')
    .then((docs) => { res.send(docs) })
    .catch((e) => { res.send('find ERROR') });
}

exports.returnUser = function (req, res) {
  User.findOne({ username: req.body.username })
    .then((document) => { res.send(document) })
    .catch((e) => { res.send('fineOne ERROR') });
}

exports.likeUser = function (req, res) {
  User.findOne({ username: req.body.userA })
    .then((document) => {
      let tempArray = [];
      if (document.likes.length > 0) { tempArray = document.likes; }
      tempArray.push(req.body.userB);

      User.updateOne({ username: req.body.userA }, { $set: { likes: tempArray } }, function (err, doc) {
        if (err) {
          console.log('updateOne ERROR: ' + err);
          res.send('updateOne Fail');
        }
        else {
          console.log(req.body.userB + ' liked');
          res.send('Success');
        }
      });
    }).catch((e) => {
      console.log('findOne ERROR')
      res.send('findOne Fail');
    });
}

exports.unlikeUser = function (req, res) {
  User.findOne({ username: req.body.userA })
    .then((document) => {
      let tempArray = document.likes;
      tempArray = tempArray.filter(e => e !== req.body.userB);

      User.updateOne({ username: req.body.userA }, { $set: { likes: tempArray } }, function (err, doc) {
        if (err) {
          console.log('updateOne ERROR: ' + err);
          res.send('updateOne Fail');
        }
        else {
          console.log(req.body.userB + ' unliked');
          res.send('Success')
        }
      });
    }).catch((e) => {
      console.log('findOne ERROR');
      res.send('findOne Fail');
    });
}

exports.checkLike = function (req, res) {
  User.findOne({ username: req.body.userA })
    .then((document) => {
      let tempArray = document.likes;
      if (tempArray.indexOf(req.body.userB) > -1) { res.send(true); }
      else { res.send(false); }
    });
}

exports.mutual = function (req, res) {
  User.findOne({ username: req.body.userA })
    .then((doc1) => {
      if (doc1.likes.length < 1) { res.send(false) }
      else {
        let arr1 = doc1.likes;

        User.findOne({ username: req.body.userB })
          .then((doc2) => {
            if (doc2.likes.length < 1) { res.send(false) }
            else {
              let arr2 = doc2.likes;

              if (arr1.indexOf(req.body.userB, 0) > -1 &&
                arr2.indexOf(req.body.userA, 0) > -1) { res.send(true) }
              else { res.send(false) };
            }
          }).catch((e) => { res.send('userB does not exist') });
      }
    }).catch((e) => { res.send('userA does not exist') });
}