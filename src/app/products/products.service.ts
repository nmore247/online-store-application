import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, pipe, shareReplay} from 'rxjs';
import {toSignal} from "@angular/core/rxjs-interop";
import {Product} from "./product";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {
  }

  private productsURL = 'https://fakestoreapi.com/products';
  private products$ = this.http.get<Product[]>(this.productsURL)
    .pipe(
      map(products => products
        .map(product => (
            {
              ...product,
              isFavorite: false,
              quantity: 1
            } as Product
          )
        )
      ),
      shareReplay(1)
    );

  private categories$ = this.http.get<string[]>(`${this.productsURL}/categories`);

  public products = toSignal(this.products$, {initialValue: [] as Product[]});

  public categories = toSignal(this.categories$, {initialValue: [] as string[]});

}
