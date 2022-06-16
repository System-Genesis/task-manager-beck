import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/', userController.addUser);
router.post('/new', userController.addNewUser);
router.get('/', userController.getUserByName);
router.get('/id/:id', userController.getUserById);
router.get('/username', userController.getAllusernames);

export default router;
