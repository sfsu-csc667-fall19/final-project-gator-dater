
const Users = require("../models/users");


exports.createUser = function (req, res) {
    try {
        Users.findOne({ username: req.body.username }, function (err, user) {
            if (!user) {
                let newUser = new Users({
                    username: req.body.username,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.firstName,
                    email: req.body.email,
                    collegeyear: req.body.collegeyear,
                    major: req.body.major,
                    addition: req.body.addition,
                    age: req.body.age,
                    race: req.body.race,
                    gender: req.body.gender,
                    collegeyear: req.body.collegeyear,
                    interests: req.body.interests,
                });

                newUser.save(function (err) {
                    if (err) return res.status(500).send(err);
                    else return res.status(200).send('Success!');
                });
            } else {
                res.send('Username already taken.');
            }
        });
    } catch (e) {
        console.log(e);
        res.send(e);
    }
};

exports.login = function (req, res) {
  Users.findOne( {$and:[{username: req.body.username}, {password: req.body.password}]}, function (err, user) {
    if (user) { return res.send(true); }
    else { return res.send(false); }
  })
}
