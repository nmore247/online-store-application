import { Component, OnInit } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../products/product';
import { CartService } from '../../cart/cart.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../authentication/auth-service/authentication.service';
import { UserInterface } from '../../authentication/User';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public products!: IProduct[];
  public cartData!: IProduct[];
  public cartTotalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initializeCartData();
    this.http.get<{ user: UserInterface }>(environment.userURL)
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response?.user);
        },
        error: () => {
          this.authService.currentUserSig.set(null);
        },
      });
  }

  private initializeCartData() {
    this.cartService._cartContent$.subscribe((data) => {
      if (data) {
        this.cartData = data;
      }
      if (this.cartData.length > 0) {
        this.cartTotalAmount = this.calculateCartTotal(this.cartData);
      }
    });
  }

  private calculateCartTotal(productList: IProduct[]): number {
    return parseFloat(
      productList
        .map((data) => data.price)
        .reduce((a, b) => a + b)
        .toFixed(2)
    );
  }

  public logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}
