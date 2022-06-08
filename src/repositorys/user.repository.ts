import userModel from '../mongo/userModel';
import userInterface from '../interfaces/user.interface';

const addUser = async (newUser: userInterface) => {
  const user = new userModel(newUser);
  await user.save();
  return user;
};

const getUser = async (
  name: string,
  password: string
): Promise<userInterface> => {
  return await userModel.findOne({ name, password }).lean();
};

const getUserById = async (userId: string): Promise<userInterface> => {
  return await userModel.findById(userId).lean();
};

export default { addUser, getUser, getUserById };
