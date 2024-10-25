import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent) },
  { path: 'login', loadComponent: () => import("./authentication/login/login.component").then((m) => m.LoginComponent) },
  { path: 'register', loadComponent: () => import("./authentication/register/register.component").then((m) => m.RegisterComponent) },
  { path: 'products/:id', loadComponent: () => import("./products/product-detail/product-detail.component").then((m) => m.ProductDetailComponent) },
  { path: 'cart', loadComponent: () => import("./cart/cart/cart.component").then((m) => m.CartComponent) }
];