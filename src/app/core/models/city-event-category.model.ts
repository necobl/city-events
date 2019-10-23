import {UtilService} from '../services/util.service';

export class CityEventCategory {
  id?: string;
  name: string;

  constructor(values?: any) {
    if (values) {
      Object.assign(this, values);
    }
    this.id = UtilService.generateFakeId();
  }
}
