import {Component, computed, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CartService} from "./cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  providers: []
})
export class AppComponent {
  title = 'e-store';
  private cartService = inject(CartService);
  public cartItems = this.cartService.cartItems;
  public cartCount = computed(() => this.cartService.cartItems().reduce(
    (acc, item) => acc + item.quantity, 0));
}
