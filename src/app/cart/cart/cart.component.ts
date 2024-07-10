import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { IProduct } from '../../products/product';
import { materialModules } from '../../material-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [materialModules, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public cartData!: IProduct[];
  public cartTotalAmount : number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initializeCartData();
  }

  public removeCartItem(id: number){
    this.cartService.removeFromCart(id);
    this.initializeCartData();

  }

  private initializeCartData(){
    this.cartService._cartContent$.subscribe((data) => {
      if(data){
        this.cartData = data;
      }
      if(this.cartData.length > 0){
        this.cartTotalAmount = this.cartService.calculateCartTotal(this.cartData)
      }
     
    });
  }

  public emptyCart(){
    this.cartService.clearCart();
    this.cartTotalAmount = 0;
  }
}
