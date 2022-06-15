import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
// import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  
  // Creates an instance of ItemService
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // Call getItems on init to fill array of items
    this.getItems()
  }

  getItems(): void {
    // Use observables if the data comes from a server
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  update(item: Item):void {
    this.itemService.updateItem(item);
  }

  add(name: string, description: string) :void {
    // Check if some string is empty
    name = name.trim();
    description = description.trim();

    if (!name || !description) {
      alert("Please fill both fields.")
    }

    this.itemService.addItem({name, description} as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item) {
    alert("Not implemented")
  }
}
