import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../authentication/auth-service/authentication.service';
import { CartService } from '../../cart/cart.service';
import { materialModules } from '../../material-module';
import { IProduct } from '../../products/product';
import { HeaderCartMenuComponent } from '../header-cart-menu/header-cart-menu.component';
import { SideBarService } from './sidebar.service';


@Component({
    selector: 'app-header',
    imports: [materialModules, RouterModule, CommonModule, HeaderCartMenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public products!: IProduct[];
  public cartData!: IProduct[];
  public cartTotalAmount: number = 0;
  public cartTotalItems: number = 0;

  constructor(
    private cartService: CartService,
    public authService: AuthenticationService,
    private sideBarService: SideBarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeCartData();
  }

  private initializeCartData() {
    this.cartService._cartContent$.subscribe((data) => {
      if (data) {
        this.cartData = data;
      }
      if (this.cartData.length > 0) {
        this.cartTotalItems = this.cartService.calculateTotalCartItems(this.cartData);
      }
    });
  }

  public logout(): void {
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
    this.router.navigate(['/login']);
  }

  public toggleSideBar() {
    this.sideBarService.toggleSideNav();

  }
}
