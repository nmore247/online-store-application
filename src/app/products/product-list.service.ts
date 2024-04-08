import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  private productsURL = "https://fakestoreapi.com/products"

  public getProducts(): Observable<IProducts> {
    return this.http.get<IProducts>(this.productsURL)
  }
}
