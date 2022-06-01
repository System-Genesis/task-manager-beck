import btnREpository from '../repositorys/btn.repository';
import { btnTitle, btnInterface } from '../interfaces/btn.interface';

const getBtns = async () => {
  const getBtnsTitle: btnTitle[] = await btnREpository.getBtnsTitle();
  return getBtnsTitle;
};

const getAllBtns = async () => {
  const getAllBtns: btnInterface[] = await btnREpository.getAllBtns();
  return getAllBtns;
};
getAllBtns;

export default { getBtns, getAllBtns };
