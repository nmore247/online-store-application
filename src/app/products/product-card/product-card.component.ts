import {Component, computed, inject, Input} from '@angular/core';
import {ProductsService} from "../products.service";
import {CartService} from "../../cart/cart.service";
import {IProduct} from "../product";
import {MatIcon} from "@angular/material/icon";
import {CurrencyPipe} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-product-card',
  imports: [
    MatIcon,
    CurrencyPipe,
    MatIconButton,
    MatTooltip
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  errorMessage = '';
  numbers: number[] = [];

  @Input() product!: IProduct

  constructor() {
    this.generateNumbers(1, 10);
  }

  public products = computed(() => {
    try {
      return this.productsService.products();
    } catch (e) {
      this.errorMessage = typeof e === 'string' ? e : 'Error';
      return [];
    }
  });

  private generateNumbers(start: number, end: number) {
    this.numbers = Array.from({length: end - start + 1}, (_, i) => start + i);
  }

  public addToCart(product: IProduct) {
    this.cartService.addToCart(product)
  }

  public toggleFavorite(product: IProduct): void {
    product.isFavorite = !product.isFavorite;
  }

}
