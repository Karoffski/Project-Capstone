import Message from "../models/messageModel.js";

export const getMessages =  async (req, res) => {
    try {
        const listMessages = await Message.find()
        res.status(200).json(listMessages);
    } catch (error) {
        res.status(404).json({message: error.message })
    }  
}