import { Request, Response } from 'express';
import requestHandler from '../managers/actionHandler.manager';
// import dailyInterface from '../interfaces/daily.interface';
// import reqTypesInterface from '../interfaces/reqTypes.interface'

// POST http://localhost:3020/action/
const actionHandler = async (req: Request, res: Response) => {
  try {
    const requestType: string = req.body.reqType;
    const requestParams: object = req.body.requestParams;
    const url = req.body.url
    
    const info = await requestHandler.buildRequest(requestType, url, requestParams);
    res.send(info.data);
    console.log(info.data);
    
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// // POST http://localhost:3020/action/daily
// const postDaily = async (req: Request, res: Response) => {
//   try {
//     const hour: string[] = req.body.dailyHour;
//     const minute: string[] = req.body.dailyMinute;

//     console.log(hour, minute);
    
//     const answer: any = await requestHandler.setDaily(hour, minute);
//     res.send(answer.data);
    
//   } catch (err: any) {
//     res.status(500).json({ message: err.message });
//   }
// };

export default { actionHandler };
