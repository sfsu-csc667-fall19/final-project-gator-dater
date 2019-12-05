const express = require('express');
const authController = require('./controllers/authController');
const app = express();
const port = 3002;

//Mongoose requirements
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true });

//Body parser is for casting req.body.username and req.body.username which are objects to turn into strings
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/createUser", authController.createUser);
app.post("/login", authController.login);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))