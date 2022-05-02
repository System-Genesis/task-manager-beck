import btnModel from '../mongo/btnModel';
import userInterface from '../interfaces/user.interface';

const addBtn = async (newBtn: Object) => {
  const btn = new btnModel(newBtn);
  await btn.save();
  return btn;
};

const getBtn = async (
  name: string,
  password: string
): Promise<userInterface> => {
  return await btnModel.findOne({ name, password }).lean();
};

export default { addBtn, getBtn };
