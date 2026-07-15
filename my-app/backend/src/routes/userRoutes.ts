import { Router } from 'express';
import { getUser, getUserBooks } from '../controllers/userController';

const router = Router();

router.get('/:id/books', getUserBooks);
router.get("/:id", getUser);
export default router;