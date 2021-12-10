import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any [] = [];
  ProductName: string = '';
  addedProductIds: any [] = [];
  cartText: string='';
  showAlert: boolean=false;
  orders: any[]=[];

  constructor(private _product:ProductsService) {
  }

  ngOnInit(): void {
    this._product.getProducts().subscribe(products=>{
      this.products = products;
    })
  }

  addOrder(Product:any){
    this.editProductQuantity(Product);
    let o:any = localStorage.getItem('orders')
    console.log("o",o);
    if(o){
      this.orders = JSON.parse(o);
      console.log("orders",this.orders);

    }
  if(this.orders){
    this.orders.push(Product)
    localStorage.setItem('orders',JSON.stringify(this.orders))

  }else{
    let orders = [];
    orders.push(Product)
    localStorage.setItem('orders',JSON.stringify(orders))
  }
    this.ProductName = Product.ProductName;
    this.showAlert = true;
    this.addedProductIds.push(Product.ProductId);
    setTimeout(() => {
    this.showAlert = false;
    }, 500);
  }

  editProductQuantity(product:any){
    this._product.updateProductQuantity(product.ProductId,product.Quantity -1)
    .subscribe(products=>{
      this.products = products;
    })
  }


}
