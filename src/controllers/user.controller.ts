import { Request, Response } from 'express';
import userManager from '../managers/user.manager';
import userInterface from '../interfaces/user.interface';

// POST http://localhost:3020/users/
const addUser = async (req: Request, res: Response) => {
  try {
    const nameQuery: string = req.body.userName;
    const passwordQuery: string = req.body.password;
    const ruleQuery: string = req.body.rule;

    const newUser: userInterface = {
      userName: nameQuery,
      password: passwordQuery,
      rule: ruleQuery,
    };

    const answer = await userManager.addUser(newUser);
    res.send(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// GET http://localhost:3020/users/
const getUserByName = async (req: Request, res: Response) => {
  try {
    const userName: string = req.body.name;
    const password: string = req.body.password;
    const answer: userInterface = await userManager.getUser(userName, password);
    res.send(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.id;

    const answer: userInterface = await userManager.getUserById(userId);
    res.send(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const addNewUser = async (req: Request, res: Response) => {
  try {
    const nameQuery: string = req.body.user.userName;
    const passwordQuery: string = req.body.user.password;
    const ruleQuery: string = req.body.user.rule;
    const pages: object[] = req.body.pages;    
  
    const newUser: userInterface = {
      userName: nameQuery,
      password: passwordQuery,
      rule: ruleQuery,
    };
    // console.log(JSON.stringify(pages));
    const answer = await userManager.addNewUser(newUser, pages);
    res.send(answer);
  } catch (err: any) { 
    res.status(500).json({ message: err.message });
  }
};

export default { addUser, getUserByName, getUserById, addNewUser };
