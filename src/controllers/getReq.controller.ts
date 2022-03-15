import { Request, Response } from 'express';
// import * as userManager from '../managers/user.manager'
// import userInterface from '../interfaces/user.interface'

const getUserByIdAndSource = async (req: Request, res: Response) => {
  try {
    // const id: string = req.body.id;
    // const source: string = req.body.source;
    console.log(req.body);

    // const answer: userInterface = await userManager.getUser(
    //     id, source
    // );
    res.send(req.body);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default { getUserByIdAndSource };
