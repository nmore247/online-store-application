import {Component, computed, inject} from '@angular/core';
import {ProductsService} from "../products.service";
import {ProductCardComponent} from "../product-card/product-card.component";
import {MatCheckbox} from "@angular/material/checkbox";
import {IProduct} from "../product";

@Component({
  selector: 'app-products-container',
  imports: [
    ProductCardComponent,
    MatCheckbox
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {

  private productsService = inject(ProductsService);
  errorMessage = '';
  public selectedCategories: string[] = [];

  constructor() {

  }

  private products = computed(() => {
    try {
      return this.productsService.products();
    } catch (e) {
      this.errorMessage = typeof e === 'string' ? e : 'Error';
      return [];
    }
  });

  public filterItems(): IProduct[] {
    if (this.selectedCategories.length === 0) {
      return this.products();
    } else {
      return this.products().filter((item) =>
        this.selectedCategories.includes(item.category)
      );
    }
  }

  public categories = computed(() => {
    try {
      return this.productsService.categories();
    } catch (e) {
      this.errorMessage = typeof e === 'string' ? e : 'Error';
      return [];
    }
  });

  public onCategoryChange(category: string, checked: boolean) {
    if (checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== category
      );
    }
  }

}
