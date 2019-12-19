
const Users = require("../models/users");

const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient("localhost:3002/"),
    producer = new Producer(client);
    
producer.on('ready', function () {
    console.log("Producer ready")
});

producer.on('login', function(msg) {
    console.log("22");
})
 
producer.on('error', function (err) { console.log(err)})

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
      console.log("hi")
  }).catch((e) => {res.send("Unable to retrieve info")})
}


// exports.login = function (req, res) {
//     console.log("1")
//     payload = [
//         {topic:"login", username: req.body.username, password: req.body.password}
//     ];

//     producer.send(payload, (err, data) => {
//         console.log("2")

//         // Users.findOne( {$and:[{username: req.body.username}, {password: req.body.password}]})
//         // .then((document) => {
//         //     res.send(document);
//         // }).catch((e) => {res.send("Unable to retrieve info")})
//     })

// }