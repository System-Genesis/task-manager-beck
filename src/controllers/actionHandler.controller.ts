import { Request, Response } from 'express';
import requestHandler from '../managers/actionHandler.manager';
// import dailyInterface from '../interfaces/daily.interface';
// import reqTypesInterface from '../interfaces/reqTypes.interface'

// POST http://localhost:3020/action/
const actionHandler = async (req: Request, res: Response) => {
  try {
    const requestType: string = req.body.reqType;
    const requestParams: object = req.body.requestParams;
    const url: string = req.body.url
    
    const info = await requestHandler.buildRequest(requestType, url, requestParams);
    res.send(info.data);
    console.log(info.data);
    
  } catch (err: any) {
    res.status(err?.response?.status || 500).json({ message: err.message });
  }
};

export default { actionHandler };
