import Conversation from "../models/conversationModel.js";
import Message from "../models/messageSchema.js";

export const getConversations =  async (req, res) => {
    try {
        const listConversations = await Conversation.find()
        .populate('messages')
        res.status(200).json(listConversations);
    } catch (error) {
        res.status(404).json({message: error.message})
    }  
}

export const getOneConversation = async (req, res) => {
    try {
        const myConversation = await Conversation.findById({_id: req.params.id}).populate('messages')
        res.status(200).json(myConversation);
    } catch (error) {
        res.status(404).json({message: error.message })
    } 
}

export const createConversation = async (req, res) => {
    try {
        const newMessage = await Message.create({
            content: req.body.content,
            date: new Date()
        })

        const newConversation = await Conversation.create({
            creator: req.body.creator,
            title: req.body.title,
            category: req.body.category,
            messages: [newMessage._id]
        })
        res.status(200).json(newConversation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
} 


export const createMessage = async (req, res) => {
    try {
        const newMessage = await Message.create({
            author: req.body.author,
            content: req.body.content,
            date: new Date()
        })
        
        res.status(200).json(newMessage)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateConversation = async (req, res) => {
    try {
        let updateConversation = await Conversation.findById({_id: req.params.id})

        .save()

        res.status(200).json(addedAuthor)
    } catch (error) {
        res.status(404).json({message: error.message })
    }   
}

export const deleteConversation = async (req, res) => {
    try {
        const deletedConversation = await Conversation.deleteOne({_id: req.params.id})
        res.status(200).json(deletedConversation)
    } catch(error) {
        res.status(404).json({message: error.message })
    }  
}