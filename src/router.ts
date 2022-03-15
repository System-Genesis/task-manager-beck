import express, { Request, Response, Application } from 'express';
import loginRouter from './routers/login.router';
import usersRouter from './routers/users.router';
import getReqRouter from './routers/getReq.router';

import morgan from 'morgan';
import cors from 'cors';

function routers(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  app.use('/login', loginRouter);
  app.use('/users', usersRouter);
  app.use('/action', getReqRouter);

  app.use('/isAlive', (_req: Request, res: Response) => {
    res.status(200).send('alive');
  });

  app.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
  });
}

export default routers;
