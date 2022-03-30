import userRepository from '../repositorys/user.repository';
import userInterafce from '../interfaces/user.interface';
import managerData from '../data/managerData';
import { userData } from '../data/userData';

const addUser = async (dacument: userInterafce) => {
  const newUser = await userRepository.addUser(dacument);
  return newUser;
};

const getUser = async (name: string, password: string) => {
  const user: userInterafce = await userRepository.getUser(name, password);

  return user;
};

const getData = (user: userInterafce) => {
  if (user.rule == 'manager') {
    return managerData;
  }
  return userData;
};

export default { addUser, getUser, getData };
