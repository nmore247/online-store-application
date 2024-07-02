import { Component, OnInit } from '@angular/core';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { CartService } from '../cart.service';
import { IProduct } from '../../products/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public cartData!: IProduct[]
  constructor(
    private productService: ProductListApplicationService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService._cartContent.subscribe((data) => {
      this.cartData = data;
    });
  }
}
