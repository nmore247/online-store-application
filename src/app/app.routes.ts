import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    loadComponent: () => import('./products/products-container/products-container.component').then(c => c.ProductsContainerComponent)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
