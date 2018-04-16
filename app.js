#!/usr/bin/env node

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const path = require('path');


const config = require('./config.js');

//set static directory public so that html knows where to look for pictures and stylesheets
app.use(express.static('index.html'));

// Serve static files out of the 'public' directory
app.use(express.static(path.join(__dirname)));

console.log('dirname');
console.log(__dirname + '/index.html');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'));
});


app.listen(config.port, () => {
    console.log(`Now running on port ${config.port}`);
    // Once it is started, establish the database connection
});

