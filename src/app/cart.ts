export class CartItem {
    Id : number;
    Name : string;
    Price : number;
    Qty : number;
    Sum : number;

    constructor(Id: number, Name: string, Price: number, Qty: number, Sum : number) {
        this.Id = Id;
        this.Name = Name;
        this.Price = Price;
        this.Qty = Qty;
        this.Sum = Sum;
    }
} 