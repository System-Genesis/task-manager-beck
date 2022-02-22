import { Request, Response } from 'express';
import { getUser as getUser } from '../managers/user.manager';
import userInterface from '../interfaces/user.interface';

// POST http://localhost:3010/login/

const login = async (req: Request, res: Response) => {
  const team: string = req.body.team;
  const password: string = req.body.password;
  try {
    const user: userInterface = await getUser(team, password);
    console.log(user);

    if (user) return res.send(user);

    return res.status(404).send('nununu');
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export default { login };
