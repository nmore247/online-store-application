import {Component} from '@angular/core';
import {IProduct} from '../products/product';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public products!: IProduct[];
  public categories!: string[];
  public selectedCategories: string[] = [];


  constructor() {
  }

  public title = 'Welcome to E-Store';

  public filterItems() {
    if (this.selectedCategories.length === 0) {
      return this.products;
    }
    return this.products.filter((item) =>
      this.selectedCategories.includes(item.category)
    );
  }

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
