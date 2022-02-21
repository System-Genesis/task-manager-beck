import './envFile';

import env from 'env-var';

export default {
  port: env.get('PORT').required().asString(),
  userCollection: env.get('USER_COL').required().asString(),
  mongoDbPath: env.get('MONGO_PATH').required().asString(),
}; 
