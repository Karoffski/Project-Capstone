import express from "express";
const router = express.Router();
import {createMessage, createConversation, getConversations, getOneConversation, updateConversation, deleteConversation} from '../controllers/conversations.js';

router.get('/', getConversations);
router.get('/:id', getOneConversation);
router.post('/', createConversation);
router.post('/:id', createMessage);
router.put('/:id', updateConversation);
router.delete('/:id', deleteConversation);

export default router;