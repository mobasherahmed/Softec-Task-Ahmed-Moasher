import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

const routes: Routes = [
    {
        path:'',
        component: OrdersListComponent
    },
    {
        path:'order-details',
        component: OrderDetailsComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }