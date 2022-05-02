import './envFile';

import env from 'env-var';

export default {
  port: env.get('PORT').required().asString(),
  userCollection: env.get('USER_COL').required().asString(),
  btnsCollection: env.get('BTNS_COL').required().asString(),
  pagesCollection:env.get('PAGES_COL').required().asString(),
  mongoDbPath: env.get('MONGO_PATH').required().asString(),
}; 
