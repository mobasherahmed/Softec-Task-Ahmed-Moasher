import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: any [] = [];

  constructor(private _orderService:OrdersService) {
  }

  ngOnInit(): void {
   let orders:any = localStorage.getItem('orders')
   if(orders){
     this.orders = JSON.parse(orders);
   }
  }

  //  product quentity decrement
   public decrement(id: number) {
    let p = this.orders.find(p=>p.ProductId === id);
    if(p.Count > 1){
      p.Count = p.Count - 1;
    }
    localStorage.setItem("orders",JSON.stringify(this.orders))
  }

  //product quentity increment
  public increment(id: number ) {
    let p = this.orders.find(p=>p.ProductId === id);
    if(p.Quantity > p.Count){
      p.Count = p.Count + 1;
    }
    localStorage.setItem("orders",JSON.stringify(this.orders))
    
  }

  // remove item
  removeItem(id:number){
    let p = this.orders.find(p=>p.ProductId === id);
    let index = this.orders.indexOf(p);
    this.orders.splice(index,1);
    localStorage.setItem("orders",JSON.stringify(this.orders))

  }

  getTotal(){
    return this.orders.reduce((prev, curr) => {
      return prev + curr.ProductPrice * curr.Count;
    }, 0);
  }
  
}
