import { Injectable } from '@angular/core';
import { ProductListService } from './product-list.service';
import { IProducts } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListApplicationService {

  constructor(private productService : ProductListService) {}

  private $productsList = new BehaviorSubject<IProducts>(null!)
  public _$productsList = this.$productsList.asObservable()

  public fetchAllProducts() {
     this.productService.getProducts().subscribe((data)=> {
      if(data){
       this.$productsList.next(data)
      }
    })
  }
}
