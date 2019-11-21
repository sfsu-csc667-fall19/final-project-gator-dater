const express = require('express');
const app = express()
const port = process.env.PORT_NUMBER || 80;


app.get('*', (req, res) => {
    res.send("hello from the backend")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))