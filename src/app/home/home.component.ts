import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Product} from "../products/product";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public products!: Product[];

  constructor() {
  }

  public title = 'Welcome to E-Store';

}
