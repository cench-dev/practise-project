import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { createBook, markBookAsRead } from '../controllers/bookController';
import { getUserBooks } from '../controllers/bookController';
const router = Router();

router.post('/', authMiddleware, createBook);
router.get('/user/:id', getUserBooks);
router.patch("/:id/read", markBookAsRead);
export default router;