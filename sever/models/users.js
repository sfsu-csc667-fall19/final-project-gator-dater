const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({

    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age: { type: Number, min: 18, max: 65 },
    race: String,
    gender: String,
    collegeYear: String,
    intrests: String,
    
});

module.exports = mongoose.model('Users', usersSchema);