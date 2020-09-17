const express = require('express')
const app = express()
const data = require('./data/data.json')

const port = 4200

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})