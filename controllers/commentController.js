const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

//bussiness logic

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body

    const comment = new Comment({ post, user, body })

    const savedComment = await comment.save()

    //find the post by id and add a new comment in it
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate("comments").exec() //populate the comment array with comment documents

    res.status(200).json({
      post: updatedPost
    })
  } catch (err) {
    return res.status(400).json({
          message: err.message,
          error: 'Error in creating the comment'
    })
  }
}
