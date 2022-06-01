import express from 'express';
import btnController from '../controllers/btn.controller';

const router = express.Router();

router.get('/title', btnController.getBtnsTitle);
router.get('/', btnController.getAllBtns);

export default router;
