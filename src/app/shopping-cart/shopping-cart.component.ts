import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart';
import { CartService } from '../services/cart.service';
import { MessageService } from '../services/message.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: CartItem[];

  currentItem: CartItem;

  public totalPrice = 0;
  public totalItems : number = 0;

  public cartSum: number;
  public itemSum: number;

  constructor(private cartService : CartService, private MessageService:MessageService) {}

  ngOnInit(): void {
    this.getItemsInCart();
  }

  getItemsInCart(){
    this.cartService.getItemsInCart()
    .subscribe(cart => { this.cart = cart, this.MessageService.addNewMessage('Get all items from cart')});
  }

  removeItemFromCart(item){
    this.cart = this.cart.filter(item => item !== item);
    this.cartService.removeItemFromCart(item)
    .subscribe(
      () => this.MessageService.addNewMessage('Item removed, id: '+item.Id)
    );
  }

 cartItemsList(){
    for (let i = 0; i < this.cart.length; i++) {
      this.cartSum = this.cart[i].Sum;
      this.itemSum = this.cart[i].Qty;
      };
      this.totalPrice += this.cartSum;
      this.totalItems += +this.itemSum;
      
  }

  finishShopping(){
    this.cartService.saveCart(this.cart).subscribe(
      (response: HttpEvent<Object>) => console.log(response),
      (error) => console.log(error)
    )
  };
}
