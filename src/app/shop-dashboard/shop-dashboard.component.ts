import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ShopItemsService} from '../services/shop-items.service';


@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {

  items: Item[] = [];

  constructor(private ShopItemsService: ShopItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.ShopItemsService.getItems()
      .subscribe(items => this.items = items.slice(0,6));
  }

}

/* filter(item => item.Id === 2 */ /*slice(0,6) */ /*filter(item => item.Category === "Kitchen")*/ 