import btnModel from '../mongo/btnModel';
import { btnTitleInterface, btnInterface } from '../interfaces/btn.interface';

const addBtn = async (newBtn: btnInterface) => {
  const btn = new btnModel(newBtn);
  await btn.save();
  return btn;
};

const getBtnsTitle = async (): Promise<btnTitleInterface[]> => {
  return await btnModel.find({}).select('title');
};

const getAllBtns = async (): Promise<btnInterface[]> => {
  return await btnModel.find({});
};

const getBtnById = async (title: string): Promise<btnInterface> => {
  return await btnModel.findById(title).lean();
};

export default { addBtn, getBtnsTitle, getAllBtns, getBtnById };
