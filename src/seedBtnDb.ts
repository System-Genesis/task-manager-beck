import managerData from './data/managerData';
import btnRepository from './repositorys/btn.repository';

export async function seedBtnDb() {
  managerData.forEach((page) => {
    page.btns.forEach((btn) => {
      btnRepository.addBtn({ ...btn, title: page.title + " " + btn.title, methods: page.title });
    });
  });
}
