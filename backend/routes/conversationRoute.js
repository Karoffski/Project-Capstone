import express from "express";
const router = express.Router();
import {createConversation, getConversations, getOneConversation, updateConversation, deleteConversation} from '../controllers/conversations.js';


router.get('/', getConversations);
router.get('/:id', getOneConversation);
router.post('/', createConversation);
router.put('/:id', updateConversation);
router.delete('/:id', deleteConversation);

export default router;