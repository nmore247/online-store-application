import {Component, computed, inject} from '@angular/core';
import {ProductsService} from "../products.service";
import {CurrencyPipe} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-products-container',
  imports: [
    CurrencyPipe,
    MatTooltip
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {

  public productsService = inject(ProductsService);
  errorMessage = '';
  numbers: number[] = [];

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

  public categories = computed(() => {
    try {
      return this.productsService.categories();
    } catch (e) {
      this.errorMessage = typeof e === 'string' ? e : 'Error';
      return [];
    }
  });

  private generateNumbers(start: number, end: number) {
    this.numbers = Array.from({length: end - start + 1}, (_, i) => start + i);
  }

}
