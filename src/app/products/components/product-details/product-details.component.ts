import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {}
  constructor(private route:ActivatedRoute,private _productService:ProductsService) {
    this.route.paramMap.subscribe(params=>{
      this._productService.getProduct(Number(params.get('id'))).subscribe(product=>{
        this.product = product;
      })
    })
   }

  ngOnInit(): void {
  }
  addToCart(product:any){
    
  }
  buyNow(product:any){
    
  }

}
