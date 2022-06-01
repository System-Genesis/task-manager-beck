import { Request, Response } from 'express';
import btnManager from '../managers/btn.manager';
import { btnTitle, btnInterface } from '../interfaces/btn.interface';

const getBtnsTitle = async (_req: Request, res: Response) => {
  try {
    const btnsTitle: btnTitle[] = await btnManager.getBtns(); // TODO: add prettier
    res.send(btnsTitle);
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({ message: err.message });
  }
};

const getAllBtns = async (_req: Request, res: Response) => {
  try {
    const allBtns: btnInterface[] = await btnManager.getAllBtns();
    res.send(allBtns);
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({ message: err.message });
  }
};

export default { getBtnsTitle, getAllBtns };
