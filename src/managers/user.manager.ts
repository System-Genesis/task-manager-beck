import userRepository from '../repositorys/user.repository';
import { userInterface, usernamesInterface } from '../interfaces/user.interface';
import managerData from '../data/managerData';
import { userData } from '../data/userData';
import pageManager from '../managers/page.manager';
// import pageInterface from '../interfaces/page.interface';

const crypto = require('crypto');

function encrypt(val: string, ENC_KEY: Buffer, IV: Buffer) {
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

// TODO: if lost everything lost, should be in env?
const initializationVector = Buffer.from('1234567890123456'); // some string with lenth of 16
const secretKey = Buffer.from('12345678901234561234567890123456'); // some string with lenth of 32

const addUser = async (user: userInterface) => {
  user.password = encrypt(user.password, secretKey, initializationVector);
  const newUser = await userRepository.addUser(user);
  return newUser;
};

const getUser = async (name: string, password: string) => {
  await userRepository.getAggragateUser(name);
  const user: userInterface = await userRepository.getUser(
    name,
    encrypt(password, secretKey, initializationVector)
  );

  return user;
};

const getData = (user: userInterface) => {
  // TODO: define data interface and return it
  if (user.rule == 'manager') {
    // TODO: rule => role
    return managerData;
  }
  return userData;
};

const getUserById = async (userId: string) => {
  const user: userInterface = await userRepository.getUserById(userId);
  return user;
};

const addNewUser = async (user: userInterface, pages: any) => {
  user.password = encrypt(user.password, secretKey, initializationVector);
  const newPages: string[] = [];
  for (let i = 0; i < pages.length; i++) {
    newPages.push((await pageManager.addPage(pages[i]))._id as string);
  }
  console.log(newPages);
  const newUser = await userRepository.addNewUser(user, newPages);
  return newUser;
};

const getAllusernames = async () => {
  const getAllusernames: usernamesInterface[] = await userRepository.getAllusernames();
  return getAllusernames;
};

const checkIfUserExist = async (userName: string) => {
  const user: boolean = await userRepository.checkIfUserExist(userName);
  return user;
};


export default { addUser, getUser, getData, getUserById, addNewUser, getAllusernames, checkIfUserExist };
