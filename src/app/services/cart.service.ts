import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../cart';
import { throwError, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class CartService {

  constructor( private httpClient: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json')

  getItemsInCart() {
    return this.httpClient.get<CartItem[]>('api/CARTITEMS', {
      headers: this.headers
    });
  }

  addItemToCart(item) {
    return this.httpClient.post('api/CARTITEMS', item, {
      headers: this.headers
    });
  }

  removeItemFromCart(item) {
    return this.httpClient.delete('api/CARTITEMS/'+ item.Id, {
      headers: this.headers
    });
  }

  editItemQty(item) {
    return this.httpClient.put('api/CARTITEMS/' + item.id, {
      headers: this.headers
    });
  }

  saveCart(cart: any[]) {
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.httpClient.post("https://angular-2c936.firebaseio.com/cart.json", cart, {observe: 'events'});
  }

  readCart() {
    return this.httpClient.get<any[]>("https://angular-2c936.firebaseio.com/cart.json",{observe: 'response', responseType:'json'})
          .pipe(map(
            (cart) => {
            console.log(cart)
           return cart;
      }),
      catchError(
        (err) => throwError("Read ERROR")
      )
    )
  }
}
