import { Component, Input } from '@angular/core';
import { IProduct } from '../products/product';
import { materialModules } from '../material-module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [materialModules, CommonModule, RouterModule],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss',
})
export class CardLayoutComponent {
  @Input() products!: IProduct[];

  public product!: IProduct;

  constructor(private cartService: CartService) {}

  public addToCart(id: number){
    const cartProduct = this.products.filter(product => id == product.id )
    this.cartService.addToCart(cartProduct[0])
  }
}
