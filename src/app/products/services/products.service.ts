import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Reading Local JSON Files Using Angular HttpClient
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get('assets/products.json')
  }
}
