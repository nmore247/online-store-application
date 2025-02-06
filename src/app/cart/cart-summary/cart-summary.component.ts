import {Component, inject} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  private cartService = inject(CartService);
  public cartItems = this.cartService.cartItems;
}
