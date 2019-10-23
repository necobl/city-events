import {UtilService} from '../services/util.service';

export class CityEvent {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  eventDate: Date;
  imageUrl: string;
  finished: boolean;

  constructor(values?: any) {
    if (values) {
      Object.assign(this, values);
    }
    this.id = UtilService.generateFakeId();
    this.imageUrl = this.imageUrl || 'assets/img/sorry-image-not-available.jpg';
  }
}
