import { openPageInterface } from '../interfaces/page.interface';

interface userInterface {
  username: string;
  password: string;
  role: string;
  pages?: string[];
}

interface usernamesInterface {
  username: String;
}

interface userAggregateInterface {
  username: string;
  password: string;
  role: string;
  pages: openPageInterface[];
}

export { userInterface, usernamesInterface, userAggregateInterface };
