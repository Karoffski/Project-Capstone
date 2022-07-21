import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
        title: String,
        category: String,
        messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'message'}]
})

const Conversation = mongoose.model('conversation', conversationSchema);

export default Conversation;