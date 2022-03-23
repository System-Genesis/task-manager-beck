import express from 'express';
import actionHandler from '../controllers/actionHandler.controller';

const router = express.Router();

router.post('/', actionHandler.actionHandler);

export default router;
