import { CartItem } from './cart';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CartItems implements InMemoryDbService{
    createDb(){
        const CARTITEMS: CartItem[] = [
            {
                Id : 1,
                Name : "table",
                Price : 21,
                Qty : 2,
                Sum : 42,

        }

        ];
        return {CARTITEMS}
    }
}