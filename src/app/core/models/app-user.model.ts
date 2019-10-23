import {UtilService} from '../services/util.service';

export class AppUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(values?: any) {
    if (values) {
      Object.assign(this, values);
    }
    this.id = UtilService.generateFakeId();
  }
}
