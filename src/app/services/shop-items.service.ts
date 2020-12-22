import { Injectable } from '@angular/core';
import { Item } from '../item';
import { ITEMS} from '../shop-items';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {

  getItems(): Observable<Item[]>{
    return of (ITEMS);
  }

  getItem(id: number): Observable<Item> {
    return of (ITEMS.find(item => item.Id === id));
  }

  /*getItemName(itemName: string): Observable<Item> {
    return of (ITEMS.find(item => item.Name === itemName));
  }*/


  constructor() { }
}
