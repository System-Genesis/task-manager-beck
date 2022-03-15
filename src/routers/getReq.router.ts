import express from 'express';
import getReqController from '../controllers/getReq.controller';

const router = express.Router();

router.get('/', getReqController.getUserByIdAndSource);
router.post('/', getReqController.getUserByIdAndSource);


export default router;
