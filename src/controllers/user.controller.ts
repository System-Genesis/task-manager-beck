import { Request, Response } from 'express';
import * as userManager from '../managers/user.manager'
import userInterface from '../interfaces/user.interface'


// POST http://localhost:3010/users/
const addUser = async (req: Request, res: Response) => {
  try {
    const nameQuery: string = req.body.name;
    const passwordQuery: string = req.body.password;
    const ruleQuery: string = req.body.rule;

    const dacument: userInterface = {
      name: nameQuery,
      password: passwordQuery,
      rule: ruleQuery,
    };

    const answer = await userManager.addUser(dacument);
    res.send(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default { addUser };
