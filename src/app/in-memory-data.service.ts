import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const items = [
      {id: 1, name: "Test 1", description:"Some task description...", done: false},
      {id: 2, name: "Test 2", description:"Some task description...", done: false},
      {id: 3, name: "Test 3", description:"Some task description...", done: false},
      {id: 4, name: "Test 4", description:"Some task description...", done: false},
    ];

    return {items};
  }

  genId(items: Item[]): number {
    return items.length > 0? Math.max(...items.map(item => item.id)) + 1 : 11;
  }

  constructor() { }
}
