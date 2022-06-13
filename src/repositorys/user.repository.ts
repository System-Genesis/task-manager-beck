import userModel from '../mongo/userModel';
import userInterface from '../interfaces/user.interface';
// import pageInterface from '../interfaces/page.interface';

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

const addNewUser = async (newUser: userInterface, newPages: string[]) => {
  const user = {
    userName: newUser.userName,
    password: newUser.password,
    rule: newUser.rule,
    pages: newPages
  }
  const userNew = new userModel(user);
  await userNew.save();
  return userNew;
};

export default { addUser, getUser, getUserById, addNewUser };
