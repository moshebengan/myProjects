const express = require('express');

const feedController = require('../controlles/feed');

const router = express.Router();


//  GET /feed/posts
router.get('/posts', feedController.getPosts);

//  POST /feed/posts
router.post('/posts', feedController.createPost);

module.exports = router;