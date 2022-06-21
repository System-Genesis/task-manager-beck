import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/new', userController.addUser);
router.get('/', userController.getUserByName);
router.get('/id/:id', userController.getUserById);
router.get('/username', userController.getAllusernames);
router.get('/username/exist/:username', userController.checkIfUserExist);

export default router;
