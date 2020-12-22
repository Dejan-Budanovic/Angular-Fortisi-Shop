import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router,} from '@angular/router';
import { Item} from '../item';
import { ITEMS} from '../shop-items';
import { Location } from '@angular/common';
import { ShopItemsService } from '../services/shop-items.service';
import { CartService } from '../services/cart.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})


export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  @Input() items = ITEMS;


  id:number = +this.route.snapshot.paramMap.get('id');


  public cart=[]
  public href: string = " ";
  
  

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private shopItemsService: ShopItemsService,
    private location: Location,
    private cartService : CartService,
  ) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
      }
    });
   }

  



  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.shopItemsService.getItem(this.id)
      .subscribe(item => this.item = item);
  }


  /*addToCart(itemQty:number) {
    this.cart.push({
      Id: this.item.Id,
      Name: this.item.Name,
      Price: this.item.Price,
      Qty:itemQty,
      Sum: this.item.Price*itemQty,
    });
  };*/



  next(): void {
    if (this.id == this.items.length) {
      this.id = 1;
      this.getItem()
    } else {
      this.id += 1;
      this.router.navigate(['shop/', this.id]);
      this.getItem()
      }  
    }

    back(): void {
      if (this.id == 1) {
        this.id = this.items.length;
        this.router.navigate(['shop/', this.id]);
        this.getItem()
      } else {
        this.id -= 1;
        this.router.navigate(['shop/', this.id]);
        this.getItem()
        }
      }

  
  


}
