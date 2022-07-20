import mongoose from 'mongoose';

const toySchema = new mongoose.Schema({
  title: String,
  url: String
})

const Toy = mongoose.model('toy', toySchema);

export default Toy;