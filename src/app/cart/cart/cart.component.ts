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
    this.cartService._cartContent.subscribe((data) => {
      if(data){
        this.cartData = data;
      }
      if(this.cartData.length > 0){
        this.cartTotalAmount = parseFloat(this.cartData.map((data) => data.price).reduce((a, b) => a + b).toFixed(2));
      }
     
    });
  }
}
