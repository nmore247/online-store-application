import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailComponent } from './card-layout/product-detail/product-detail.component';
import { CartComponent } from './cart/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
];
