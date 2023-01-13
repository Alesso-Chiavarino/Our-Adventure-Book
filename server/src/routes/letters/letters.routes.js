import { Router } from 'express';
import { getLetters, getLetter, createLetter, updateLetter, deleteLetter } from '../../controllers/letters.controller.js';

export const router = Router();

router.get('/', getLetters);

router.get('/:id', getLetter);

router.post('/', createLetter);

router.put('/:id', updateLetter);

router.delete('/:id', deleteLetter);

export default router;