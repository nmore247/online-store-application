import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../cart/cart.service';
import { materialModules } from '../../material-module';
import { IProduct } from '../product';

@Component({
  selector: 'product-card-list',
  standalone: true,
  imports: [materialModules, CommonModule, RouterModule],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {

  @Input() products!: IProduct[];

  public isLiked = false;
  
  public product!: IProduct;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  public toggleLike() {
    this.isLiked = !this.isLiked;
  }

  public addToCart(id: number) {
    const cartProduct = this.products.filter((product) => id == product.id);
    this.cartService.addToCart(cartProduct[0]);
    this.snackBar.open('Item Added To Cart!', '', {
      duration: 1000,
    });
  }
}
