const Post = require("../models/postModel");
const { post } = require("../routes/blog");

exports.createPost = async(req,res)=>{
  try{
    const {title, body} = req.body;

    const post = new Post({title, body});

    const savedPost = await post.save();

    res.status(200).json({post: savedPost, message: "New Post is Created Successfully"})

  }catch(err){
    return res.status(400).json({message: "Error in saving new post in database",error: err.message});
  }
}

exports.getAllPosts = async(req,res)=>{
  try{
    const allposts = await Post.find().populate("comments").exec();

    res.status(200).json({
      data: allposts,
      message: "All post data is fetched successfully"
    })
  }
  catch(err){
    console.log(error);
    res.status(400).send({
      message: 'Error in getting all posts'
    })
  }
}