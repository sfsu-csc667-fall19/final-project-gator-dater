const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 4000;

// controller
let userController = require('./controllers/userController');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Mongo setup
const mongoURI = "mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true });

// Back End functions
app.post("/user/uploadPic", userController.uploadPic);
app.get("/user/getPic", userController.getPic);

app.get('*', (req, res) => {
    res.send("hello from the backend")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))