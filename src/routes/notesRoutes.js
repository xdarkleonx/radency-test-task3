
import express from 'express';
import {
  getNotes,
  getNoteById,
  getStats,
  addNote,
  removeNoteById,
  updateNote
} from '../services/notesService.js';
import { validate } from '../helpers/validate.js';
import { newNoteSchema, editNoteSchema } from '../validations/notesValidation.js';


const router = express.Router();

router.get('/', getNotes);
router.post('/', validate(newNoteSchema), addNote);
router.get('/stats', getStats);
router.get('/:id', getNoteById);
router.delete('/:id', removeNoteById);
router.patch('/:id', validate(editNoteSchema), updateNote);


export default router;