import userModel from '../mongo/userModel';
import userInterface from '../interfaces/user.interface';
// import pageInterface from '../interfaces/page.interface';

const addUser = async (newUser: userInterface) => {
  const user = new userModel(newUser);
  await user.save();
  return user;
};

const getUser = async (
  userName: string,
  password: string
): Promise<userInterface> => {
  return await userModel.findOne({ userName, password }).lean();
};

const getUserById = async (userId: string): Promise<userInterface> => {
  return await userModel.findById(userId).lean();
};

const getAggragateUser = async (userName: string) => {
  const user = await userModel.aggregate([
    {
      $match: { userName: userName },
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
          userName: '$userName',
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
        userName: '$_id.userName',
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
    userName: newUser.userName,
    password: newUser.password,
    rule: newUser.rule,
    pages: newPages,
  };
  const userNew = new userModel(user);
  await userNew.save();
  return userNew;
};

export default { addUser, getUser, getUserById, addNewUser, getAggragateUser };
