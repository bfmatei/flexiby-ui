import { Injectable } from '@angular/core';

@Injectable()
export class StorageFacade {
  read(key: string): string {
    return localStorage.getItem(key);
  }

  readNumber(key: string): number {
    return Number(this.read(key));
  }

  readObject(key: string): {} {
    return JSON.parse(this.read(key));
  }

  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  saveNumber(key: string, value: number) {
    localStorage.setItem(key, value.toString());
  }

  saveObject(key: string, value: {}) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  exists(key: string): boolean {
    return typeof this.read(key) !== 'undefined';
  }

  empty() {
    localStorage.clear();
  }
}
