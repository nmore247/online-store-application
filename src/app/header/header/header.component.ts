import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { IProduct } from '../../products/product';
import { CartService } from '../../cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  
  public isLoggedIn = this.auth.isLoggedIn();

  public products!: IProduct[];
  public cartData!: IProduct[];
  public cartTotalAmount : number = 0;

  constructor(private auth: AuthenticationService,private cartService: CartService) {}

  ngOnInit(): void {
    this.initializeCartData();
  }

  private initializeCartData(){
    this.cartService._cartContent$.subscribe((data) => {
      if(data){
        this.cartData = data;
      }
      if(this.cartData.length > 0){
        this.cartTotalAmount = this.calculateCartTotal(this.cartData)
      }
     
    });
  }

  private calculateCartTotal(productList: IProduct[]): number{
    return parseFloat(productList.map((data) => data.price).reduce((a, b) => a + b).toFixed(2));
  }

}
