import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailComponent } from './card-layout/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];
