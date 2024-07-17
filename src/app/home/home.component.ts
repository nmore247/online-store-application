import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { materialModules } from '../material-module';
import { IProduct } from '../products/product';
import { ProductCardListComponent } from '../products/product-card-list/product-card-list.component';
import { ProductListApplicationService } from '../products/product-list-application.service';
import { SideBarService } from '../toolbar/header/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [materialModules, CommonModule, ProductCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  public products!: IProduct[];
  public categories!: string[];
  public selectedCategories: string[] = [];

  @ViewChild('sidenav') public sidenav!: MatSidenav;


  constructor(
    private productService: ProductListApplicationService, 
    private sideBarService: SideBarService,
  ) { }
  

  ngOnInit() {
    
    
    this.fetchAllProducts();
    this.getAllCategories();
  }

  ngAfterViewInit(): void {
    this.sideBarService.sideNavState$.subscribe(state => {
      if (state) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  
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
    this.productService._productsList$.subscribe((data) => {
      if (data) {
        this.products = data;
      }
    });
  }
}
