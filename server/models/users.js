const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({

    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age: { type: Number, min: 18, max: 65 },
    email: String,

    gender: String,
    listed: String,
    preference: String,
    collegeyear: String,
    interests: String,

    likes: Array,
});

module.exports = mongoose.model('Users', usersSchema);