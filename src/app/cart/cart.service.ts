import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cartItems! : IProduct[];
  private cartContent$ = new BehaviorSubject<IProduct[]>([]);
  public _cartContent$ = this.cartContent$.asObservable();


  public addToCart(product: IProduct) {
    this.cartItems = this.cartContent$.value;
    this.cartItems.push(product);
    this.cartContent$.next(this.cartContent$.value);
  }

  public removeFromCart(id: number) {
    this.cartItems = this.cartContent$.value;
    if (this.cartItems.length > 0) {
      this.cartItems = this.cartItems.filter((product) => product.id !== id);
      this.cartContent$.next(this.cartItems);
    }
  }

  public clearCart(): void {
    this.cartItems = this.cartContent$.value;
    if (this.cartItems.length > 0) {
      this.cartItems.length = 0;
      this.cartContent$.next(this.cartContent$.value);
    }
  }
}
