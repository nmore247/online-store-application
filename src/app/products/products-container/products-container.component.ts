import {Component, computed, inject} from '@angular/core';
import {ProductsService} from "../products.service";
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: 'app-products-container',
  imports: [
    ProductCardComponent
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {

  private productsService = inject(ProductsService);
  errorMessage = '';

  constructor() {

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



}
