import * as userRepository from '../repositorys/user.repository';
import userInterafce from '../interfaces/user.interface';

export const addUser = async (dacument: userInterafce) => {
  const newUser = await userRepository.addUser(dacument);
  return newUser;
};

export const getUser = async (name: string, password: string) => {
  const user: userInterafce = await userRepository.getUser(
    name, password
  );
  return user;
};
