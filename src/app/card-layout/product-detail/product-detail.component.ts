import { Component, OnInit } from '@angular/core';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProduct } from '../../products/product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { materialModules } from '../../material-module';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [materialModules, CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  public products!: IProduct[];
  constructor(
    private productService: ProductListApplicationService,
    private route: ActivatedRoute, 
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  public product!: IProduct;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(Number(id));
    this.productService._selectedProduct$.subscribe((data) => {
      this.product = data;
    });
    this.fetchAllProducts();
  }

  public addToCart(id: number) {
    const cartProduct = this.products.filter((product) => id == product.id);
    this.cartService.addToCart(cartProduct[0]);
    this.snackBar.open('Item Added To Cart!', '', {
      duration: 1000,
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
