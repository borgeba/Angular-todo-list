import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-finished-items',
  templateUrl: './finished-items.component.html',
  styleUrls: ['./finished-items.component.css']
})
export class FinishedItemsComponent implements OnInit {

  items: Item[] = [];

  constructor(private finishedItemsService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    // Use observables if the data comes from a server
    this.finishedItemsService.getItems()
      .subscribe(items => this.items = items);
  }

  update(item: Item) {
    console.log('click');
  }
}
