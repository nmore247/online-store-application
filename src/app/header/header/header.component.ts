import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProduct } from '../../products/product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Mock Store';
  public isLoggedIn = this.auth.isLoggedIn();
  public products!: IProduct[];
  public cartData!: IProduct[];
  constructor(
    private auth: AuthenticationService,
    private productService: ProductListApplicationService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService._cartContent.subscribe(data=> {
      this.cartData = data;
    })
  }

  public fetchAllProducts() {
    this.productService.fetchAllProducts();
    this.productService._$productsList.subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }
}
