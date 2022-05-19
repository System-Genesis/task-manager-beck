import express from 'express';
import btnController from '../controllers/btn.controller';

const router = express.Router();

router.get('/title', btnController.getBtnsTitle);

export default router;