const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');

module.exports = function (req, res, next) {
    console.log(req.cookies)
    if (!req.cookies.username || !req.cookies.password) {
      // null check
      res.status(403);
      return res.send('You need access to this endpoint!');
    }
    const body = {
      username: req.cookies.username,
      password: req.cookies.password,
    };
    const key = req.cookies.username + '_' + req.cookies.password;
  
    client.get(key, (err, cachedValue) => {
      console.log(err);
      console.log('cached value is', cachedValue);
      if (cachedValue !== null) {
        console.log('cache hit');
        if (cachedValue === 'true') {
            console.log(true);
          return next();
        } else {
          console.log(false);
          res.status(403);
          return res.send('You need access to this endpoint!');
        }
      } else {
        console.log('cache miss');
        // move rest of code in here
        axios.post('http://localhost:3002/login', body)
          .then((resa) => {
            if (resa.data) {
                console.log("valid data");
              client.set(key, true, function(err, result) {
                //check for success/failure here
                if (err) console.log(err);
                else console.log(result);
              });
              client.expire(key, 60*10);
              return next();  
            } else {
                client.set(key, false,  function(err, result) {
                    //check for success/failure here
                    if (err) console.log(err);
                    else console.log(result);
                  });
                client.expire(key, 60*10);

                console.log("invalid data");
              return res.status(403).send('You need access to this endpoint!');
            }
          })
          .catch(console.log);
      }
    });
  }