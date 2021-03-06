import userRepository from '../repositorys/user.repository';
import userInterafce from '../interfaces/user.interface';
import managerData from '../data/managerData';
import { userData } from '../data/userData';
const crypto = require('crypto');

function encrypt(val: string, ENC_KEY: Buffer, IV: Buffer) {
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

const initializationVector = Buffer.from('1234567890123456'); // some string with lenth of 16
const secretKey = Buffer.from('12345678901234561234567890123456'); // some string with lenth of 32

const addUser = async (dacument: userInterafce) => {
  dacument.password = encrypt(
    dacument.password,
    secretKey,
    initializationVector
  );
  const newUser = await userRepository.addUser(dacument);
  return newUser;
};

const getUser = async (name: string, password: string) => {
  const user: userInterafce = await userRepository.getUser(
    name,
    encrypt(password, secretKey, initializationVector)
  );

  return user;
};

const getData = (user: userInterafce) => {
  if (user.rule == 'manager') {
    return managerData;
  }
  return userData;
};

export default { addUser, getUser, getData };
