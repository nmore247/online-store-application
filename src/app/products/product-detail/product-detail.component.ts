import { Component, OnInit } from '@angular/core';
import { ProductListApplicationService } from '../product-list-application.service';
import { IProduct } from '../product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { materialModules } from '../../material-module';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-product-detail',
    imports: [materialModules, CommonModule, RouterModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  public products!: IProduct[];
  public productStars!: number[];
  constructor(
    private productService: ProductListApplicationService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  public product!: IProduct;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(Number(id));
    this.getCurrentProduct();
  }

  public addToCart() {
    this.getCurrentProduct()
    this.cartService.addToCart(this.product);
    this.snackBar.open('Item Added To Cart!', '', {
      duration: 1000,
    });
  }

  private getCurrentProduct() {
    this.productService._selectedProduct$.subscribe((data) => {
      if (data) {
      this.product = data;
        this.productStars = this.getStars(data);
      }
    });
  }

  private getStars(product: IProduct) {
    return Array(Math.floor(product?.rating.rate)).fill(0);
  }
}
