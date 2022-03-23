import { Request, Response } from 'express';
import requestHandler from '../managers/actionHandler.manager';
// import paramsInterface from '../interfaces/params.interface';
// import reqTypesInterface from '../interfaces/reqTypes.interface'

const actionHandler = async (req: Request, res: Response) => {
  try {
    const url: string = req.body.url;
    const requestType: string = req.body.reqType;

    const info = await requestHandler.buildUrl(requestType, url);
    res.send(info.data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default { actionHandler };
