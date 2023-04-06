const express = require('express');
const ApiRoutes = require('./routes');
require("dotenv").config();

const port = process.env.PORT

const app = express();

app.use(express.json());

ApiRoutes(app);

app.use((error, req, res, next) =>{
  res.status(400).json(error);
 });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`servidor listening on port ${port}`)
})