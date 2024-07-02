import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cartContent = new BehaviorSubject<IProduct[]>([]);
  public _cartContent = this.cartContent.asObservable();

  public addToCart(product : IProduct) {
    this.cartContent.value.push(product);
    this.cartContent.next(this.cartContent.value);
  }

  public removeFromCart(id: number) {
    if (this.cartContent.value.length > 0) {
      this.cartContent.value.filter((product) => id !== product.id);
      this.cartContent.next(this.cartContent.value);
    }
  }
}
