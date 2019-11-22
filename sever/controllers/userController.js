const Users = require("../models/users")

exports.createUser = function (req, res) {
    try{

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
    