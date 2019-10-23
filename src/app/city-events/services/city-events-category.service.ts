import {LocalStorageService} from '../../core/services/local-storage.service';
import {CityEventCategory} from '../../core/models/city-event-category.model';
import {Injectable} from '@angular/core';
import {CityEvent} from '../../core/models/city-event.model';

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

  private save() {
    this.localStorageService.save(this.STORAGE_KEY, JSON.stringify(this.cityEventCategories));
  }

  public getCategories() {
    return this.cityEventCategories;
  }

  public addCategory(category: CityEventCategory) {
    this.cityEventCategories.push(category);
    this.save();
  }

  public editCategory(category: CityEventCategory) {
    this.cityEventCategories.forEach((item) => {
      if (item.id === category.id) {
        Object.assign(item, category);
      }
    });
    this.save();
  }

  public deleteCategory(id: string) {
    let index = null;
    this.cityEventCategories.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    if (index !== null) {
      this.cityEventCategories.splice(index, 1);
      this.save();
    }
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
    this.save();
  }
}
