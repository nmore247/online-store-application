import { Component, Input } from '@angular/core';
import { IProduct } from '../products/product';
import { materialModules } from '../material-module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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

  constructor() {}

  
}
