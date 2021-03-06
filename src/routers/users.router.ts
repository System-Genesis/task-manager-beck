import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/', userController.addUser);
router.get('/', userController.getUserByName);

export default router;
