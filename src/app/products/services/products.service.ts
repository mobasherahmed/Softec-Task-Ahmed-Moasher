import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  private orders:any []=[]; 
    
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('assets/products.json').pipe(take(1));
  }

  getProduct(id: number): Observable<any> {
    return this.http.get('assets/products.json').pipe(
      map((products: any) => {
        return products.find((product: any) => product.ProductId === id);
      }),
      take(1)
    );
  }

  addOrder(product:any):void{
    // return this.http.get('assets/orders.json').pipe(
    //   map((orders:any)=>{
    //      orders.push(product);
    //      return orders;
    //   }),take(1))
    let o :any= localStorage.getItem('orders')
    this.orders = JSON.parse(o)
    this.orders.push(product)
    localStorage.setItem('orders',JSON.stringify(this.orders));
    // return this.orders
  }
  getOrders(){
    return this.orders;
  }

  updateProductQuantity(id: number, quantity: number): Observable<any> {
    console.log("id",id);
    console.log("quantity",quantity);
    
    return this.http.get('assets/products.json').pipe(
        map((products:any)=>{
          let product = products.find((product: any) => product.ProductId === id);
          product.Quantity = quantity;
          return products;
        })
      ,take(1));
  }
}
