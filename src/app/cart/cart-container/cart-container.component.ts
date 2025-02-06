import { Component } from '@angular/core';
import {CartListComponent} from "../cart-list/cart-list.component";
import {CartSummaryComponent} from "../cart-summary/cart-summary.component";

@Component({
  selector: 'app-cart-container',
  imports: [
    CartListComponent,
    CartSummaryComponent
  ],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss'
})
export class CartContainerComponent {

}
