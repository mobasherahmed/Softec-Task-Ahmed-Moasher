import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
    {
        path:'',
        redirectTo:'products',
        pathMatch:'full'
    },
    {
      path:'products',
      component: ProductsListComponent,
    },
    {
      path:'products/product-details/:id',
      component: ProductDetailsComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }