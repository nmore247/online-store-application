import { Component, Input } from '@angular/core';
import { IProduct } from '../products/product';
import { materialModules } from '../material-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [materialModules, CommonModule],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {

@Input() products! : IProduct[]


}
