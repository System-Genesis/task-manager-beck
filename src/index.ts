// import managerData from './data/managerData';
import mongo from './mongo/mongo';
// import btnRepository from './repositorys/btn.repository';
import server from './server';

export default async function startFunction() {
  console.log('try connect to mongo');

  await mongo().catch((e) => {
    console.log("Coudn't connect to MongoDB....", e);
    process.exit();
  });
  console.log('mongo connect');
  // managerData.pages.forEach((page) => {
  //   page.btns.forEach((btn) => {
  //     btnRepository.addBtn({ ...btn,title:page.title+" "+ btn.title, methods: page.title });
  //   });
  // });
  server();
}
startFunction();
