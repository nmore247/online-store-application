import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() { }

  private cartItems!: IProduct[];
  private cartContent$ = new BehaviorSubject<IProduct[]>([]);
  public _cartContent$ = this.cartContent$.asObservable();


  public addToCart(product: IProduct) {
    this.cartItems = this.cartContent$.value;
    if (this.cartItems.includes(product)) {
      product.quantity! += 1;
    } else {
      this.cartItems.push(product);
    }
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

  public calculateCartTotal(productList: IProduct[]): number {
    return parseFloat(
      productList
        .map((data) => (data.price) * data.quantity!)
        .reduce((acc, current) => acc + current , 0)
        .toFixed(2)
    );
  }

  public calculateTotalCartItems(productList: IProduct[]): number {
    return productList.map(data => data.quantity).reduce((acc, current) => acc! + current!, 0)!
  }

}
