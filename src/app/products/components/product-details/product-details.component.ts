import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any = {}
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(product:any){

  }
  buyNow(product:any){
    
  }

}
