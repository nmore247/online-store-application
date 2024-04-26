import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private http: HttpClient) {}

  private productsURL = 'https://fakestoreapi.com/products';

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsURL);
  }

  public getProductById(id: number) {
    return this.http.get<IProduct>(this.productsURL + '/' + id);
  }
}
