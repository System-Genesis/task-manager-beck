import {openPageInterface} from '../interfaces/page.interface';

interface userInterface {
  username: string;
  password: string;
  rule: string;
  pages?: string[];
}

interface usernamesInterface {
  username: String;
}

interface userAggregateInterface {
  username: string;
  password: string;
  rule: string;
  pages: openPageInterface[];
}

export { userInterface, usernamesInterface, userAggregateInterface };
