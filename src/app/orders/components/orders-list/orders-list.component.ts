import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders:any[]=[]
  constructor(private _orderService:OrdersService) {
    
  }

  ngOnInit(): void {
   this.orders =  this._orderService.getOrders();
  }
}
