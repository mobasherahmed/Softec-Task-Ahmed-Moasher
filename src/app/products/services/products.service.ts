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

  updateProductQuantity(id: number, quantity: number): Observable<any> {
    return this.http.get('assets/products.json').pipe(
        map((products:any)=>{
          let product = products.find((product: any) => product.ProductId === id);
          product.Quantity = quantity;
          return products;
        })
      ,take(1));
  }
}
