import { Component, OnInit } from '@angular/core';
import { ProductListApplicationService } from '../../products/product-list-application.service';
import { IProduct } from '../../products/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductListApplicationService,
    private route: ActivatedRoute
  ) {}

  public product!: IProduct;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getSingleProduct(Number(id));
    this.productService._selectedProduct$.subscribe((data) => {
      this.product = data;
    });
  }
}
