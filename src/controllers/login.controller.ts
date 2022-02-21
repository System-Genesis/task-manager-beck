import { Request, Response } from 'express';

// POST http://localhost:3010/login/
const login = async (req: Request, res: Response) => {
  const team: string = req.body.team;
  const password: string = req.body.password;
  console.log('checking if this user ok' + req.body);
  try {
    if (process.env.NAME == team && process.env.PASSWORD == password) {
      res.send({ team, password });
    } else {
      res.status(404).send('nununu');
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export default { login };
