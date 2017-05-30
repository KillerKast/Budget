/**
 * Created by Jonathan on 5/29/2017.
 */
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen('3000', function(){
  console.log("Hello World");
});
