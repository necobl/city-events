import {LocalStorageService} from '../../core/services/local-storage.service';
import {CityEventCategory} from '../../core/models/city-event-category.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CityEventsCategoryService {
  private cityEventCategories: Array<CityEventCategory> = [];

  private STORAGE_KEY = 'city-events-category-list';

  constructor(private localStorageService: LocalStorageService) {
    this.cityEventCategories = JSON.parse(this.localStorageService.load(this.STORAGE_KEY));

    if (!this.cityEventCategories || !this.cityEventCategories.length) {
      this.seedCategories();
    }
  }

  public getCategories() {
    return this.cityEventCategories;
  }

  private seedCategories() {
    this.cityEventCategories = this.cityEventCategories || [];
    const items = [
      {
        name: 'DJ Party'
      },
      {
        name: 'Live Music'
      },
      {
        name: 'Opera'
      }
    ];

    items.forEach((item) => {
      this.cityEventCategories.push(new CityEventCategory(item));
    });
    this.localStorageService.save(this.STORAGE_KEY, JSON.stringify(this.cityEventCategories));
  }
}
