var path = require('path');
// console.log(path.resolve(__dirname, '../app.js'))
var updater = require(path.resolve(__dirname, '../app.js')); // connecting between feed.js to app.js
var obj = updater.jsonObject;
setTimeout(() => {
    console.log('after time out ', obj)
},3000);
exports.getPosts = (req, res, next) => {
    res.json(getRandomPics(obj,4));
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created successfully',
        post: {id: new Date().toISOString(), title: title, content: content }
    });
};

function getRandomPics(object, n) {
    let output = [];
    for (var i = 0; i < n; i++) {
    var properties = Object.getOwnPropertyNames(object);
    var index = Math.floor(Math.random() * properties.length);
    output.push(object[properties[index]]); 
    }
    console.log(output);
    return output;
}