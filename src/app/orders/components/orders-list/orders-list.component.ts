import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: any [] = [];

  constructor(private _orderService:OrdersService) {
  //  this.orders =  this._orderService.getOrders().value;   
  }

  ngOnInit(): void {
   let orders:any = localStorage.getItem('orders')
   this.orders = JSON.parse(orders) 
  console.log("oooo",this.orders);
  
  }

   //product quentity decrement
  //  public decrement(product: any, quantity: number = -1) {
  //   this._orderService.updateProductQuantity(product, quantity)

  // }

  //product quentity increment
  // public increment(product: any, quantity: number = +1) {
  //   this._orderService.updateProductQuantity(product, quantity)
  // }
  
}
