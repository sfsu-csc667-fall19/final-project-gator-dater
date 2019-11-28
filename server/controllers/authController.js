
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

exports.uploadPic = function (req, res) {
    res.send(req.files);
}

exports.getPic = function (req, res) {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: "No file exists"
        });
      }
  
      // Check if image
      if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({
          err: "Not an image"
        });
      }
    });
  };