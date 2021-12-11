import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:any
  constructor(private _orderService:OrdersService,private route:ActivatedRoute) {
    this.route.paramMap.subscribe(params=>{
      this.order =   this._orderService.getOrder(params.get('id')) 
    })
  }


  ngOnInit(): void {
 
  }

}
