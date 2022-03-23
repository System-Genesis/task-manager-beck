import userRepository from '../repositorys/user.repository';
import userInterafce from '../interfaces/user.interface';

const addUser = async (dacument: userInterafce) => {
  const newUser = await userRepository.addUser(dacument);
  return newUser;
};

const getUser = async (name: string, password: string) => {
  const user: userInterafce = await userRepository.getUser(
    name, password
  );
  return user;
};

export default {addUser, getUser}


