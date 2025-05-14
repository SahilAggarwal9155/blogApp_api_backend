const express = require('express');

const router = express.Router();

// const { dummyLike } = require('../controllers/likeController');
const { likePost } = require('../controllers/likeController')
const { createComment } = require('../controllers/commentController');
const { createPost, getAllPosts } = require('../controllers/postController');


// dummyLike.router('/dummyRoute',dummyLike);
router.post('/comments/create',createComment);
router.post('/posts/create',createPost);
router.get('/allposts',getAllPosts);
router.get('/likes/like',likePost);

module.exports = router;