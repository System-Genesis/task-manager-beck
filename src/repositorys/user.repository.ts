import userModel from '../mongo/userModel';
import userInterface from '../interfaces/user.interface';

export const addUser = async (dacument: userInterface) => {

  const user = new userModel(dacument);
  await user.save();
  return user;
};
