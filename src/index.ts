// import managerData from './data/managerData';
import mongo from './mongo/mongo';
// import btnRepository from './repositorys/btn.repository';
import server from './server';

export default async function startFunction() {
  console.log('try connect to mongo');

  // TODO: refactor to try catch
  await mongo().catch((e) => {
    console.log("Coudn't connect to MongoDB....", e);
    process.exit();
  });
  // TODO: seed db with buttons data instead of manual creations
  console.log('mongo connect');
  // managerData.pages.forEach((page) => {
  //   page.btns.forEach((btn) => {
  //     btnRepository.addBtn({ ...btn,title:page.title+" "+ btn.title, methods: page.title });
  //   });
  // });
  // TODO: (retry?) before start server
  // TODO: rename to startServer
  server();
}
startFunction();
