
const Users = require("../models/users");


exports.createUser = function (req, res) {
    try {
        Users.findOne({ username: req.body.username }, function (err, user) {
            if (!user) {
                let newUser = new Users({
                    username: req.body.username,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    age: req.body.age,
                    email: req.body.email,
                    
                    collegeYear: '',
                    gender: '',
                    pronoun: '',
                    listed: '',
                    preference: '',
                    info: '',
                });

                newUser.save(function (err) {
                    if (err) return res.status(500).send(err);
                    else return res.status(200).send('Success');
                });
            } else { res.send('Username already taken.'); }
        });
    } catch (e) { res.send(e); }
};


exports.login = function (req, res) {
  Users.findOne( {$and:[{username: req.body.username}, {password: req.body.password}]})
  .then((document) => {
      res.send(document);
  }).catch((e) => {res.send("Unable to retrieve info")})
}
