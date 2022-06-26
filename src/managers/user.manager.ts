import userRepository from '../repositorys/user.repository';
import {
  userInterface,
  usernamesInterface,
  userAggregateInterface,
} from '../interfaces/user.interface';
import pageManager from '../managers/page.manager';
import config from '../config/config';

const crypto = require('crypto');

function encrypt(val: string, ENC_KEY: Buffer, IV: Buffer) {
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

const initializationVector = Buffer.from(config.initializationVector); // some string with lenth of 16
const secretKey = Buffer.from(config.secretKey); // some string with lenth of 32

const getUser = async (name: string, password: string) => {
  const user: userAggregateInterface = await userRepository.getAggragateUser(
    name,
    encrypt(password, secretKey, initializationVector)
  );
  return user;
};

const getUserById = async (userId: string) => {
  const user: userInterface = await userRepository.getUserById(userId);
  return user;
};

const addUser = async (user: userInterface, pages: any) => {
  user.password = encrypt(user.password, secretKey, initializationVector);
  const newPages: string[] = [];
  for (let i = 0; i < pages.length; i++) {
    newPages.push((await pageManager.addPage(pages[i]))._id as string);
  }
  const newUser = await userRepository.addUser(user, newPages);
  return newUser;
};

const getAllusernames = async () => {
  const getAllusernames: usernamesInterface[] =
    await userRepository.getAllusernames();
  return getAllusernames;
};

const checkIfUserExist = async (userName: string) => {
  const user: boolean = await userRepository.checkIfUserExist(userName);
  return user;
};

const checkUserRole = async (userName: string, password: string) => {
  const user: boolean = await userRepository.checkUserRole(userName, password);
  return user;
};

export default {
  getUser,
  getUserById,
  addUser,
  getAllusernames,
  checkIfUserExist,
  checkUserRole
};
