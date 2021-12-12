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
      this.product = this._productService.getProduct(Number(params.get('id')))
    })
   }

  ngOnInit(): void {
  }


}
