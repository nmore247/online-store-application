import { Injectable } from '@angular/core';
import { ProductListService } from './product-list.service';
import { IProduct } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListApplicationService {
  constructor(private productService: ProductListService) { }

  private productsList$ = new BehaviorSubject<IProduct[]>(null!);
  public _productsList$ = this.productsList$.asObservable();

  private selectedProduct$ = new BehaviorSubject<IProduct>(null!);
  public _selectedProduct$ = this.selectedProduct$.asObservable();

  private allCategories$ = new BehaviorSubject<string[]>([]);
  public _allCategories$ = this.allCategories$.asObservable();


  public fetchAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      if (data) {
        this.productsList$.next(data);
      }
    });
  }

  public getSingleProduct(id: number) {
    this.productService.getProductById(id).subscribe((data) => {
      if (data) {
        this.selectedProduct$.next(data);
      }
    });
  }

  public getAllCategories() {
    this.productService.getAllCategories().subscribe(data => {
      if (data) {
        this.allCategories$.next(data)
      }
    })
  }

}
