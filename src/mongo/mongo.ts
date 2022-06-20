import mongoose from 'mongoose';
import config from '../config/config';

/**
 * Connect to mongo
 */
export default async function connectToMongo() {
  console.log(config.mongoDbPath);

  const opt: any = { useNewUrlParser: true, useUnifiedTopology: true };
  await mongoose.connect(config.mongoDbPath, opt); // TODO: await unnecessary
};
