import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
        creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
        title: String,
        category: String,
        messages: [{type: mongoose.Schema.Types.ObjectId, ref:'Message'}]
})

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation