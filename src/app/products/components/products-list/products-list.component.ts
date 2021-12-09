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
  ProductName: any;
  ProductId: any;
  cartText: string='';
  showAlert: boolean=false;

  constructor(private _product:ProductsService) {
  }

  ngOnInit(): void {
    this._product.getProducts().subscribe(products=>{
      this.products = products;
      console.log("pp",products);
      localStorage.setItem('Products', JSON.stringify(products));

      
    })
  }

   //add Product
   addProduct(Product:any) {
    // edit avaliable seat .. 
    this.editProductSeats(Product.ProductId, Product.AvailableSeats - 1)
    // this.share.assignRequestedProduct(Product)
    this.ProductName = Product.ProductName
    this.ProductId.push(Product.ProductId)
    // this.share.selectedProductsIds = this.ProductId;
    this.cartText = 'In your cart'
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false
    }, 2000);
  }


  editProductSeats(ProductId:string, AvaliableSeats:number) {
    let p:any = localStorage.getItem('Products');
    let allProducts = JSON.parse(p);
    allProducts.forEach((el:any) => {
      if (el.ProductId === ProductId) {
        el.AvailableSeats = AvaliableSeats
      }
    });
    localStorage.setItem('Products', JSON.stringify(allProducts));
    this.products = allProducts
  }

}
