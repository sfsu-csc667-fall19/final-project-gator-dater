const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
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

// Upload setup
const conn = mongoose.createConnection(mongoURI);
let gfs;
conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
    console.log("Connection Successful");
});
// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                    metadata: req.body.username,
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

// Back End functions

// upload img
app.post('/user/uploadPic', upload.single('img'), (req, res) => {
    // res.json({ file: req.file });
    // res.redirect('/');
    res.send(true);
});

// get img 
app.get('/user/profileImage/:username', (req, res) => {
    gfs.files.findOne({ metadata: req.params.username }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    });
});

app.post('/user/editProfile', userController.editProfile);

// TO DO

app.post('/user/editProfilePic',(req, res) => {
    gfs.files.findOne({ metadata: req.body.username }, { _id : 1 }, (err, file) => {
        if (err) res.status(500).send(err);
        if (file)
        {            
            console.log("removing");
            gfs.remove({ _id: file._id, root: 'uploads' }, (err, gridStore) => {
                if (err) {
                  return res.status(404).json({ err: err });
                }
            });
            res.json(true);
        }
        // upload.single('img');
        res.send(true);
    })

});

app.post('/user/listUsers', userController.listUsers);

app.post('/user/returnUser', userController.returnUser);

app.get('*', (req, res) => {
    res.send("hello from the backend")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))