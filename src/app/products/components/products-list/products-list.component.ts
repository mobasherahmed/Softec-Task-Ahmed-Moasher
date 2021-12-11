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
 

  constructor(private _product:ProductsService) {
  }

  ngOnInit(): void {
    this._product.getProducts().subscribe(products=>{
      this.products = products;
    })
    this.checkPreviousOrders()
  }

  // to highlight product that already in your cart ..
  checkPreviousOrders(){
    let o:any = localStorage.getItem('cartItems');
    if(o){
      let cartItems:any [] = JSON.parse(o);
      cartItems.forEach(o=>{
        this.addedProductIds.push(o.ProductId) 
      })
    }
  }

  addOrder(Product:any){
    this.editProductQuantity(Product);
    this.addProductToCart(Product)
    this.ProductName = Product.ProductName;
    this.showAlert = true;
    this.addedProductIds.push(Product.ProductId);
    setTimeout(() => {
    this.showAlert = false;
    }, 500);
  }

  addProductToCart(Product:any){
    // add new property to this product that requested count = 1 ..
    Product.Count = 1;
    // check if there is an cartItems list in local storage or not ..
    let o:any = localStorage.getItem('cartItems');
    if(o){
      let cartItems = JSON.parse(o);
      cartItems.push(Product)
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }else{
      let cartItems = [];
      cartItems.push(Product)
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    }
  }

  editProductQuantity(product:any){
    this._product.updateProductQuantity(product.ProductId,product.Quantity -1)
    .subscribe(products=>{
      this.products = products;
    })
  }


}
