import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'api/items';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }
  
  // Returns a observable object
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
  }

  updateItem(item: Item): void {
    // Switches with NOT operator
    item.done = !item.done;
    this.http.put(this.itemsUrl, item, this.httpOptions)
  }

  addItem(item: Item): Observable<Item> {
    console.log(item);
    item.done = false;
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  deleteItem(item: Item): void{
    const deleteUrl = '${this.itemsUrl}/${item.id}';

    this.http.delete<Item>(deleteUrl, this.httpOptions);
  }
}
