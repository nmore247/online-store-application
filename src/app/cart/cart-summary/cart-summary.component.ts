import {Component, inject} from '@angular/core';
import {CartService} from "../cart.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-cart-summary',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  private cartService = inject(CartService);
  public cartItems = this.cartService.cartItems;

  public subTotal = this.cartService.subTotal;
  public totalPrice = this.cartService.totalPrice;
  public deliveryFee = this.cartService.deliveryFee;
  public tax = this.cartService.tax;
}
