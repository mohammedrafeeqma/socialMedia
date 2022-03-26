const express = require('express')
const Conversation = require('../modals/Conversation')
var router = express.Router()

//new conversation
router.post('/', async(req,res)=>{
    const newConversation = new Conversation({
        members:[req.body.senderId, req.body.recieverId]
    })
    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get conversation of a user
router.get('/:userId', async(req,res)=>{
    try {
        const conversation = await Conversation.find({
            members:{$in:[req.params.userId]}
        })
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router