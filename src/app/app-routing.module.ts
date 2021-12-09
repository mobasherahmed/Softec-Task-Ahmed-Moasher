import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/404.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'orders',
    loadChildren: ()=>import('./orders/orders.module').then(m=>m.OrdersModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
