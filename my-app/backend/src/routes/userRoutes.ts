import { Router } from 'express';
import { getUser, getUserBooks, updateGoal } from '../controllers/userController';

const router = Router();

router.get('/:id/books', getUserBooks);
router.get("/:id", getUser);
router.patch("/:id/goal", updateGoal);
export default router;