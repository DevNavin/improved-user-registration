import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  set(key: string, value: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error while setting local storage', err);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
      console.error('Error while getting local storage key ', key, err);
      return '';
    }
  }
}
