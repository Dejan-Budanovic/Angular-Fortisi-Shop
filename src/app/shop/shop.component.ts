import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ShopItemsService} from '../services/shop-items.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  items: Item[];


  constructor(private ShopItemsService: ShopItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items);
  }

  getKitchen(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items.filter(item => item.Category === "Kitchen"));
  }

  getBedroom(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items.filter(item => item.Category === "Bedroom"));
  }

  getLivingRoom(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items.filter(item => item.Category === "Living Room"));
  }

  getBathroom(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items.filter(item => item.Category === "Bathroom")); 
  }

}
