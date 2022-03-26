const express = require('express')
const router = express.Router()
const Post = require('../modals/Post')
const User = require('../modals/User')
const {cloudinary} = require('../utils/Cloudinary')

//create post

router.post('/',async(req,res)=>{
    const newPost = await new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch(error){
        res.status(500).json(err)
    }
})

//get timeline posts
router.get('/timeline/:userId',async(req,res) => {
    
    try{
        const currentUser = await User.findById(req.params.userId)
        const userPost = await Post.find({userId:currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({userId:friendId})
            })
        )
        res.status(200).json(userPost.concat(...friendPosts))
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

//! like or dislike post
router.put('/:id/like', async(req,res) => {
    try{
        const post  = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{ likes: req.body.userId}})
            res.status(200).json("The post has been Liked")
        }
        else{
            await post.updateOne({$pull:{likes: req.body.userId}})
            res.status(200).json('The post has been disliked')
        }
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

//! get users's all posts
router.get('/profile/:username',async(req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username})
        const posts = await Post.find({userId:user._id})
        res.status(200).json(posts)

    }
    catch(err)
    {
        res.status(500).json(err)
    }
})

//! upload a image
router.post('/upload',async(req,res)=>{
    try {
        const fileStr = req.body.image
        const uploadResponse = await cloudinary.uploader.upload(fileStr)
        res.status(200).json(uploadResponse.secure_url)
    } catch (error) {
        console.log(22);
        console.log(error);
        res.status(500).json(error)
    }
})
//! delete post
router.delete('/:id', async(req,res) => {
    
    
    try {
        const post = await Post.findById(req.params.id)
            console.log(post.userId);
            await post.deleteOne()
            res.status(200).json('the post has been deleted')
        
        
            // res.status(403).json('you can delete only your post')
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
module.exports = router