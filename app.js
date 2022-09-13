
const express = require('express');
const bodyParser = require('body-parser');

const route = require('./src/routes');

const app = express();

// use of body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //it will receive json file

// set base of route
app.use('/', route); // this is middleware

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});


module.exports = app;
