import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
    
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('assets/products.json').pipe(take(1));
  }

  getProduct(id: number) {
    let p:any =  localStorage.getItem('products');
    let products = JSON.parse(p);
    let product = products.find((product: any) => product.ProductId === id);
    return product;
  }

  updateProductQuantity(id: number, quantity: number) {
   let p:any =  localStorage.getItem('products');
   let products = JSON.parse(p);
   let product = products.find((product: any) => product.ProductId === id);
   product.Quantity = quantity;
   localStorage.setItem('products',JSON.stringify(products));
   return products;
  }
}
