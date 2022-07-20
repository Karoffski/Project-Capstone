import express from "express";
const router = express.Router();
import {createToy, getToys, getOneToy, updateToy, deleteToy} from '../controllers/toys.js';

router.get('/', getToys);
router.get('/:id', getOneToy);
router.post('/', createToy);
router.patch('/:id', updateToy);
router.delete('/:id', deleteToy);

export default router;