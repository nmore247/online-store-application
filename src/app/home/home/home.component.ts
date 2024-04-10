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
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public products!: IProduct[]

  constructor(private productService: ProductListApplicationService) {


  }

  ngOnInit() {

    this.productService.fetchAllProducts()

    this.productService._$productsList.subscribe(data => {
      if (data) {
        this.products = data
      }
    }
    )

  }



}
