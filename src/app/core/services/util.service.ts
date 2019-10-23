import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  static generateFakeId(): string {
    const segment = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return `${segment()}-${segment()}-${segment()}-${segment()}`;
  }
}
