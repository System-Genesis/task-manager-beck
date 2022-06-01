import btnModel from '../mongo/btnModel';
import { btnTitle, btnInterface } from '../interfaces/btn.interface';

const addBtn = async (newBtn: Object) => {
  const btn = new btnModel(newBtn);
  await btn.save();
  return btn;
};

const getBtnsTitle = async (): Promise<btnTitle[]> => {
  return await btnModel.find({}).select('title');
};

const getAllBtns = async (): Promise<btnInterface[]> => {
  return await btnModel.find({});
};

export default { addBtn, getBtnsTitle, getAllBtns };
