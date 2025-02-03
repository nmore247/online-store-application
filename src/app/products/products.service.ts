import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {map} from 'rxjs';
import {IProduct} from './product';
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {
  }

  private productsURL = 'https://fakestoreapi.com/products';
  private http = inject(HttpClient);

  private products$ = this.http.get<IProduct[]>(this.productsURL).pipe(
    map(products => products.map(product => ({...product, isFavorite: false, quantity: 1} as IProduct))));

  private categories$ = this.http.get<string[]>(`${this.productsURL}/categories`);

  public products = toSignal(this.products$, {initialValue: [] as IProduct[]});

  public categories = toSignal(this.categories$);

}
