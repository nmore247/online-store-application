import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../products/product';
import { CartService } from '../../cart/cart.service';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../../authentication/auth-service/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public products!: IProduct[];
  public cartData!: IProduct[];
  public cartTotalAmount: number = 0;

  constructor(
    private cartService: CartService,
    public authService: AuthenticationService
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
        this.cartTotalAmount = this.cartService.calculateCartTotal(this.cartData);
      }
    });
  }



  public logout(): void {
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}
