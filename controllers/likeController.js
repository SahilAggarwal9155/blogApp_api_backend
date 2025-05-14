const Post = require("../models/postModel")
const Like = require("../models/likeModel")

// exports.dummyLike = async(req,res)=>{
//     res.send('This is dummy link page');
// }

exports.likePost= async(req,res)=>{
  try{
    const {post, user} = req.body;
    const like = new Like({
      post,user
    });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}},{new: true});

    res.json({
      post: updatedPost,
    })
  }catch(err){
    return res.status(400).json({
       message: "Error in fetching data"
    })
  }
}