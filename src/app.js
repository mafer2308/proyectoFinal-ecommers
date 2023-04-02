const express = require('express');
const ApiRoutes = require('./routes');
require("dotenv").config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`servidor listening on port ${port}`)
})