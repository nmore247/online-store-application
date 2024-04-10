import { Component, Input } from '@angular/core';
import { IProduct } from '../products/product';
import { materialModules } from '../material-module';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [materialModules],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {

@Input() products! : IProduct[]


}
