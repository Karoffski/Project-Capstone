import Conversation from "../models/conversationModel.js";

export const getConversations =  async (req, res) => {
    try {
        const listConversations = await Conversation.find()
        res.status(200).json(listConversations);
    } catch (error) {
        res.status(404).json({message: error.message })
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
        const newConversation = await Conversation.create({
            title: req.body.title,
            category: req.body.category,
            author: req.body.message.author, 
            contenu: req.body.message.contenu, 
            date: req.body.message.date
        })
        res.status(200).json(newConversation)
    } catch (error) {
        res.status(404).json({message: error.message })
    }    
}

export const updateConversation = async (req, res) => {
    try {
        let updateConversation = await Conversation.findById({_id: req.params.id})
        const addedAuthor = await updateConversation.message.author.push(req.body.author)
        addedAuthor.save()

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