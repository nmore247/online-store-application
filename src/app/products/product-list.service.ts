import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private http: HttpClient) { }

  private productsURL = 'https://fakestoreapi.com/products';

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsURL).pipe(
      map(products => products.map(product => ({ ...product, isFavorite: false, quantity: 1 } as IProduct)))
    );
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.productsURL}/${id}`).pipe(
      map(product => ({ ...product, isFavorite: false, quantity: 1 } as IProduct))
    );
  }

  public getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.productsURL + '/' + 'categories');
  }
}
