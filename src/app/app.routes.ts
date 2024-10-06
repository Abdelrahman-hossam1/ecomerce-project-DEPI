import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: "all-products",
    component: ProductsPageComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

