import express = require('express');
import { Request, Response } from 'express';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const team: string = req.body.team;
  const password: string = req.body.password;
  console.log('checking if this user ok' + req.body);
  if (process.env.NAME == team && process.env.PASSWORD == password) {
    res.send({ team, password });
  } else {
    res.status(404).send('nununu');
  }
});

export default router;
