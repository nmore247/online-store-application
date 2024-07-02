import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProduct } from '../../products/product';
import { CardLayoutComponent } from '../../card-layout/card-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [materialModules, CardLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public products!: IProduct[];
  public categories: any;
  public selectedCategories: string[] = [];
  constructor(private productService: ProductListApplicationService) {}

  ngOnInit() {
    this.fetchAllProducts();
    this.getAllCategories();
  }

    public filterItems() {
      if (this.selectedCategories.length === 0) {
        return this.products;
      }
      return this.products.filter(item => this.selectedCategories.includes(item.category));
    }
  
    public onCategoryChange(category: string, checked: boolean) {
      if (checked) {
        this.selectedCategories.push(category);
      } else {
        this.selectedCategories = this.selectedCategories.filter(c => c !== category);
      }
    }
  

  private getAllCategories() {
    this.productService.getAllCategories();
    this.productService._allCategories$.subscribe((data) => {
      if (data) {
        this.categories = data;
      }
    });
  }

  private fetchAllProducts() {
    this.productService.fetchAllProducts();
    this.productService._$productsList.subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }
}
