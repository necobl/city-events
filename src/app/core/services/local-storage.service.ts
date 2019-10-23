import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  public save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  public load(key: string): string {
    return localStorage.getItem(key);
  }
}
