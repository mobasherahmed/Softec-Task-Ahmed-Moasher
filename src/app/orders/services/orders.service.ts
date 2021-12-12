import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,private router:Router) {}

  getOrders() {
    let orders:any = localStorage.getItem('orders');
    if(orders){
      return JSON.parse(orders);   
    }else{
      return []
    }
  }

  getOrder(id:string|null){
    let o = localStorage.getItem('orders');
    if(o){
      let orders = JSON.parse(o);
      let order = orders.find((order:any)=>order.GUID === id)
      return order;
    }
  }
  createOrder(item:any) {    
    let o = localStorage.getItem('orders');
    if(o){
      let orders = JSON.parse(o);
      orders.push(item)
      localStorage.setItem('orders',JSON.stringify(orders))
    }else{
      let orders:any = [];
      orders.push(item)
      localStorage.setItem('orders',JSON.stringify(orders));
    }
    // empty cart items after making order ..
    localStorage.setItem("cartItems",JSON.stringify([]))
    this.router.navigate(['/orders/']);
  }

  getTotal(arr:any){
    return arr.reduce((prev:any, curr:any) => {
      return prev + curr.ProductPrice * curr.Count;
    }, 0);
  }

}
