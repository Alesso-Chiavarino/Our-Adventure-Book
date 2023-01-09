import { Router } from 'express'
import { getTasks, getTask, updateTask, createTask, deleteTask } from '../../controllers/tasks.controller.js';

const router = Router();

router.get('/', getTasks);

router.get('/:id', getTask);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

export default router;