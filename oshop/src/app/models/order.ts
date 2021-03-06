import { ShoppingCart } from "./shopping-cart";

export class Order {
  dateCreated: number;
  items: any[];
  status: string;

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart){
    this.dateCreated = new Date().getTime();
    this.status = "Ordered";
    this.items = shoppingCart.items.map(i => {
      return{
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    })
  }
}
