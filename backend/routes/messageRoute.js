import express from "express";
const router = express.Router();
import {getMessages} from '../controllers/messages.js';

router.get('/', getMessages);
// router.post('/', createConversation);

export default router;