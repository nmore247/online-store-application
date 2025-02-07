import {computed, Injectable, signal} from '@angular/core';
import {Product} from "../products/product";
import {CartItem} from "./cart-summary/cart";


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
  }

  public cartItems = signal<CartItem[]>([]);

  // Total up the extended price for each item
  // @ts-ignore
  public subTotal = computed(() => this.cartItems().reduce((a, b) => a + (b.quantity! * b.price), 0));

  // Delivery is free if spending more than 100,000
  public deliveryFee = computed(() => this.subTotal() < 50 ? 4.99 : 0);

  // Tax could be based on shipping address zip code
  public tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  // Total price
  totalPrice = computed(() => this.subTotal() + this.deliveryFee() + this.tax());

  public addToCart(product: Product) {
    const index = this.cartItems().findIndex(item => item.product.title === product.title);

    if (index === -1) {
      // Not already in the cart, so add with default quantity of 1
      this.cartItems.update(items => [...items, {product, quantity: 1}]);
    } else {
      this.cartItems.update(items =>
        [
          ...items.slice(0, index),
          {...items[index], quantity: items[index].quantity + 1},
          ...items.slice(index + 1)
        ]);

    }
  }

  public removeFromCart(cartItem: CartItem) {
    if (this.cartItems().length > 0) {
      this.cartItems.update(items => items.filter(item => item.product.title !== cartItem.product.title));
    }
  }

  public clearCart(): void {
    if (this.cartItems.length > 0) {
      this.cartItems.set([]);
    }
  }


}
