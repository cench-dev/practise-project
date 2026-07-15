import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { createBook } from '../controllers/bookController';
import { getUserBooks } from '../controllers/bookController';
const router = Router();

router.post('/', authMiddleware, createBook);
router.get('/user/:id', getUserBooks);

export default router;