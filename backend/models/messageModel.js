import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
        author: String,
        content: String,
        date: Date
})

const Message = mongoose.model('message', messageSchema);

export default Message;