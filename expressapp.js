const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.statusCode=200;
    const data=fs.readFileSync('index.html');
    res.end(data.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})