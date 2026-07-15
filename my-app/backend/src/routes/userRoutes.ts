import { Router } from 'express';
import { getUserBooks } from '../controllers/userController';

const router = Router();

router.get('/:id/books', getUserBooks);

export default router;