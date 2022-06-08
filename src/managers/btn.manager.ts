import btnRepository from '../repositorys/btn.repository';
import { btnTitleInterface, btnInterface } from '../interfaces/btn.interface';

const addBtn = async (btn: btnInterface) => {
  const newBtn: btnInterface = await btnRepository.addBtn(btn);
  return newBtn;
};

const getBtns = async () => {
  const getBtnsTitle: btnTitleInterface[] = await btnRepository.getBtnsTitle();
  return getBtnsTitle;
};

const getAllBtns = async () => {
  const getAllBtns: btnInterface[] = await btnRepository.getAllBtns();
  return getAllBtns;
};

const getBtnById = async (title: string) => {
  const getBtn: btnInterface = await btnRepository.getBtnById(title);
  return getBtn;
};


export default { getBtns, getAllBtns, addBtn, getBtnById };
