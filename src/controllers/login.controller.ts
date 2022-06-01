import { Request, Response } from 'express';
import userManager from '../managers/user.manager';
import userInterface from '../interfaces/user.interface';

// POST http://localhost:3020/login/
const login = async (req: Request, res: Response) => {
  const userName: string = req.body.userName; // TODO: userName => username
  const password: string = req.body.password;
  try {
    const user: userInterface = await userManager.getUser(userName, password);
    const data: object = userManager.getData(user); // TODO: what data object? define user interface
    if (user) {
      return res.send({ user, data });
    }

    return res.status(404).send('not found');
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default { login };
