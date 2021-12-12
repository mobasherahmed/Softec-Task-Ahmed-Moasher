import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any [] = [];
  showAlert: boolean= false;
  productQuantity: number=0;

  constructor(private _orderService:OrdersService,private _productService:ProductsService) {
  }

  ngOnInit(): void {
   let cartItems:any = localStorage.getItem('cartItems')
   if(cartItems){
     this.cartItems = JSON.parse(cartItems);
   }
  }

  //  product quentity decrement
   public decrement(id: number) {
    let p = this.cartItems.find(p=>p.ProductId === id);
    if(p.Count > 1){
      p.Count = p.Count - 1;
      p.Quantity = p.Quantity + 1;
      this._productService.updateProductQuantity(id,p.Quantity);
      localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
    }
  }

  //product quentity increment
  public increment(id: number ) {
    let p = this.cartItems.find(p=>p.ProductId === id);
    if(p.Quantity > 0){
      p.Count = p.Count + 1;
      p.Quantity = p.Quantity - 1;
      this._productService.updateProductQuantity(id,p.Quantity);
      localStorage.setItem("cartItems",JSON.stringify(this.cartItems))
    }else{
      this.showAlert = true;
      this.productQuantity = p.Quantity;
      setTimeout(() => {
        this.showAlert = false;
        }, 5000);
    }
    
  }

  // remove item
  removeItem(id:number){
    let p = this.cartItems.find(p=>p.ProductId === id);
    let index = this.cartItems.indexOf(p);
    this.cartItems.splice(index,1);
    this._productService.updateProductQuantity(id,p.Quantity+p.Count);
    localStorage.setItem("cartItems",JSON.stringify(this.cartItems))

  }

  emptyCartItems(){
    localStorage.setItem("cartItems",JSON.stringify([]))
  }
  
  getTotal(){
   return this._orderService.getTotal(this.cartItems);
  }
}
