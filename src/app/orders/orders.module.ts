import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from './services/orders.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    OrdersListComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule,
    ReactiveFormsModule
  ],
  providers:[OrdersService]
})
export class OrdersModule { }
