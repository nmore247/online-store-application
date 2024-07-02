import { Component } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProduct } from '../../products/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appTitle: string = 'Mock Store';
  public isLoggedIn = this.auth.isLoggedIn();
  public products!: IProduct[];

  constructor(
    private auth: AuthenticationService,
    private productService: ProductListApplicationService
  ) {}

  public fetchAllProducts() {
    this.productService.fetchAllProducts();
    this.productService._$productsList.subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }
}
