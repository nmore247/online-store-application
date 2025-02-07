import {Component, inject} from '@angular/core';
import {CartService} from "../cart.service";
import {CurrencyPipe} from "@angular/common";
import {IProduct} from "../../products/product";

@Component({
  selector: 'app-cart-list',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {

  private cartService = inject(CartService);
  public cartItems = this.cartService.cartItems;

  public removeCartItem(item: IProduct) {
    this.cartService.removeFromCart(item)
  }
}
