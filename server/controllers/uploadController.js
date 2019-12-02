const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const mongoURI = "mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority";
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
                const filename = file.originalname;
                const fileInfo = {
                    user: req.body.user,
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});

module.exports = multer({ storage });
// exports.gfs;
