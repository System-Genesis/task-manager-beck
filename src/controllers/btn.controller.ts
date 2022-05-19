import { Request, Response } from 'express';
import btnManager from '../managers/btn.manager';
import { btnTitle } from '../interfaces/btn.interface';

const getBtnsTitle = async (_req: Request, res: Response) => {
  try {
    const btnsTitle:btnTitle[] = await btnManager.getBtns();
    res.send(btnsTitle);
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({ message: err.message });
  }
};

export default { getBtnsTitle };
