const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({

    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    age: { type: Number, min: 18, max: 65 },
    race: String,
    gender: String,
    collegeyear: String,
    major:String,
    addition:String,
    interests: String,
    
});

module.exports = mongoose.model('Users', usersSchema);