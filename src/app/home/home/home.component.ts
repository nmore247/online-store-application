import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { ProductListService } from '../../products/product-list.service';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProducts } from '../../products/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [materialModules],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public products: any = []

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
