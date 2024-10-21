import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products/products-page/products-page.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignInComponent } from './pages/sign-in&sign-out/sign-in&sign-out.component';


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
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'app-cart',
    component: CartComponent
  },
  {
    path: 'sign-up',
    component: SignInComponent
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

