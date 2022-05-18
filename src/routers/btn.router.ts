import express from 'express';
import btnController from '../controllers/btn.controller';

const router = express.Router();

router.get('/', btnController.getBtns);

export default router;