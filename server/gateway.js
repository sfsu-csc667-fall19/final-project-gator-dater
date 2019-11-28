const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT || 80;
const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  console.log(err)
  res.status(500).send('Proxy Error');
});

app.all("/login" || "/createUser", (req, res) => {
  // auth
  console.log(req.path)
  apiProxy.web(req, res, {
    target: 'http://localhost:3002',
  });
})

app.all("/createUser" || "/createUser", (req, res) => {
  // auth
  console.log(req.path)
  apiProxy.web(req, res, {
    target: 'http://localhost:3002',
  });
})

app.all("/user/*", (req, res) => {
  // service1
  console.log(req.path)
  apiProxy.web(req, res, {
    target: 'http://localhost:4000',
  });
});

app.all("*", (req, res) => {
  // front end server / react
  apiProxy.web(req, res, {
    target: 'http://localhost:3000',
  });
});

app.listen(port, () => console.log(`Gateway on port ${port}!`))