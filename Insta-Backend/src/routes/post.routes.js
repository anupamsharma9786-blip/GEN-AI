const express = require('express')
const postController = require('../controllers/post.controller')
const multer = require('multer')
const identifyUser = require('../middlewares/auth.middleware')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const postRouter = express.Router()

/**
 * POST /api/posts/ [protected]
 */
postRouter.post("/", upload.single('Image'), identifyUser, postController.createPostController)

/**
 * GET /api/posts [protected]
 */
postRouter.get("/", identifyUser, postController.getPostController)

/**
 * GET /api/posts/details/:postId [protected]
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

/**
 * POST /api/posts/like/postid
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)


module.exports = postRouter