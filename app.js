const express = require("express");
const bodyParser = require('body-parser');
const http = require('http');
const feedRoutes = require('./routes/feed');
// const feedControllers = require('./controlles/feed');

const app = express();

var jsonObject;

app.use(bodyParser.json());

app.use('/feed',feedRoutes);

app.listen(8080);

// get JSON from URL and save it to file
http.get({
    host: 'j0.wlmediahub.com',
    path: 'http://j0.wlmediahub.com/App_Themes/api/test/photos.js'
  }, (response) => {
    // get data
    let body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      // manipulate received data
      let parsed = JSON.parse(body);
      jsonObject = parsed.photo;
      // console.log(parsed); 
    });
  });

// setTimeout(() => {
//      console.log('after time out ',jsonObject);
// },3000);

// setTimeout(() => {
//     module.exports.jsonObject;
// },3000);




