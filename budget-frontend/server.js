/**
 * Created by Jonathan on 5/29/2017.
 */
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const api = require('./server/routes/api');
const billRoutes = require('./server/routes/bill');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const app = express();

mongoose.connect('localhost:27017/killerkast-budget');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
app.use('/bills', billRoutes);


app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen('3000', function(){
  console.log("Listening on localhost:3000");
});
