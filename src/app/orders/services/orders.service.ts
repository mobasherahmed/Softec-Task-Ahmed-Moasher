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
      return JSON.parse(orders)    
    }else{
      return []
    }
  }

  getOrder(id:string|null){
    let o = localStorage.getItem('orders');
    if(o){
      let orders = JSON.parse(o);
      let order = orders.find((order:any)=>order.GUID === id)
      console.log("ooo",order);
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
    this.router.navigate(['/orders/']);
  }
}
