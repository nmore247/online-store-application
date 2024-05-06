import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailComponent } from './card-layout/product-detail/product-detail.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];
