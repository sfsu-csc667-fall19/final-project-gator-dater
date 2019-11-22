
const Users = require("../models/users");
const Images = require("../models/images");


exports.createUser = function (req, res) {
    try {

        Users.findOne({ username: req.body.username }, function (err, user) {
            if (!user) {
                let newUser = new Users({
                    username: req.body.username,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.firstName,
                    age: req.body.age,
                    race: req.body.race,
                    gender: req.body.gender,
                    collegeYear: req.body.collegeYear,
                    intrests: req.body.intrests,
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