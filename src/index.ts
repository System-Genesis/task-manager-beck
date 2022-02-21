import mongo from './mongo/mongo';
import server from './server';

export default async function startFunction() {
  console.log('try connect to mongo');

  await mongo().catch((e) => {
    console.log("Coudn't connect to MongoDB....",e);
    process.exit();
  });
  console.log('mongo connect');

  server();
}
startFunction();
     