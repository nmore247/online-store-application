import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../cart/cart.service';
import { materialModules } from '../../../material-module';
import { IProduct } from '../../../products/product';


@Component({
  selector: 'app-header-cart-menu',
  standalone: true,
  imports: [materialModules, RouterModule, CommonModule],
  templateUrl: './header-cart-menu.component.html',
  styleUrl: './header-cart-menu.component.scss'
})
export class HeaderCartMenuComponent implements OnInit {
  public cartData!: IProduct[];
  public cartTotalAmount: number = 0;
  constructor(
    private cartService: CartService,
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

  public removeCartItem(id: number) {
    this.cartService.removeFromCart(id);
    this.initializeCartData();

  }
}
