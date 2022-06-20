import { btnInterface } from './btn.interface'
interface pageInterface {
  title: String;
  btns: string[];
  _id?: string;
}
interface openPageInterface {
  title: String;
  btns: btnInterface[];
  _id?: string;
}

export {pageInterface, openPageInterface};
