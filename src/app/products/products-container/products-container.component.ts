import {Component, inject} from '@angular/core';
import {ProductsService} from "../products.service";
import {CurrencyPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-products-container',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {

  public productsService = inject(ProductsService);

  public products = this.productsService.products;
  public categories = this.productsService.categories;

}
