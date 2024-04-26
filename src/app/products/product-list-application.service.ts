import { Injectable } from '@angular/core';
import { ProductListService } from './product-list.service';
import { IProduct } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListApplicationService {
  constructor(private productService: ProductListService) {}

  private $productsList = new BehaviorSubject<IProduct[]>(null!);
  public _$productsList = this.$productsList.asObservable();

  private selectedProduct$ = new BehaviorSubject<IProduct>(null!);
  public _selectedProduct$ = this.selectedProduct$.asObservable();

  public fetchAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      if (data) {
        this.$productsList.next(data);
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
}
