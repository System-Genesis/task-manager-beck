import express from 'express';
import morgan from 'morgan';
import { Request, Response, Application } from 'express';
import router from './route';
import cors from 'cors';

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);

app.use('/isAlive', (_req: Request, res: Response) => {
  res.status(200).send('alive');
});

app.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export default app;
