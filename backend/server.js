// Imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import conversationRoute from './routes/conversationRoute.js'
import messageRoute from './routes/messageRoute.js'

dotenv.config()

// Variables
const app = express();
const PORT = process.env.PORT || 4000;
const database = process.env.MONGO_URI;

// Parser
app.use((cors()));
app.use((express.json({extended: true})))
app.use((express.urlencoded({ extended: true})))

// Routes
app.use('/users', userRoute)
app.use('/conversations', conversationRoute)
app.use('/messages', messageRoute)


// MDB connexion
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connection to MongoDB has been established'))
.then(() => app.listen(PORT, () => console.log('Server has started at port ' + PORT)))
.catch((error) => console.log(error.message) & process.exit(1))