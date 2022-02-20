import app from './app';
require('dotenv').config();

const start = async () => {
  console.log(process.env.PORT);

  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port: ' + process.env.PORT || 3000);
  });
};

start().catch((e) => console.log(e));
