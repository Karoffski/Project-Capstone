import mongoose from 'mongoose';

const marketSchema = new mongoose.Schema({
  title: String,
  url: String
})

const Market = mongoose.model('toy', marketSchema);

export default Market;