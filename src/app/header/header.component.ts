import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeText: string ='products'
  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }

  navigateTo(route:string){
    if(route === 'products'){
      this.router.navigate([`products`])
      this.activeText='products'
    }else if (route === 'cart'){
      this.router.navigate([`orders/cart`])
      this.activeText='cart'
    }else if (route === 'orders'){
      this.router.navigate([`orders/order-list`])
      this.activeText='orders'
    }else{
      this.router.navigate([`profile`])
      this.activeText='profile'
    }
  }

}
