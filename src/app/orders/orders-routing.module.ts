import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

const routes: Routes = [
    {
        path:'',
        redirectTo:'order-list'
    },
    {
        path:'order-list',
        component: OrdersListComponent
    },
    {
        path:'cart',
        component: CartComponent
    },
    {
        path:'checkout',
        component: CheckoutComponent
    },
    {
        path:'order-details/:id',
        component: OrderDetailsComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }