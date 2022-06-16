import userModel from '../mongo/userModel';
import { userInterface, usernamesInterface } from '../interfaces/user.interface';
// import pageInterface from '../interfaces/page.interface';

const addUser = async (newUser: userInterface) => {
  const user = new userModel(newUser);
  await user.save();
  return user;
};

const getUser = async (
  username: string,
  password: string
): Promise<userInterface> => {
  return await userModel.findOne({ username, password }).lean();
};

const getUserById = async (userId: string): Promise<userInterface> => {
  return await userModel.findById(userId).lean();
};

const getAggragateUser = async (username: string) => {
  const user = await userModel.aggregate([
    {
      $match: { username: username },
    },
    {
      $lookup: {
        from: 'pages',
        localField: 'pages',
        foreignField: '_id',
        as: 'pages',
      },
    },
    {
      $unwind: {
        path: '$pages',
      },
    },
    {
      $lookup: {
        from: 'btns',
        localField: 'pages.btns',
        foreignField: '_id',
        as: 'pages.btns',
      },
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          username: '$username',
          password: '$password',
          rule: '$rule',
        },
        pages: {
          $push: {
            btns: '$pages.btns',
            title: '$pages.title',
          },
        },
      },
    },
    {
      $project: {
        _id: '$_id._id',
        username: '$_id.username',
        password: '$_id.password',
        rule: '$_id.rule',
        pages: '$pages',
      },
    },
  ]);

  return user[0];
};

const addNewUser = async (newUser: userInterface, newPages: string[]) => {
  const user = {
    username: newUser.username,
    password: newUser.password,
    rule: newUser.rule,
    pages: newPages,
  };
  const userNew = new userModel(user);
  await userNew.save();
  return userNew;
};

const getAllusernames = async (): Promise<usernamesInterface[]> => {
  return await userModel.find({}).select('username');
};

const checkIfUserExist = async (username: string): Promise<boolean> => {
  const userExist =  await userModel.exists({username: username});
  if(userExist) {
    return true;
  }
  else { 
    return false;
  }

};



export default { addUser, getUser, getUserById, addNewUser, getAggragateUser, getAllusernames, checkIfUserExist };
