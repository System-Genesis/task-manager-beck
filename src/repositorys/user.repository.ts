import userModel from '../mongo/userModel';
import userInterface from '../interfaces/user.interface';

export const addUser = async (dacument: userInterface) => {
  const user = new userModel(dacument);
  await user.save();
  return user;
};

export const getUser = async (
  name: string,
  password: string
): Promise<userInterface> => {
  return await userModel.findOne({ name, password }).lean();
};
