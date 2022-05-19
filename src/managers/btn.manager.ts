import btnREpository from '../repositorys/btn.repository'
import { btnTitle } from '../interfaces/btn.interface';

const getBtns = async () => {
    const getBtnsTitle: btnTitle[]  = await btnREpository.getBtnsTitle();
    return getBtnsTitle
}

export default { getBtns}