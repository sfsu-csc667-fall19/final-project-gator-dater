const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

app.post("/user/createUser", userController.createUser); 

app.get('*', (req, res) => {
    res.send("hello from the backend")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))